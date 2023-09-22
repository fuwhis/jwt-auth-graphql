export interface ImageState {
  file: File | null;
  fileName: string | null;
  url: string | null | undefined;
  id?: number;
}

export interface ImageProps {
  src: string | null | undefined;
  alt?: string;
  assignedWidth?: number;
  assignedHeight?: number;
  radius?: number;
}
