import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RTL from "@/libs/MUI/rtl";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function App() {
  const { i18n } = useTranslation();

  return (
    <>
      {i18n.language === "ar" ? (
        <RTL>
          <Outlet />
        </RTL>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default App;
