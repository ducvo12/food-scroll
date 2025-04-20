export interface Link {
  id: number;
  url: string;
}

export interface Folder {
  id: number;
  name: string;
  links: Link[];
}
