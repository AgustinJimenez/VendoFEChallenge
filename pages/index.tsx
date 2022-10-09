import type { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "next/image";

const MainTitle = () => (
  <div className="main-title">
    Building exactly the eCommerce website you want.
  </div>
);

const MainSubtitle = () => (
  <div className="main-subtitles-container">
    <div className="main-subtitle">
      WooCommerce is a customizable, open-source eCommerce platform built on
      WordPress.
    </div>
    <div className="main-subtitle">Get started quickly and make your way.</div>
  </div>
);

const StartANewStoreBtn = ({ children }: { children: any }) => (
  <Button className="start-a-new-store-btn">{children}</Button>
);

const LinkCta = () => (
  <>
    or{" "}
    <a href="/customize" className="text-decoration-none">
      Customize & Extend ›
    </a>
  </>
);

const CtaOptions = () => (
  <Row>
    <Col xl={4} md={6}>
      <StartANewStoreBtn>Start a New Store</StartANewStoreBtn>
    </Col>
    <Col xl={8} md={6} className="cta-txt">
      <LinkCta />
    </Col>
  </Row>
);

const FeaturedImg = () => (
  <Image
    className="featured-img"
    src="/images/featured-image.png"
    width="508px"
    height="422"
    alt="woo-commerce logo"
  />
);

const MiddleTitleTxt = ({ children }: { children: string }) => (
  <div className="middle-title-text">{children}</div>
);

const MiddleTitle = () => (
  <div className="middle-title-container">
    <MiddleTitleTxt>Your eCommerce</MiddleTitleTxt>
    <MiddleTitleTxt>made simple</MiddleTitleTxt>
  </div>
);

const Card = ({
  title,
  subtitle,
  link_text,
  href,
  image_url,
  className,
}: {
  title: string;
  subtitle: string;
  link_text: string;
  href: string;
  image_url: string;
  className: string;
}) => (
  <div className={className}>
    <Image
      className="card-img"
      layout="responsive"
      width="100%"
      height="100%"
      src={image_url}
      alt="card image"
    />
    <div className="card-content">
      <div className="card-title">{title}</div>
      <div className="card-subtitle">{subtitle}</div>
      <a
        href={href}
        className="card-link text-decoration-none"
      >{`${link_text} >`}</a>
    </div>
  </div>
);

const HomePage: NextPage = () => (
  <MainLayout>
    <Container>
      <Row>
        <Col xs={{ span: 12, order: 2 }} md={{ order: 1, span: 6 }}>
          <MainTitle />
          <MainSubtitle />
          <CtaOptions />
        </Col>
        <Col xs={{ span: 12, order: 1 }} md={{ order: 2, span: 6 }}>
          <FeaturedImg />
        </Col>
      </Row>
      <Row>
        <Col>
          <MiddleTitle />
        </Col>
      </Row>
      <Row className="cards-container">
        <Col xs={12} md={4}>
          <Card
            image_url="/images/all_you_need_to_start_image.png"
            title="All You Need to Start"
            subtitle="Add WooCommerce plugin to any WordPress site and set up a new store in minutes."
            href="/ecomerce"
            link_text="Ecommerce for Wordpress"
            className=""
          />
        </Col>
        <Col xs={12} md={4}>
          <Card
            image_url="/images/customize_and_extend_image.png"
            title="Customize and Extend"
            subtitle="From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable."
            href="/extensions"
            link_text="Browse Extensions"
            className="card-mt-2x"
          />
        </Col>
        <Col xs={12} md={4}>
          <Card
            image_url="/images/active_community_image.png"
            title="Active Community"
            subtitle="WooCommerce is one of the fastest-growing eCommerce communities."
            href="/forums"
            link_text="Check our Forums"
            className="card-mt-3x"
          />
        </Col>
      </Row>
    </Container>
  </MainLayout>
);

export default HomePage;
