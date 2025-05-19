import BasicProductCard from "@/components/product/BasicProductCard/BasicProductCard";
import "./PromoCard.scss";

function PromoCard({ title, text, buttonTitle, onClick, image, data }) {
  return (
    <div className="promo-card-wrapper">
      <div
        className="promo-card-content"
        style={{
          backgroundImage: `linear-gradient(rgb(193 193 193 / 13%), rgb(0 0 0 / 33%)), url(${image})`,
        }}
      >
        <h2>{title}</h2>
        <p>{text}</p>
        <button onClick={onClick}>{buttonTitle}</button>

        <div className="promo-products-wrapper">
          {data.map((item, index) => {
            return <BasicProductCard key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PromoCard;
