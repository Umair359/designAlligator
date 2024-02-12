import React, { useEffect, useState } from "react";
import HomeBanner from '../../../public/images/homeBanner.png';
import {
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";
import Logo from "../../../public/images/NewUI/logo.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";

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
        <Image className="home-bg" src={HomeBanner} alt="HomeBanner" />
        <div className="header-content">
          <div className="logo-img-container"><Image src={Logo} alt="logo.png" /></div>
          <nav>
            <Link className="active" href={'/'}>Home</Link>
            <Link href={'/about-us'}>About Us</Link>
            <NavDropdown
              title="SERVICES"
              id="basic-nav-dropdown"
              className={
                router.pathname === "/services"
                  ? "nav-active nav_explore"
                  : "nav_explore"
              }
              show={isOpen}
              // onMouseEnter={handleMouseEnter} // add the onMouseEnter event here
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <Row
                className="drop_down_row"
              // onMouseLeave={handleMouseLeave}
              >
                <Col md={3}>
                  <div>
                    <h5>Design</h5>
                    <div className="links_container">
                      <Link
                        href={"/services/logo-design"}
                        className={
                          router.pathname === "/services/logo-design"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(e, "logo-design");
                        }}
                      >
                        Logo Design
                      </Link>
                      <Link
                        href={"/services/branding"}
                        className={
                          router.pathname === "/services/branding"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(e, "branding");
                        }}
                      >
                        Brand & Visual Design{" "}
                      </Link>
                      <Link
                        href={"/services/website-ui-ux-design"}
                        className={
                          router.pathname ===
                            "/services/website-ui-ux-design"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(
                            e,
                            "website-ui-ux-design"
                          );
                        }}
                      >
                        UI/UX Design
                      </Link>
                      <Link
                        href={"/services/video-animation"}
                        className={
                          router.pathname === "/services/video-animation"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(e, "video-animation");
                        }}
                      >
                        Video Animation
                      </Link>
                      <Link
                        href={"/services/mobile-app-design"}
                        className={
                          router.pathname ===
                            "/services/mobile-app-design"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(
                            e,
                            "mobile-app-design"
                          );
                        }}
                      >
                        Mobile App Design
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div>
                    <h5>Development</h5>
                    <div className="links_container">
                      <Link
                        href={"/services/website-development"}
                        className={
                          router.pathname ===
                            "/services/website-development"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(
                            e,
                            "website-development"
                          );
                        }}
                      >
                        Website Development
                      </Link>
                      <Link
                        href={"/services/website-redesign-development"}
                        className={
                          router.pathname ===
                            "/services/website-redesign-development"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(
                            e,
                            "website-redesign-development"
                          );
                        }}
                      >
                        Website Redesign Service{" "}
                      </Link>
                      <Link
                        href={"/services/web-app-development"}
                        className={
                          router.pathname ===
                            "/services/web-app-development"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(
                            e,
                            "web-app-development"
                          );
                        }}
                      >
                        Web App Development
                      </Link>
                      <Link
                        href={"/services/web-hosting"}
                        className={
                          router.pathname === "/services/web-hosting"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(e, "web-hosting");
                        }}
                      >
                        Web Hosting
                      </Link>
                      <Link
                        href={"/services/ecommerce-solution"}
                        className={
                          router.pathname ===
                            "/services/ecommerce-solution"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(
                            e,
                            "ecommerce-solution"
                          );
                        }}
                      >
                        Ecommerce Solutions
                      </Link>
                      <Link
                        href={"/services/mobile-application-development"}
                        className={
                          router.pathname ===
                            "/services/mobile-application-development"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(
                            e,
                            "mobile-application-development"
                          );
                        }}
                      >
                        Mobile App Development
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div>
                    <h5>Digital Marketing</h5>
                    <div className="links_container">
                      <Link
                        href={"/services/search-engine-optimization"}
                        className={
                          router.pathname ===
                            "/services/search-engine-optimization"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(
                            e,
                            "search-engine-optimization"
                          );
                        }}
                      >
                        Search Engine Optimization
                      </Link>
                      <Link
                        href={"/services/social-media-marketing-services"}
                        className={
                          router.pathname ===
                            "/services/social-media-marketing-services"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(
                            e,
                            "social-media-marketing-services"
                          );
                        }}
                      >
                        Social Media Marketing
                      </Link>
                      <Link
                        href={"/services/paid-campaigns"}
                        className={
                          router.pathname === "/services/paid-campaigns"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(e, "paid-campaigns");
                        }}
                      >
                        Paid Campaigns(PPC)
                      </Link>
                      <Link
                        href={"/services/email-marketing"}
                        className={
                          router.pathname === "/services/email-marketing"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(e, "email-marketing");
                        }}
                      >
                        Email Marketing Services
                      </Link>
                      <Link
                        href={"/services/ecommerce-marketing"}
                        className={
                          router.pathname ===
                            "/services/ecommerce-marketing"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(
                            e,
                            "ecommerce-marketing"
                          );
                        }}
                      >
                        Ecommerce Marketing
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div>
                    <h5>Print</h5>
                    <div className="links_container">
                      <Link
                        href={"/services/t-shirt-design"}
                        className={
                          router.pathname === "/services/t-shirt-design"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(e, "t-shirt-design");
                        }}
                      >
                        T-Shirt Design
                      </Link>
                      <Link
                        href={"/services/invitation-design"}
                        className={
                          router.pathname ===
                            "/services/invitation-design"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(
                            e,
                            "invitation-design"
                          );
                        }}
                      >
                        Invitation Card Design
                      </Link>
                      <Link
                        href={"/services/flyer-design"}
                        className={
                          router.pathname === "/services/flyer-design"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(e, "flyer-design");
                        }}
                      >
                        Flyer Design
                      </Link>
                      <Link
                        href={"/services/brochure-design"}
                        className={
                          router.pathname === "/services/brochure-design"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(e, "brochure-design");
                        }}
                      >
                        Brochure Design
                      </Link>
                      <Link
                        href={"/services/catalogue-design"}
                        className={
                          router.pathname === "/services/catalogue-design"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(e, "catalogue-design");
                        }}
                      >
                        Catalogue Design
                      </Link>
                      <Link
                        href={"/services/menu-design"}
                        className={
                          router.pathname === "/services/menu-design"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(e, "menu-design");
                        }}
                      >
                        Menu Design
                      </Link>
                      <Link
                        href={"/services/poster-design"}
                        className={
                          router.pathname === "/services/poster-design"
                            ? "nav-active"
                            : ""
                        }
                        onClick={(e) => {
                          handleDropdownNavigation(e, "poster-design");
                        }}
                      >
                        Poster Design
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </NavDropdown>
            <Link href={'/portfolios'}>Our Portfolios</Link>
            <Link href={'https://blog.designalligators.com'}>Blog</Link>
            <Link href={'/contact-us'}>Contact us</Link>
          </nav>
          <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="monbile-nav" >
            <GiHamburgerMenu fill="white" />
            <nav className={isMenuOpen ? "nav-open" : ""} >
              <Link className="active" href={'/'}>Home</Link>
              <Link href={'/about-us'}>About Us</Link>
              {/* <Link href={'/'}>Services</Link> */}
              <NavDropdown
                title="Services"
                id="basic-nav-dropdown"
                className={
                  router.pathname === "/services"
                    ? "nav-active nav_explore"
                    : "nav_explore"
                }
                show={isOpen}
                // onMouseEnter={handleMouseEnter} // add the onMouseEnter event here
                onClick={() => setIsOpen((prev) => !prev)}
              >

                {isOpen && <Row
                  className="drop_down_row"
                // onMouseLeave={handleMouseLeave}
                >
                  <Col md={3}>
                    <div>
                      <h5>Design</h5>
                      <div className="links_container">
                        <Link
                          href={"/services/logo-design"}
                          className={
                            router.pathname === "/services/logo-design"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(e, "logo-design");
                          }}
                        >
                          Logo Design
                        </Link>
                        <Link
                          href={"/services/branding"}
                          className={
                            router.pathname === "/services/branding"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(e, "branding");
                          }}
                        >
                          Brand & Visual Design{" "}
                        </Link>
                        <Link
                          href={"/services/website-ui-ux-design"}
                          className={
                            router.pathname ===
                              "/services/website-ui-ux-design"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(
                              e,
                              "website-ui-ux-design"
                            );
                          }}
                        >
                          UI/UX Design
                        </Link>
                        <Link
                          href={"/services/video-animation"}
                          className={
                            router.pathname === "/services/video-animation"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(e, "video-animation");
                          }}
                        >
                          Video Animation
                        </Link>
                        <Link
                          href={"/services/mobile-app-design"}
                          className={
                            router.pathname ===
                              "/services/mobile-app-design"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(
                              e,
                              "mobile-app-design"
                            );
                          }}
                        >
                          Mobile App Design
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div>
                      <h5>Development</h5>
                      <div className="links_container">
                        <Link
                          href={"/services/website-development"}
                          className={
                            router.pathname ===
                              "/services/website-development"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(
                              e,
                              "website-development"
                            );
                          }}
                        >
                          Website Development
                        </Link>
                        <Link
                          href={"/services/website-redesign-development"}
                          className={
                            router.pathname ===
                              "/services/website-redesign-development"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(
                              e,
                              "website-redesign-development"
                            );
                          }}
                        >
                          Website Redesign Service{" "}
                        </Link>
                        <Link
                          href={"/services/web-app-development"}
                          className={
                            router.pathname ===
                              "/services/web-app-development"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(
                              e,
                              "web-app-development"
                            );
                          }}
                        >
                          Web App Development
                        </Link>
                        <Link
                          href={"/services/web-hosting"}
                          className={
                            router.pathname === "/services/web-hosting"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(e, "web-hosting");
                          }}
                        >
                          Web Hosting
                        </Link>
                        <Link
                          href={"/services/ecommerce-solution"}
                          className={
                            router.pathname ===
                              "/services/ecommerce-solution"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(
                              e,
                              "ecommerce-solution"
                            );
                          }}
                        >
                          Ecommerce Solutions
                        </Link>
                        <Link
                          href={"/services/mobile-application-development"}
                          className={
                            router.pathname ===
                              "/services/mobile-application-development"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(
                              e,
                              "mobile-application-development"
                            );
                          }}
                        >
                          Mobile App Development
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div>
                      <h5>Digital Marketing</h5>
                      <div className="links_container">
                        <Link
                          href={"/services/search-engine-optimization"}
                          className={
                            router.pathname ===
                              "/services/search-engine-optimization"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(
                              e,
                              "search-engine-optimization"
                            );
                          }}
                        >
                          Search Engine Optimization
                        </Link>
                        <Link
                          href={"/services/social-media-marketing-services"}
                          className={
                            router.pathname ===
                              "/services/social-media-marketing-services"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(
                              e,
                              "social-media-marketing-services"
                            );
                          }}
                        >
                          Social Media Marketing
                        </Link>
                        <Link
                          href={"/services/paid-campaigns"}
                          className={
                            router.pathname === "/services/paid-campaigns"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(e, "paid-campaigns");
                          }}
                        >
                          Paid Campaigns(PPC)
                        </Link>
                        <Link
                          href={"/services/email-marketing"}
                          className={
                            router.pathname === "/services/email-marketing"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(e, "email-marketing");
                          }}
                        >
                          Email Marketing Services
                        </Link>
                        <Link
                          href={"/services/ecommerce-marketing"}
                          className={
                            router.pathname ===
                              "/services/ecommerce-marketing"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(
                              e,
                              "ecommerce-marketing"
                            );
                          }}
                        >
                          Ecommerce Marketing
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div>
                      <h5>Print</h5>
                      <div className="links_container">
                        <Link
                          href={"/services/t-shirt-design"}
                          className={
                            router.pathname === "/services/t-shirt-design"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(e, "t-shirt-design");
                          }}
                        >
                          T-Shirt Design
                        </Link>
                        <Link
                          href={"/services/invitation-design"}
                          className={
                            router.pathname ===
                              "/services/invitation-design"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(
                              e,
                              "invitation-design"
                            );
                          }}
                        >
                          Invitation Card Design
                        </Link>
                        <Link
                          href={"/services/flyer-design"}
                          className={
                            router.pathname === "/services/flyer-design"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(e, "flyer-design");
                          }}
                        >
                          Flyer Design
                        </Link>
                        <Link
                          href={"/services/brochure-design"}
                          className={
                            router.pathname === "/services/brochure-design"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(e, "brochure-design");
                          }}
                        >
                          Brochure Design
                        </Link>
                        <Link
                          href={"/services/catalogue-design"}
                          className={
                            router.pathname === "/services/catalogue-design"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(e, "catalogue-design");
                          }}
                        >
                          Catalogue Design
                        </Link>
                        <Link
                          href={"/services/menu-design"}
                          className={
                            router.pathname === "/services/menu-design"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(e, "menu-design");
                          }}
                        >
                          Menu Design
                        </Link>
                        <Link
                          href={"/services/poster-design"}
                          className={
                            router.pathname === "/services/poster-design"
                              ? "nav-active"
                              : ""
                          }
                          onClick={(e) => {
                            handleDropdownNavigation(e, "poster-design");
                          }}
                        >
                          Poster Design
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>}
              </NavDropdown>
              <Link href={'/portfolios'}>Our Portfolios</Link>
              <Link href={'/blog'}>Blog</Link>
              <Link href={'/contact-us'}>Contact us</Link>
            </nav>
          </div>

          <button>
            Get a Quote
          </button>
        </div>



      </div>
    </>
  );
};

export default Header;
