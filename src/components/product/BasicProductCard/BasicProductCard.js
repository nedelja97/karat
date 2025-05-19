import Image from "next/image";
import "./BasicProductCard.scss";

function BasicProductCard({ item }) {
  return (
    <div className="basic-product-card-wrapper">
      <Image
        src={item.image}
        alt={item.image}
        className="basic-product-card-image"
      />
      <div className="basic-product-info">
        <h3>{item.title}</h3>
        <span>{item.price}</span>
      </div>
    </div>
  );
}

export default BasicProductCard;
