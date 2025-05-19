import Image from "next/image";
import "./InfoCard.scss";

function InfoCard({ src, alt, title }) {
  return (
    <div className="info-card-wrapper">
      <Image src={src} alt={alt} width={1000} height={1000} />
      <h3>{title}</h3>
    </div>
  );
}

export default InfoCard;
