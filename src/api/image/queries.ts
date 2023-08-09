import { useMutation } from "@tanstack/react-query";
import { UploadImageBody } from "./type";
import { uploadImage } from ".";

const useUploadImageMutation = () =>
  useMutation({
    mutationKey: ["upload-image"],
    mutationFn: (body: UploadImageBody) => uploadImage(body),
  });
export { useUploadImageMutation };
