import Link from "next/link";
import "./Header.scss";
import { useIsMobile } from "../useIsMobile";
import Image from "next/image";
import Logo from "../../../public/images/icons/logo.png";
import Avatar from "../../../public/images/icons/avatar.svg";
import Hearth from "../../../public/images/icons/hearth.svg";
import Bag from "../../../public/images/icons/bag.svg";
import Hamburger from "../../../public/images/icons/hamburger.svg";
import Close from "../../../public/images/icons/close.svg";
import Diamond from "../../../public/images/global/conte-diamonds.png";
import Search from "../../../public/images/icons/search.svg";
import { useState } from "react";
import Input from "../input/Input";

function Header() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  return (
    <div className="header-wrapper">
      <div className="top-bar-wrapper">
        <div className="top-bar container">
          <div className="top-bar-links">
            <Link href="/">O nama</Link>
            <Link href="/">Kontakt</Link>
            <Link href="/">Lokacija</Link>
          </div>

          <p>
            Doživite nova iskustva uz najbolje proizvode i online usluge.
            Siguarn i pouzdana kupovina
          </p>

          <div className="top-bar-contant">
            <Link href="tel: +381 31 524 772">+381 31 524 772</Link>
            <Link href="mailto: office@zlatara-karat.com">
              office@zlatara-karat.com
            </Link>
          </div>
        </div>
      </div>

      {isMobile ? (
        <div className="mobile-navigation">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              width={80}
              height={50}
              className="mobile-logo"
            />
          </Link>

          <div className="mobile-functions">
            <Image src={Avatar} alt="Avatar" width={25} height={25} />
            <Image src={Hearth} alt="Hearth" width={20} height={20} />
            <Image src={Bag} alt="Bag" width={25} height={25} />
            <Image
              src={Hamburger}
              alt="Hamburger"
              width={25}
              height={25}
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      ) : (
        <div className="desktop-navigation">
          <div className="desktop-navigation-content container">
            <Image
              src={Logo}
              alt="logo"
              width={100}
              height={50}
              className="desktop-logo"
            />

            <div className="desktop-menu-list">
              <Link href="/">Početna</Link>
              <Link href="/">Brendovi</Link>
              <Link href="/">Satovi</Link>
              <Link href="/">Karat zlatni nakit</Link>
              <Link href="/" className="red">
                Sniženje
              </Link>
              <Link href="/">
                <Image
                  src={Diamond}
                  alt="diamond"
                  width={60}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </Link>
            </div>

            <div className="input-wrapper">
              <Image src={Search} alt="Search" width={20} height={20} />
              <input placeholder="Pretražite proivode" />
            </div>

            <div className="dekstop-navigatio-functions">
              <Image src={Avatar} alt="avatar" width={20} height={20} />
              <Image src={Hearth} alt="Hearth" width={20} height={20} />
              <Image src={Bag} alt="Bag" width={20} height={20} />
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="overlay" onClick={() => setOpen(false)}>
          <div className="sidebar">
            <Image className="close-icon" src={Close} alt="close" />
            <h3>Menu</h3>
            <div className="menu-mobile">
              <div className="menu-mobile-top-list">
                <Link href="/">O nama</Link>
                <Link href="/">Kontakt</Link>
                <Link href="/">Lokacija</Link>
              </div>
              <Link href="/">Početna</Link>
              <Link href="/">Brendovi</Link>
              <Link href="/">Satovi</Link>
              <Link href="/">Karat zlatni nakit</Link>
              <Link href="/" className="red">
                Sniženje
              </Link>
              <Link href="/">
                <Image src={Diamond} alt="diamond" width={90} height={60} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
