import { useIsMobile } from "@/components/useIsMobile";
import { useGetListQuery } from "@/store/api/product";
import "../src/styles/Home.scss";
import InfoCard from "@/components/card/infoCard/InfoCard";
import CardData from "../src/data/Info";
import LocationData from "../src/data/Location";
import PromoProductsData from "../src/data/PromoProducts";
import CategoriesData from "../src/data/Categories";
import allCategoriesData from "../src/data/AllCategorisData";
import AllProductsData from "../src/data/Products";
import AllBrandsData from "../src/data/BrandData";
import Newsletter from "@/components/newsletter/Newsletter";
import LocationCard from "@/components/card/locationCard/LocationCard";
import PromoCard from "@/components/card/promoCard/PromoCard";
import CategoriCard from "@/components/card/categorieCard/CategoriCard";
import AllProducts from "@/components/product/AllProducts/AllProducts";
import Brand from "@/components/card/brand/Brand";
import { useRef } from "react";
import WelcomeCard from "@/components/card/welcomeCard/WelcomeCard";
import ArrowRight from "../public/images/icons/arrow-right.svg";
import Image from "next/image";
import SeeCategoriCard from "@/components/card/seeCategoriCard/SeeCategoriCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Baner from "../public/images/global/baner_2-1678353279-584.png";
import Baner2 from "../public/images/global/promo.jpg";

export default function Home() {
  const isMobile = useIsMobile();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
      <div className="carousle-style">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <Image src={Baner} alt="Baner" />
          </div>
          <Image src={Baner2} alt="Baner2" />
        </Carousel>
      </div>
      <div className="welcome-cards">
        <WelcomeCard />
        <div className="all-categories">
          {allCategoriesData.map((item, index) => {
            return <SeeCategoriCard key={index} item={item} />;
          })}
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div className="brands-scroll-wrapper" ref={scrollRef}>
          {AllBrandsData.map((item, index) => (
            <Brand key={index} item={item} />
          ))}
        </div>

        <button className="scroll-right" onClick={scrollRightLoop}>
          <Image src={ArrowRight} alt="ArrowRight" width={20} height={20} />
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
