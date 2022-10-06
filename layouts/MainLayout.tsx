import React from "react";
// import Image from "react-bootstrap/Image";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Head from "next/head";
import WooCommerceLogoImg from "../public/images/woo_commerce_logo.jpg";
import NavbarMenuIconSvg from "../public/svgs/navbar_menu_icon.svg";
import SafeIconSvg from "../public/svgs/safe_icon.svg";
import SupportIconSvg from "../public/svgs/support_icon.svg";
import CheckIconSvg from "../public/svgs/check_icon.svg";

const NavbarSectionTitle = ({
  children,
  href,
}: {
  children: any;
  href: string;
}) => (
  <Col md={1} className="navbar-section-title-container">
    <a href={href} className="navbar-section-title text-decoration-none">
      {children}
    </a>
  </Col>
);

const FooterIconTextItem = ({
  text,
  src,
  alt,
}: {
  text: string;
  src: string;
  alt: string;
}) => {
  return (
    <div className="footer-text-icon-container">
      <Image
        src={src}
        alt={alt}
        width="26px"
        height="25px"
        className="footer-text-icon-image"
      />
      <div className="footer-text-icon-title">{text}</div>
    </div>
  );
};

const FooterIconsTextsContainer = () => {
  return (
    <Row className="footer-text-icons-container">
      {[
        {
          text: "30 day money back guarantee",
          src: CheckIconSvg,
          alt: "check-icon",
        },
        {
          text: "Support teams across the world",
          src: SupportIconSvg,
          alt: "check-icon",
        },
        {
          text: "Safe & Secure online payment",
          src: SafeIconSvg,
          alt: "safe-icon",
        },
      ].map(({ text, src, alt }, key) => (
        <Col md={3} xs={12} key={key}>
          <FooterIconTextItem text={text} src={src} alt={alt} />
        </Col>
      ))}
    </Row>
  );
};

const FooterColumnTitle = ({ children }: { children: any }) => (
  <div className="footer-column-title">{children}</div>
);
const FooterColumnLink = ({
  children,
  href,
}: {
  children: any;
  href: string;
}) => (
  <Row>
    <Col>
      <a href={href} className="footer-column-link text-decoration-none">
        {children}
      </a>
    </Col>
  </Row>
);

const FooterDivider = () => <div className="footer-divider" />;

const FooterSectionsLinks = () => (
  <Container>
    <Row className="footer-sections-links">
      <Col md={{ offset: 2, span: 1 }} className="footer-column-container">
        <FooterColumnTitle>Who we Are</FooterColumnTitle>
        <FooterColumnLink href="/about">About</FooterColumnLink>
        <FooterColumnLink href="/team">Team</FooterColumnLink>
        <FooterColumnLink href="/work-with-us">Work With Us</FooterColumnLink>
      </Col>
      <Col md={{ offset: 1, span: 1 }} className="footer-column-container">
        <FooterColumnTitle>Woocommerce</FooterColumnTitle>
        <FooterColumnLink href="/features">Features</FooterColumnLink>
        <FooterColumnLink href="/payments">Payments</FooterColumnLink>
        <FooterColumnLink href="/marketing">Marketing</FooterColumnLink>
        <FooterColumnLink href="/shipping">Shipping</FooterColumnLink>
        <FooterColumnLink href="/extension-store">
          Extension Store
        </FooterColumnLink>
        <FooterColumnLink href="/extensionecomerce-blog">
          eCommerce blog
        </FooterColumnLink>
        <FooterColumnLink href="/development-blog">
          Development blog
        </FooterColumnLink>
        <FooterColumnLink href="/ideas-board">Ideas board</FooterColumnLink>
        <FooterColumnLink href="/mobile-app">Mobile App</FooterColumnLink>
        <FooterColumnLink href="/community">Community</FooterColumnLink>
        <FooterColumnLink href="/style-guide">Style Guide</FooterColumnLink>
        <FooterColumnLink href="/email-newsletter">
          Email Newsletter
        </FooterColumnLink>
      </Col>
      <Col md={{ offset: 1, span: 1 }} className="footer-column-container">
        <FooterColumnTitle>Other products</FooterColumnTitle>
        <FooterColumnLink href="/storefront">Storefront</FooterColumnLink>
        <FooterColumnLink href="/wooslider">WooSlider</FooterColumnLink>
        <FooterColumnLink href="/sensei">Sensei</FooterColumnLink>
        <FooterColumnLink href="/extensions">Extensions</FooterColumnLink>
      </Col>
      <Col md={{ offset: 1, span: 1 }} className="footer-column-container">
        <FooterColumnTitle>Support</FooterColumnTitle>
        <FooterColumnLink href="/documentation">Documentation</FooterColumnLink>
        <FooterColumnLink href="/customizations">
          Customizations
        </FooterColumnLink>
        <FooterColumnLink href="/support-policy">
          Support Policy
        </FooterColumnLink>
        <FooterColumnLink href="/contact">Contact</FooterColumnLink>
        <FooterColumnLink href="/covid-resources">
          COVID-19 Resources
        </FooterColumnLink>
        <FooterColumnLink href="/privacy-for-california-users">
          Privacy Notice for California Users
        </FooterColumnLink>
      </Col>
    </Row>
  </Container>
);

const MainLayout = ({ children }: { children: any }) => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const menuOptions = [
    { label: "Sell", href: "/sell" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Community", href: "/community" },
    { label: "Develop", href: "/develop" },
    { label: "Resources", href: "/resources" },
  ];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navbar navbar-light bg-light navbar-custom">
        <Container className="navbar-container">
          <Row className="w-100">
            <Col xs={6} md={2}>
              <a
                className="navbar-brand woo-commerce-navbar-brand-img"
                href="#"
              >
                <Image
                  src={WooCommerceLogoImg}
                  layout="responsive"
                  objectFit="cover"
                  alt="woo-commerce logo"
                />
              </a>
            </Col>
            <Col
              xs={6}
              className="d-sm-none text-align-right navbar-menu-btn-container"
            >
              <Button
                onClick={() => setMenuIsOpen(!menuIsOpen)}
                aria-controls="example-collapse-text"
                aria-expanded={menuIsOpen}
                className="navbar-menu-btn"
                variant="light"
              >
                <Image
                  src={NavbarMenuIconSvg}
                  alt="menu-icon"
                  width="24px"
                  height="24px"
                />
              </Button>
            </Col>
            <Collapse in={menuIsOpen} className="navbar-collapsable">
              <div>
                {menuOptions.map(({ href, label }) => (
                  <NavbarSectionTitle href={href} key={href}>
                    {label}
                  </NavbarSectionTitle>
                ))}
              </div>
            </Collapse>
            <Col xs={6} md={10} className="d-none d-md-block">
              <Row>
                {menuOptions.map(({ href, label }) => (
                  <NavbarSectionTitle href={href} key={href}>
                    {label}
                  </NavbarSectionTitle>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </nav>
      <main>
        <Container className="main-layout-content">{children}</Container>
      </main>
      <footer className="footer">
        <FooterIconsTextsContainer />
        <FooterDivider />
        <FooterSectionsLinks />
      </footer>
    </>
  );
};
export default MainLayout;
