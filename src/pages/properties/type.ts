import { PropertyTypeKeys } from "@/type";

export type PropertiesParams = {
  propertyType: PropertyTypeKeys | undefined;
};
export type Sort = "createAt" | "price" | "-price" | null;
