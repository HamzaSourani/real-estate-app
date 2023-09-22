import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFormikContext, FieldArray, FieldArrayRenderProps } from "formik";
import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddPropertyValues } from "@/pages/addEditProperty/type";
import UploadImageButton from "./uploadImageButton";
import { useParams } from "react-router-dom";
import { Params } from "@/type";
import { Image } from "@/api/property/type";

const PropertyImageField = () => {
  const { t } = useTranslation();
  const { propertyId } = useParams<Params>();
  const [images, setImages] = useState<Image[]>([]);
  const { values, setFieldValue } = useFormikContext<AddPropertyValues>();
  useEffect(() => {
    if (propertyId) {
      setImages(values.old_images!);
    }
  }, [propertyId]);
  console.log(images, values.images);
  return (
    <FieldArray
      name={"images"}
      render={({ push, remove }: FieldArrayRenderProps) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
          }}
        >
          <UploadImageButton push={push} setImages={setImages} />
          {values.images.length >= 10 && (
            <Typography>{t("pages.add-edit-property.max-images")}</Typography>
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 2,
              maxHeight: 500,
              overflowY: "scroll",
            }}
          >
            {values.images.map((image, index) => (
              <Box
                key={index}
                sx={{ position: "relative", width: 250, height: 250 }}
              >
                <IconButton
                  sx={{
                    position: "absolute",
                    zIndex: 5,
                    top: "5px",
                    left: "5px",
                  }}
                  color="error"
                  onClick={() => {
                    const _images = [...images];
                    const deletedImage = _images.splice(index, 1);
                    if (propertyId && deletedImage[0].id) {
                      // this mean if to add just the old image ids to the images_delete_ids

                      setFieldValue("images_delete_ids", [
                        ...values.images_delete_ids!,
                        deletedImage[0].id,
                      ]);
                    }
                    setImages(_images);
                    remove(index);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                <Box
                  component={"img"}
                  src={images[index]?.media_url}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      )}
    />
  );
};

export default PropertyImageField;
