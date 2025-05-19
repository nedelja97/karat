import Image from "next/image";
import "./ProductCard.scss";
import Bag from "../../../../public/images/icons/bag.svg";
import Available from "../../../../public/images/icons/available.svg";

function ProductCard({ item }) {
  return (
    <div className="product-wrapper">
      <div className="product-image">
        <Image src={item?.image} alt={item?.image} />
      </div>

      <div className="product-info">
        <h3>{item?.title}</h3>
        <h5>Šifra: {item?.code}</h5>
      </div>

      <div className="old-price">
        <del>{item?.oldPrice ? `${item.price} RSD` : ""}</del>
      </div>

      <div className="product-btn">
        <Image src={Bag} alt="Bag" className="bag" width={15} height={15} />
        <div className="product-cart">
          <span>Korpa</span>
          <p>{item?.price} RSD</p>
        </div>
      </div>

      <div className="available">
        {" "}
        <Image src={Available} alt="Available" width={20} height={20} />{" "}
        Dostupno
      </div>
    </div>
  );
}

export default ProductCard;
