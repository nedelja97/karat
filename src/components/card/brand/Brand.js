import Image from "next/image";
import "./Brand.scss";

function Brand({ item }) {
  return (
    <div className="brand-wrapper">
      <Image src={item?.image} alt={item?.image} width={100} height={80} />
    </div>
  );
}

export default Brand;
