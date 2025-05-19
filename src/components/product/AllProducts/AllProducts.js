import { useState, useRef } from "react";
import "./AllProducts.scss";
import ProductCard from "../ProductCard/ProductCard";
import ArrowRight from "../../../../public/images/icons/arrow-right.svg";
import Image from "next/image";

function AllProducts({ data }) {
  const [activeTab, setActiveTab] = useState("najprodavanije");
  const scrollRef = useRef(null);

  const scrollRightLoop = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth >= 1024 ? 350 : 360;
      const container = scrollRef.current;

      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth - 5
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
    <div className="all-products-wrapper">
      <div className="tabs-wrapper">
        <div className="tab-buttons">
          <button
            className={activeTab === "najprodavanije" ? "active" : ""}
            onClick={() => setActiveTab("najprodavanije")}
          >
            Informacije
          </button>
          <button
            className={activeTab === "akcija" ? "active" : ""}
            onClick={() => setActiveTab("akcija")}
          >
            Detalji
          </button>
          <button
            className={activeTab === "novo" ? "active" : ""}
            onClick={() => setActiveTab("novo")}
          >
            Recenzije
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "najprodavanije" && (
            <div className="product-scroll-wrapper">
              <div className="product-list" ref={scrollRef}>
                {data.map((item, index) => (
                  <ProductCard key={index} item={item} />
                ))}
              </div>

              <button className="scroll-btn right" onClick={scrollRightLoop}>
                <Image
                  src={ArrowRight}
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          )}
          {activeTab === "akcija" && (
            <div className="product-scroll-wrapper">
              <div className="product-list" ref={scrollRef}>
                {data.map((item, index) => (
                  <ProductCard key={index} item={item} />
                ))}
              </div>

              <button className="scroll-btn right" onClick={scrollRightLoop}>
                <Image
                  src={ArrowRight}
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          )}
          {activeTab === "novo" && (
            <div className="product-scroll-wrapper">
              <div className="product-list" ref={scrollRef}>
                {data.map((item, index) => (
                  <ProductCard key={index} item={item} />
                ))}
              </div>

              <button className="scroll-btn right" onClick={scrollRightLoop}>
                <Image
                  src={ArrowRight}
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
