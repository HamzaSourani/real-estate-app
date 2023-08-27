import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useUploadImageMutation } from "@/api/image/queries";
import { showError } from "@/libs/reactToastify";
import LoadingButton from "@/components/other/loadingButton/LoadingButton";
import { Props } from "./type";
const UploadImageButton = ({ push, setImages }: Props) => {
  const { t } = useTranslation();
  const { mutate: uploadImage, isLoading } = useUploadImageMutation();
  const handleUploadImage = (
    e: ChangeEvent<HTMLInputElement>,
    push: (image: string) => void
  ) => {
    if (e.target.files && e.target.files[0]) {
      uploadImage(
        { image: e.target.files[0] },
        {
          onSuccess(data, variables, context) {
            push(data.data.image);
            setImages((preImages) => [
              ...preImages,
              URL.createObjectURL(e.target.files?.[0]!),
            ]);
          },
          onError() {
            showError(t("common.something-went-wrong"));
          },
        }
      );
    }
  };
  return (
    <>
      <input
        id="upload-image"
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        onChange={(e) => handleUploadImage(e, push)}
      />

      <label htmlFor="upload-image">
        <LoadingButton
          component={"span"}
          buttonText={t("pages.add-edit-property.upload-image")}
          isSubmitting={isLoading}
        />
      </label>
    </>
  );
};
export default UploadImageButton;
