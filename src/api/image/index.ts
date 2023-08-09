import API_ROUTE from "@/constants/apiRoute";
import publicAxiosInstance from "../publicAxiosInstance";
import { UploadImageBody, UploadImageResponse } from "./type";

const uploadImage = async ({ image }: UploadImageBody) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await publicAxiosInstance.post<UploadImageResponse>(
    API_ROUTE.IMAGE.UPLOAD,
    formData
  );
  return data;
};
export { uploadImage };
