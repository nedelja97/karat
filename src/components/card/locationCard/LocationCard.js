import Image from "next/image";
import "./LocationCard.scss";
import Link from "next/link";

function LocationCard({ item }) {
  return (
    <div className="location-card-wrapper">
      <Image src={item?.image} alt={item?.image} className="local" />
      <div className="location-content">
        <h4>{item?.title}</h4>
        <div className="location-contact-info">
          <Link href={`tel: ${item?.phone}`}>{item?.phone}</Link>
          <Link href={`mailto: ${item?.email}`}>{item?.email}</Link>
          <Link
            href={`https://www.google.com/maps?q=${item?.address}`}
            target="_blank"
          >
            {item?.address}
          </Link>
        </div>

        <div className="location-working-hours">
          <p>{item?.hous}</p>
          <p>{item?.saturday}</p>
          <p>{item?.sunday}</p>
        </div>

        <button
          onClick={() =>
            window.open(
              `https://www.google.com/maps?q=${item?.address}`,
              "_blank"
            )
          }
        >
          Putanja
        </button>
      </div>
    </div>
  );
}

export default LocationCard;
