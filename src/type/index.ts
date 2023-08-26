export interface AutocompleteObject {
  id: string;
  label: string;
}
export interface SelectObject {
  value: number;
  label: string;
}
export enum ContractType {
  SELL = 1,
  RENT = 2,
}
export enum PropertyType {
  HOUSE = 1,
  VILLA = 2,
  CHALET = 3,
}
