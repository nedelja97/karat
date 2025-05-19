import { useIsMobile } from "@/components/useIsMobile";
import { useGetListQuery } from "@/store/api/product";
import "../src/styles/Home.scss";
import InfoCard from "@/components/card/infoCard/InfoCard";
import CardData from "../src/data/Info";
import Newsletter from "@/components/newsletter/Newsletter";

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
      <Newsletter />
      <div className="info-cards">
        {CardData.map((item, index) => {
          return (
            <InfoCard
              key={index}
              title={item.title}
              src={item.image}
              alt={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}
