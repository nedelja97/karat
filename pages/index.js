import { useIsMobile } from "@/components/useIsMobile";
import { useGetListQuery } from "@/store/api/product";
import "../src/styles/Home.scss";
import InfoCard from "@/components/card/infoCard/InfoCard";
import CardData from "../src/data/Info";
import LocationData from "../src/data/Location";
import Newsletter from "@/components/newsletter/Newsletter";
import LocationCard from "@/components/card/locationCard/LocationCard";

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
