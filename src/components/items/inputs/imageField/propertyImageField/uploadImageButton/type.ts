import { Image } from "@/api/property/type";
import { Dispatch, SetStateAction } from "react";

export interface Props {
  push: (image: string) => void;
  setImages: Dispatch<SetStateAction<Image[]>>;
}
