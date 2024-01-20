import React, { useEffect, useState } from "react";
import HomeBanner from '../../../public/images/NewUI/homeBanner.png';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Form,
  Dropdown,
  NavLink,
} from "react-bootstrap";
import Logo from "../../../public/images/NewUI/logo.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Sidebar from "../../Sidebar/Sidebar";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    handleMouseLeave();
  }, [router.pathname]);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const handleDropdownNavigation = (e, name) => {
    e.stopPropagation();
    router.push(`/services/${name}`);
  };

  const navbarRef = useRef();
  const { pathname: path } = useRouter();

  useEffect(() => {
    if (
      path === "/" ||
      path === "/about-us" ||
      path === "/services/logo-design" ||
      path === "/services/branding" ||
      path === "/services/website-ui-ux-design" ||
      path === "/services/video-animation" ||
      path === "/services/mobile-app-design" ||
      path === "/services/website-development" ||
      path === "/services/website-redesign-development" ||
      path === "/services/web-app-development" ||
      path === "/services/web-hosting" ||
      path === "/services/ecommerce-solution" ||
      path === "/services/mobile-application-development" ||
      path === "/services/search-engine-optimization" ||
      path === "/services/social-media-marketing-services" ||
      path === "/services/paid-campaigns" ||
      path === "/services/email-marketing" ||
      path === "/services/ecommerce-marketing" ||
      path === "/services/t-shirt-design" ||
      path === "/services/invitation-design" ||
      path === "/services/flyer-design" ||
      path === "/services/brochure-design" ||
      path === "/services/catalogue-design" ||
      path === "/services/menu-design" ||
      path === "/services/poster-design" ||
      path === "/portfolios" ||
      path === "/blog" ||
      path === "/contact-us" ||
      path === "/get-a-quote"
    )
      navbarRef.current.style.width = "0%";
  }, [path]);

  const NavHandler = () => {
    if (navbarRef.current.style.width === "100%")
      navbarRef.current.style.width = "0%";
    else navbarRef.current.style.width = "100%";
  };

  return (
    <>
      <Sidebar navbarRef={navbarRef} NavHandler={NavHandler} />

      <div className="header_main">
        <Image className="home-bg" src={HomeBanner} alt="HomeBanner"/>
        <div className="header-content">
          <div><Image src={Logo} alt="logo.png" /></div>
          <nav>
            <Link className="active" href={'/'}>Home</Link>
            <Link href={'/'}>About Us</Link>
            <Link href={'/'}>Services</Link>
            <Link href={'/'}>Our Portfolios</Link>
            <Link href={'/'}>Blog</Link>
            <Link href={'/'}>Contact us</Link>

          </nav>
          <button>
            Get a Quote
          </button>
        </div>



      </div>
    </>
  );
};

export default Header;
