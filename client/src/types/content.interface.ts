export interface CardNewsState {
  id?: number;
  title: string;
  categoryId: number;
  type: string;
  status: string;
  instructorName: string;
  content: string;
  thumbnailId: number;
  instructorThumbnailId?: number;
  images: number[];
  hashtags: string[];
}
export interface ContentState {
  title: string
  categoryId: number
  type: string
  status: string
  url: string
  instructorName?: string
  content: string
  thumbnail?: string
  thumbnailId?: number
  instructorThumbnailId?: number
  isAdvertisement?: boolean
  hashtags: string[]
}

export interface CategoryState {
  id: number
  name: string
  order: any | null
  status: string
  type: string
}
