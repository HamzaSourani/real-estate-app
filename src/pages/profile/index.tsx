import { Box } from "@mui/material";
import UserCard from "@/components/pages/profile/userCard";
import UserPropertiesTabs from "@/components/pages/profile/userPropertiesTabs";
const Profile = () => {
  return (
    <Box mt={4}>
      <UserCard />
      <UserPropertiesTabs />
    </Box>
  );
};

export default Profile;
