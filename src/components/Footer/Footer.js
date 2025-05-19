import Image from "next/image";
import "./Footer.scss";
import Link from "next/link";
import Logo from "../../../public/images/icons/logo.png";
import American from "../../../public/images/banks/american.png";
import BancaIntesa from "../../../public/images/banks/bancaIntesa.png";
import Dina from "../../../public/images/banks/dina.png";
import MasterCardSC from "../../../public/images/banks/masterCardSC.png";
import Mc_acc_opt_70_1x from "../../../public/images/banks/mc_acc_opt_70_1x.png";
import Ms_acc_opt_70_1x from "../../../public/images/banks/ms_acc_opt_70_1x.png";
import Verifiedbyvisa from "../../../public/images/banks/verifiedbyvisa.png";
import Visa_pos_fc from "../../../public/images/banks/visa_pos_fc.png";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-content container">
        <div className="footer-top-area">
          <Link href="">
            {" "}
            <Image
              src={Logo}
              alt="logo"
              width={80}
              height={50}
              style={{ objectFit: "contain" }}
            />
          </Link>
          <div class="social-links">
            <Link href="#">Facebook</Link>
            <span class="dot"></span>
            <Link href="#">Instagram</Link>
          </div>
        </div>

        <div className="footer-copyright">
          <div class="social-links">
            <Link href="#">Pravila o zaštiti potrošača</Link>
            <span class="dot"></span>
            <Link href="#">Reklamacije</Link>
            <span class="dot"></span>
            <Link href="#">Pravo na odustajanje</Link>
            <span class="dot"></span>
            <Link href="#">Zamena artikala</Link>
            <span class="dot"></span>
            <Link href="#">Kako kupiti</Link>
          </div>

          <p className="copyright-text">
            © 2025 Zlatara Karat | Sva prava zadržana. Powered by{" "}
            <Link href="/">Croonus Technologies</Link>
          </p>
        </div>

        <div className="footer-bottom-area">
          <p>
            Cene na sajtu su iskazane u dinarima sa uračunatim porezom, a
            plaćanje se vrši isključivo u dinarima. Isporuka se vrši SAMO na
            teritoriji Republike Srbije. Nastojimo da budemo što precizniji u
            opisu proizvoda, prikazu slika i samih cena, ali ne možemo
            garantovati da su sve informacije kompletne i bez grešaka. Svi
            artikli prikazani na sajtu su deo naše ponude i ne podrazumeva da su
            dostupni u svakom trenutku. Raspoloživost robe možete proveriti
            pozivanjem Call Centra na +381 (0) 62 489 294 (po ceni lokalnog
            poziva)
          </p>
          <div className="footer-bank-images">
            <Image src={American} alt="American" width={30} height={20} />
            <Image
              src={BancaIntesa}
              alt="BancaIntesa"
              width={100}
              height={20}
            />
            <Image
              src={MasterCardSC}
              alt="MasterCardSC"
              width={80}
              height={20}
            />
            <Image
              src={Mc_acc_opt_70_1x}
              alt="Mc_acc_opt_70_1x"
              width={30}
              height={20}
            />
            <Image
              src={Ms_acc_opt_70_1x}
              alt="Ms_acc_opt_70_1x"
              width={30}
              height={20}
            />
            <Image
              src={Verifiedbyvisa}
              alt="Verifiedbyvisa"
              width={30}
              height={20}
            />
            <Image src={Visa_pos_fc} alt="Visa_pos_fc" width={30} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
