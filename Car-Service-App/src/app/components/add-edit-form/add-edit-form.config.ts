export enum AddEditFormConfig {
  carNameInput = 'carNameInput'
}
export interface Car {
  brand: string;
  model?: string;
  fuel?: string;
  id?: number;
  engine?: string;
  photo?: string;
  wiki?: string;
  price?: number;
  country?: string;
}
