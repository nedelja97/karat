import "./Newsletter.scss";
import Watch from "../../../public/images/WATCHES_VA_1.png";
import Send from "../../../public/images/icons/send.svg";
import Image from "next/image";

function Newsletter() {
  return (
    <div className="newsletter-wrapper">
      <div className="newsletter-content">
        <Image src={Watch} alt="watch" className="left-image" />
        <h2>Budite u toku sa najnovijim informacijama...</h2>
        <div className="input-newletter">
          <input placeholder="Unesite svoj email" />
          <Image src={Send} alt="Send" width={20} height={20} />
        </div>
        <p>Uživajte u kupovini najnovijih proizvoda uz aktuelne popuste.</p>
        <Image src={Watch} alt="watch" className="right-image" />
      </div>
    </div>
  );
}

export default Newsletter;
