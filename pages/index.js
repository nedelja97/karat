import { useIsMobile } from "@/components/useIsMobile";
import { useGetListQuery } from "@/store/api/product";
import "../src/styles/Home.scss";
import InfoCard from "@/components/card/infoCard/InfoCard";
import CardData from "../src/data/Info";
import LocationData from "../src/data/Location";
import PromoProductsData from "../src/data/PromoProducts";
import CategoriesData from "../src/data/Categories";
import AllProductsData from "../src/data/Products";
import AllBrandsData from "../src/data/BrandData";
import Newsletter from "@/components/newsletter/Newsletter";
import LocationCard from "@/components/card/locationCard/LocationCard";
import PromoCard from "@/components/card/promoCard/PromoCard";
import CategoriCard from "@/components/card/categorieCard/CategoriCard";
import AllProducts from "@/components/product/AllProducts/AllProducts";
import Brand from "@/components/card/brand/Brand";
import { useRef } from "react";

export default function Home() {
  const isMobile = useIsMobile();

  const { data: getList, isLoading } = useGetListQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const scrollRef = useRef(null);

  const scrollRightLoop = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth >= 1024 ? 350 : 360;
      const container = scrollRef.current;

      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth
      ) {
        // Vraćanje na početak ako smo na kraju
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Inače skroluj desno
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="container">
      <div style={{ position: "relative" }}>
        <div className="brands-scroll-wrapper" ref={scrollRef}>
          {AllBrandsData.map((item, index) => (
            <Brand key={index} item={item} />
          ))}
        </div>

        <button className="scroll-right" onClick={scrollRightLoop}>
          &gt;
        </button>
      </div>

      <AllProducts data={AllProductsData} />
      <PromoCard
        title={"Swatch satovi"}
        text={
          "Na našem sajtu i prodavnicama možete pronaći veliki izbor Swatch satova"
        }
        buttonTitle={"Pogledajte"}
        image={"../images/global/promo.jpg"}
        data={PromoProductsData}
      />
      <div className="popular-categories">
        <h3>Izdvajamo vaše omiljene kategorije</h3>
        <div className="categori-cards">
          {CategoriesData.map((item, index) => {
            return <CategoriCard item={item} key={index} />;
          })}
        </div>
      </div>
      <PromoCard
        title={"Swatch satovi"}
        text={
          "Na našem sajtu i prodavnicama možete pronaći veliki izbor Swatch satova"
        }
        buttonTitle={"Pogledajte"}
        image={"../images/global/promo.jpg"}
        data={PromoProductsData}
      />
      <div className="location-cards">
        <h3>Naša prodajna mesta</h3>
        <div className="location-cards-wrapper">
          {LocationData.map((item, index) => {
            return <LocationCard key={index} item={item} />;
          })}
        </div>
      </div>
      <Newsletter />
      <div className="info-cards">
        {CardData.map((item, index) => {
          return (
            <InfoCard
              key={index}
              title={item?.title}
              src={item?.image}
              alt={item?.image}
            />
          );
        })}
      </div>
    </div>
  );
}
