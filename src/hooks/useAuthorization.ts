import { useEffect, useState } from "react";

const useAuthorization = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthorized(true);
    }
  }, []);

  return isAuthorized;
};

export default useAuthorization;
