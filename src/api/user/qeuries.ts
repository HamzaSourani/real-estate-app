import { useMutation, useQuery } from "@tanstack/react-query";
import { addImage, getUserProfile } from ".";
import { AddImageBody } from "./type";

const useGetUserProfile = (isAuthorized: boolean) =>
  useQuery({
    queryKey: ["get-user-profile"],
    queryFn: () => getUserProfile(),
    enabled: isAuthorized,
  });
const useAddImageMutation = () =>
  useMutation({
    mutationKey: ["add-user-image"],
    mutationFn: (body: AddImageBody) => addImage(body),
  });
export { useGetUserProfile, useAddImageMutation };
