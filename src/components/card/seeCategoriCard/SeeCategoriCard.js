import Link from "next/link";
import "./SeeCategoriCard.scss";
import Image from "next/image";

function SeeCategoriCard({ item }) {
  return (
    <div className="see-categori-card">
      <Image src={item?.image} alt={item?.image} />
      <div>
        <h3>{item?.title}</h3>
        <Link href="/">Pogledajte ›</Link>
      </div>
    </div>
  );
}

export default SeeCategoriCard;
