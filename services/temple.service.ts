import { apiService } from "./api.service";
import { temples, deityCategories, templeGroups, templeElements } from "@/data/temples";
import { districts } from "@/data/districts";
import { templeGroupDetails } from "@/data/temple-groups";
import { Temple, TempleGroup, DeityCategory, FilterOptions, PaginatedResponse } from "@/data/types";
import { District } from "@/data/districts";
import { TempleGroupDetail } from "@/data/temple-groups";

export interface TempleFilterOptions extends FilterOptions {
  deity?: string;
  district?: string;
  element?: string;
  group?: string;
  featured?: boolean;
}

class TempleService {
  async getAll(): Promise<Temple[]> {
    return apiService.getAll(temples);
  }

  async getById(id: string): Promise<Temple | null> {
    return apiService.getById(temples, id);
  }

  async getFeatured(limit: number = 5): Promise<Temple[]> {
    const featured = await apiService.filter(temples, (temple) => temple.featured === true);
    return featured.slice(0, limit);
  }

  async getByDeity(deityId: string): Promise<Temple[]> {
    return apiService.filter(temples, (temple) => temple.category === deityId);
  }

  async getByDistrict(districtId: string): Promise<Temple[]> {
    return apiService.filter(temples, (temple) => temple.district === districtId);
  }

  async getByElement(elementName: string): Promise<Temple[]> {
    return apiService.filter(temples, (temple) => temple.element?.name.toLowerCase() === elementName.toLowerCase());
  }

  async getByGroup(groupId: string): Promise<Temple[]> {
    const group = templeGroupDetails.find(g => g.id === groupId);
    if (!group) return [];
    return apiService.filter(temples, (temple) => group.templeIds.includes(temple.id));
  }

  async search(query: string): Promise<Temple[]> {
    return apiService.search(temples, ["name", "nameTamil", "location", "locationTamil", "description"], query);
  }

  async getPaginated(options: TempleFilterOptions = {}): Promise<PaginatedResponse<Temple>> {
    const { deity, district, element, group, featured, search, sortBy, page = 1, pageSize = 12 } = options;

    const filterFn = (temple: Temple): boolean => {
      if (deity && temple.category !== deity) return false;
      if (district && temple.district !== district) return false;
      if (element && temple.element?.name.toLowerCase() !== element.toLowerCase()) return false;
      if (group) {
        const groupData = templeGroupDetails.find(g => g.id === group);
        if (groupData && !groupData.templeIds.includes(temple.id)) return false;
      }
      if (featured !== undefined && temple.featured !== featured) return false;
      if (search) {
        const lowerSearch = search.toLowerCase();
        const matchesName = temple.name.toLowerCase().includes(lowerSearch);
        const matchesNameTamil = temple.nameTamil.toLowerCase().includes(lowerSearch);
        const matchesLocation = temple.location.toLowerCase().includes(lowerSearch);
        const matchesDesc = temple.description.toLowerCase().includes(lowerSearch);
        if (!matchesName && !matchesNameTamil && !matchesLocation && !matchesDesc) return false;
      }
      return true;
    };

    let filteredTemples = temples.filter(filterFn);

    if (sortBy === "name") {
      filteredTemples = [...filteredTemples].sort((a, b) => a.name.localeCompare(b.name));
    }

    const total = filteredTemples.length;
    const totalPages = Math.ceil(total / pageSize);
    const startIndex = (page - 1) * pageSize;
    const paginatedData = filteredTemples.slice(startIndex, startIndex + pageSize);

    return {
      data: paginatedData,
      total,
      page,
      pageSize,
      totalPages,
    };
  }

  // Deity categories
  getDeityCategories(): DeityCategory[] {
    return deityCategories;
  }

  getDeityById(id: string): DeityCategory | undefined {
    return deityCategories.find(d => d.id === id);
  }

  // Temple groups
  getTempleGroups(): TempleGroup[] {
    return templeGroups;
  }

  getTempleGroupById(id: string): TempleGroup | undefined {
    return templeGroups.find(g => g.id === id);
  }

  getTempleGroupDetail(id: string): TempleGroupDetail | undefined {
    return templeGroupDetails.find(g => g.id === id);
  }

  getAllTempleGroupDetails(): TempleGroupDetail[] {
    return templeGroupDetails;
  }

  // Elements
  getElements() {
    return templeElements;
  }

  // Districts
  async getAllDistricts(): Promise<District[]> {
    return apiService.getAll(districts);
  }

  async getFeaturedDistricts(): Promise<District[]> {
    return apiService.filter(districts, (d) => d.featured === true);
  }

  async getDistrictById(id: string): Promise<District | null> {
    return apiService.getById(districts, id);
  }

  async searchDistricts(query: string): Promise<District[]> {
    return apiService.search(districts, ["name", "nameTamil"], query);
  }

  // Related temples
  async getRelated(templeId: string, limit: number = 4): Promise<Temple[]> {
    const temple = await this.getById(templeId);
    if (!temple) return [];

    const sameCategory = await apiService.filter(
      temples,
      (t) => t.category === temple.category && t.id !== templeId
    );

    if (sameCategory.length >= limit) {
      return sameCategory.slice(0, limit);
    }

    const sameDistrict = await apiService.filter(
      temples,
      (t) => t.district === temple.district && t.id !== templeId && t.category !== temple.category
    );

    return [...sameCategory, ...sameDistrict].slice(0, limit);
  }

  // Statistics
  async getStats() {
    const allTemples = await this.getAll();
    const allDistricts = await this.getAllDistricts();

    const deityStats = deityCategories.map(deity => ({
      ...deity,
      count: allTemples.filter(t => t.category === deity.id).length,
    }));

    return {
      totalTemples: allTemples.length,
      totalDistricts: allDistricts.length,
      totalGroups: templeGroups.length,
      deityStats,
    };
  }
}

export const templeService = new TempleService();
export default TempleService;
