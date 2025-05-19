import "./Newsletter.scss";
import Watch from "../../../public/images/WATCHES_VA_1.png";
import Image from "next/image";
import Input from "../input/Input";

function Newsletter() {
  return (
    <div className="newsletter-wrapper">
      <div className="newsletter-content">
        <Image src={Watch} alt="watch" className="left-image" />
        <h2>Budite u toku sa najnovijim informacijama...</h2>
        <Input />
        <p>Uživajte u kupovini najnovijih proizvoda uz aktuelne popuste.</p>
        <Image src={Watch} alt="watch" className="right-image" />
      </div>
    </div>
  );
}

export default Newsletter;
