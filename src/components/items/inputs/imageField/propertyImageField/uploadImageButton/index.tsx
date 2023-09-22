import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useFormikContext } from "formik";
import { useUploadImageMutation } from "@/api/image/queries";
import { AddPropertyValues } from "@/pages/addEditProperty/type";
import LoadingButton from "@/components/other/loadingButton/LoadingButton";
import { showError } from "@/libs/reactToastify";
import { Props } from "./type";
const UploadImageButton = ({ push, setImages }: Props) => {
  const { t } = useTranslation();
  const { values } = useFormikContext<AddPropertyValues>();
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
            setImages((preImages) => [
              ...preImages,
              { media_url: URL.createObjectURL(e.target.files?.[0]!) },
            ]);
            push(data.data.image);
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
          disabled={values.images.length >= 10}
          buttonText={t("pages.add-edit-property.upload-image")}
          isSubmitting={isLoading}
        />
      </label>
    </>
  );
};
export default UploadImageButton;
