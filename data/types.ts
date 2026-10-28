export interface Author {
  id: string;
  name: string;
  initial: string;
  role?: string;
  color: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  content?: string;
  category: ArticleCategory;
  image: string;
  author: Author;
  publishedAt: string;
  readTime: number;
  views?: number;
  tags: string[];
  featured?: boolean;
}

export interface ArticleCategory {
  id: string;
  name: string;
  nameTamil: string;
  color: string;
  bgColor: string;
  count?: number;
}

export interface Temple {
  id: string;
  name: string;
  nameTamil: string;
  location: string;
  locationTamil: string;
  district: string;
  description: string;
  descriptionTamil: string;
  image: string;
  deity: string;
  deityTamil: string;
  category?: string;
  element?: TempleElement;
  featured?: boolean;
  slug?: string;
}

export interface TempleElement {
  name: string;
  emoji: string;
  color: string;
  borderColor: string;
}

export interface TempleGroup {
  id: string;
  name: string;
  nameTamil: string;
  description: string;
  emoji: string;
  gradient: string;
  borderColor: string;
  titleColor: string;
  count?: number;
}

export interface DeityCategory {
  id: string;
  name: string;
  nameTamil: string;
  emoji: string;
}

export interface Statistic {
  value: string;
  labelTamil: string;
  labelEnglish: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface FilterOptions {
  category?: string;
  search?: string;
  sortBy?: "latest" | "oldest" | "popular" | "views" | "name";
  page?: number;
  pageSize?: number;
}
