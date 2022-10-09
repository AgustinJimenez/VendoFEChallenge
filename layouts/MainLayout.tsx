/* eslint-disable @next/next/no-img-element */
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
import Link from "next/link";

type NavbarMenuOptionsType = { label: string; href: string };

const NAVBAR_MENU_OPTIONS: NavbarMenuOptionsType[] = [
  { label: "Sell", href: "/sell" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Community", href: "/community" },
  { label: "Develop", href: "/develop" },
  { label: "Resources", href: "/resources" },
];

const FOOTER_TEXT_ICONS_ITEMS = [
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
];

const NavbarSectionTitle = ({
  children,
  href,
}: {
  children: any;
  href: string;
}) => (
  <Col className="navbar-section-title-container text-center">
    <a href={href} className="navbar-section-title text-decoration-none">
      {children}
    </a>
  </Col>
);

const NavBarBrandImage = () => (
  <Link href="/">
    <img
      src={WooCommerceLogoImg.src}
      alt="woo-commerce logo"
      className="woo-commerce-navbar-brand-img"
    />
  </Link>
);

const NavbarDesktopSectionsTitles = ({
  menu_options,
}: {
  menu_options: NavbarMenuOptionsType[];
}) => (
  <Row>
    {menu_options.map(({ href, label }) => (
      <NavbarSectionTitle href={href} key={href}>
        {label}
      </NavbarSectionTitle>
    ))}
  </Row>
);

const NavbarMobileCollapsableTitles = ({
  menuIsOpen,
  sections,
}: {
  sections: NavbarMenuOptionsType[];
  menuIsOpen: boolean;
}) => (
  <Collapse
    in={menuIsOpen}
    className="navbar-collapsable w-100 px-3 pb-3 d-md-none"
  >
    <div>
      {sections.map(({ href, label }: NavbarMenuOptionsType) => (
        <NavbarSectionTitle href={href} key={href}>
          {label}
        </NavbarSectionTitle>
      ))}
    </div>
  </Collapse>
);

const FooterIconTextItem = ({
  text,
  src,
  alt,
}: {
  text: string;
  src: string;
  alt: string;
}) => (
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

const FooterIconsTextsContainer = () => (
  <Row className="footer-text-icons-container">
    {FOOTER_TEXT_ICONS_ITEMS.map(({ text, src, alt }, key) => (
      <Col md={3} xs={12} key={key}>
        <FooterIconTextItem text={text} src={src} alt={alt} />
      </Col>
    ))}
  </Row>
);

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
    <Row>
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
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row className="m-0">
        <nav className="navbar-custom">
          <Container>
            <Row>
              <Col xs={6} md={2}>
                <NavBarBrandImage />
              </Col>
              <Col xs={6} md={10} xl={5} className="d-none d-md-block">
                <NavbarDesktopSectionsTitles
                  menu_options={NAVBAR_MENU_OPTIONS}
                />
              </Col>
              <Col xs={6} className="d-md-none text-align-right">
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
            </Row>
            <Row>
              <NavbarMobileCollapsableTitles
                menuIsOpen={menuIsOpen}
                sections={NAVBAR_MENU_OPTIONS}
              />
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
      </Row>
    </>
  );
};
export default MainLayout;
