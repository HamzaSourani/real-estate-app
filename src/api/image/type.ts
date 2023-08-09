import { GenericResponse } from "../type";
import { AddImageBody } from "../user/type";

export interface UploadImageBody {
  image: File;
}
export type UploadImageResponse = GenericResponse<AddImageBody>;
