import { useIsMobile } from "@/components/useIsMobile";
import { useGetListQuery } from "@/store/api/product";
import "../src/styles/Home.scss";
import InfoCard from "@/components/card/infoCard/InfoCard";
import CardData from "../src/data/Info";
import LocationData from "../src/data/Location";
import PromoProductsData from "../src/data/PromoProducts";
import CategoriesData from "../src/data/Categories";
import AllProductsData from "../src/data/Products";
import Newsletter from "@/components/newsletter/Newsletter";
import LocationCard from "@/components/card/locationCard/LocationCard";
import PromoCard from "@/components/card/promoCard/PromoCard";
import CategoriCard from "@/components/card/categorieCard/CategoriCard";
import AllProducts from "@/components/product/AllProducts/AllProducts";

export default function Home() {
  const isMobile = useIsMobile();

  const { data: getList, isLoading } = useGetListQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <div className="container">
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
