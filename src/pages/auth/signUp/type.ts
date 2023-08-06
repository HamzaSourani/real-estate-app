import { SelectObject } from "@/type";

export interface InitialValues {
  full_name: string;
  user_name: string;
  email: string;
  city: SelectObject | null;
  password: string;
  password_confirmation: string;
}
