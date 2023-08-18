import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ShopByBrand3 from "./pages/ShopByBrand3";
import ShopByBrand2 from "./pages/ShopByBrand2";
import HomePage from "./pages/HomePage";
import ShopByBrand from "./pages/ShopByBrand";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/shop-by-brand-2":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/shop-by-brand":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ShopByBrand3 />} />
      <Route path="/shop-by-brand-2" element={<ShopByBrand2 />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/shop-by-brand" element={<ShopByBrand />} />
    </Routes>
  );
}
export default App;
