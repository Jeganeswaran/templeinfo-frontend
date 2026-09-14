import { PaginatedResponse, FilterOptions } from "@/data/types";

type DataSource<T> = T[] | (() => T[]) | (() => Promise<T[]>);

interface ApiServiceConfig {
  simulateDelay?: number;
}

class ApiService {
  private config: ApiServiceConfig;

  constructor(config: ApiServiceConfig = {}) {
    this.config = {
      simulateDelay: 0,
      ...config,
    };
  }

  private async delay(ms: number): Promise<void> {
    if (ms > 0) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
  }

  private async resolveData<T>(source: DataSource<T>): Promise<T[]> {
    if (Array.isArray(source)) {
      return source;
    }
    const result = source();
    return result instanceof Promise ? await result : result;
  }

  async getAll<T>(source: DataSource<T>): Promise<T[]> {
    await this.delay(this.config.simulateDelay || 0);
    return this.resolveData(source);
  }

  async getById<T extends { id: string }>(
    source: DataSource<T>,
    id: string
  ): Promise<T | null> {
    await this.delay(this.config.simulateDelay || 0);
    const data = await this.resolveData(source);
    return data.find((item) => item.id === id) || null;
  }

  async getPaginated<T>(
    source: DataSource<T>,
    options: FilterOptions = {}
  ): Promise<PaginatedResponse<T>> {
    await this.delay(this.config.simulateDelay || 0);
    const { page = 1, pageSize = 10 } = options;

    const data = await this.resolveData(source);
    const total = data.length;
    const totalPages = Math.ceil(total / pageSize);
    const startIndex = (page - 1) * pageSize;
    const paginatedData = data.slice(startIndex, startIndex + pageSize);

    return {
      data: paginatedData,
      total,
      page,
      pageSize,
      totalPages,
    };
  }

  async filter<T>(
    source: DataSource<T>,
    predicate: (item: T) => boolean
  ): Promise<T[]> {
    await this.delay(this.config.simulateDelay || 0);
    const data = await this.resolveData(source);
    return data.filter(predicate);
  }

  async search<T>(
    source: DataSource<T>,
    searchFields: (keyof T)[],
    query: string
  ): Promise<T[]> {
    await this.delay(this.config.simulateDelay || 0);
    const data = await this.resolveData(source);
    const lowerQuery = query.toLowerCase();

    return data.filter((item) =>
      searchFields.some((field) => {
        const value = item[field];
        if (typeof value === "string") {
          return value.toLowerCase().includes(lowerQuery);
        }
        return false;
      })
    );
  }

  async sort<T>(
    source: DataSource<T>,
    sortKey: keyof T,
    order: "asc" | "desc" = "asc"
  ): Promise<T[]> {
    await this.delay(this.config.simulateDelay || 0);
    const data = await this.resolveData(source);

    return [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      if (aVal < bVal) return order === "asc" ? -1 : 1;
      if (aVal > bVal) return order === "asc" ? 1 : -1;
      return 0;
    });
  }

  async filterAndPaginate<T>(
    source: DataSource<T>,
    filterFn: (item: T) => boolean,
    options: FilterOptions = {}
  ): Promise<PaginatedResponse<T>> {
    await this.delay(this.config.simulateDelay || 0);
    const { page = 1, pageSize = 10 } = options;

    const data = await this.resolveData(source);
    const filteredData = data.filter(filterFn);
    const total = filteredData.length;
    const totalPages = Math.ceil(total / pageSize);
    const startIndex = (page - 1) * pageSize;
    const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);

    return {
      data: paginatedData,
      total,
      page,
      pageSize,
      totalPages,
    };
  }
}

export const apiService = new ApiService();
export default ApiService;
