import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";

import img1 from "@/source/whatwedo_img1.jpeg";
import img2 from "@/source/whatwedo_img2.jpeg";
import img3 from "@/source/whatwedo_img3.jpeg";
import img4 from "@/source/whatwedo_img4.jpeg";
import ImageSlider from "@/components/General/ImageSlider";
import { useRouter } from "next/router";



export default function WomenMinistryPage() {
  const router = useRouter();

  const navigateToReadMore = () => {
    // window.location.href = '/read-more';
    router.push("/read-more");
  };

  return (
    <Container fluid className="local-main-wrapper">
      <div className="local-wrapper1">
        <h3 className="lazy-appear3 local-heading">
          <span className="lazy-appear1">Story </span>
          <span className="lazy-appear2">Telling </span>
          <span className="lazy-appear3"> With</span>
          <br />
          <i className="lazy-appear4">Creative</i>
          <i className="lazy-appear4"> Courage</i>
        </h3>

        <div className="local-main-txt lazy-appear5">
          Courage is what led us to our name and it’s what will lead you to
          winning ideas that fuel your creative juices, inspire your team, and
          move your audiences. Consider us your partner in crime on the journey
          to find your fascinating.
        </div>
        <br />
        <button className="lazy-appear6" onClick={navigateToReadMore}>
          See our Work <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Section 2 */}
      <Container fluid className="local-wrapper2">
        <div className="section2-heading lazy-appear3">
          <h2>Baptism</h2>
        </div>

        <Row className="lazy-appear5">
          <Col md={6} className="local-col1 lazy-appear1">
            <ImageSlider time={3500} transitionDuration={"1s"}>
              <img src={img1.src} alt="" />
              <img src={img2.src} alt="" />
              <img src={img3.src} alt="" />
              <img src={img4.src} alt="" />
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-center">
              <i>Baptism Sources</i>
            </p>
          </Col>
          <Col md={6} className="baptism-text-container lazy-appear2 local-col">
            <p className="baptism-txt">
              This section offers insight into the practice of baptism across
              different denominations, it&apos;s historical origins, and its
              significance in contemporary worship. Learn about the theological
              differences between infant baptism and believers baptism, the
              preparation processes involved for candidates and their families,
              and the various customs and celebrations associated with this
              sacred ceremony.
            </p>
            <br />

            <p className="baptism-txt">
              Baptism is a significant rite of passage in many Christian
              traditions, symbolizing the washing away of sin and the
              individual&apos;s admission into the faith community. It can be
              performed through sprinkling, pouring, or immersion, and is often
              considered a sacrament—a visible sign of an inward grace.
            </p>
            <button
              className="baptism-btn lazy-appear6"
              onClick={navigateToReadMore}
            >
              Read More.. <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </Col>
        </Row>
      </Container>

      {/* Section 3 MARWARI TRIBE */}
      <Container fluid className="local-wrapper3">
        <div className="section2-heading lazy-appear3 text-white">
          <h2>Marwari Tribe</h2>
        </div>

        <Row className="lazy-appear5">
          <Col
            md={6}
            className="baptism-text-container lazy-appear2 text-white local-col"
          >
            <p className="baptism-txt">
              The Marwari tribe is an ethnolinguistic group primarily from the
              Rajasthan region in India, known for their rich cultural heritage,
              business acumen, and traditional values. They are influential in
              trade, commerce, and have a distinct language, attire, and cuisine
              that set them apart.
            </p>
            <br />

            <p className="baptism-txt">
              In this section, visitors can immerse themselves in the Marwari
              way of life, learning about their contributions to Indian culture
              and the global business landscape. Explore their festive
              traditions, family structures, and the intricacies of Marwari
              cuisine. Profiles on prominent Marwari personalities, their
              folklore, and the challenges faced by the Marwari community in
              modern times will also be featured.
            </p>
            <button className=" lazy-appear6" onClick={navigateToReadMore}>
              Read More.. <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </Col>
          <Col md={6} className="local-col1 lazy-appear1">
            <ImageSlider time={3500} transitionDuration={"1s"}>
              <img src={img1.src} alt="" />
              <img src={img2.src} alt="" />
              <img src={img3.src} alt="" />
              <img src={img4.src} alt="" />
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-white text-center">
              <i>Marwari Tribe Sources*</i>
            </p>
          </Col>
        </Row>
      </Container>

      {/* Section 4 KELASH TRIBE
       */}
      <Container fluid className="local-wrapper2">
        <div className="section2-heading lazy-appear3">
          <h2> KELASH TRIBE</h2>
        </div>

        <Row className="lazy-appear5">
          <Col md={6} className="local-col1 lazy-appear1">
            <ImageSlider time={3500} transitionDuration={"1s"}>
              <img src={img1.src} alt="" />
              <img src={img2.src} alt="" />
              <img src={img3.src} alt="" />
              <img src={img4.src} alt="" />
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-center">
              <i>Baptism Sources</i>
            </p>
          </Col>
          <Col md={6} className="baptism-text-container lazy-appear2 local-col">
            <p className="baptism-txt">
              The Kalash or Kalasha, are a unique indigenous people residing in
              the Chitral district of Pakistan. They are known for their
              distinctive cultural rituals, colorful attire, and polytheistic
              religion. This tribe is famed for their vibrant festivals and a
              strong sense of identity that stands out in the predominantly
              Muslim region of Pakistan.
            </p>
            <br />

            <p className="baptism-txt">
              Discover the Kelash tribe’s way of life, their beliefs, and their
              social structures in this section. Understand the significance of
              their festivals like Joshi and Chaumos, their ancient customs, and
              the challenges they face preserving their heritage. We also
              examine the impact of tourism on their society and the steps being
              taken to protect their culture.
            </p>
            <button
              className="baptism-btn lazy-appear6"
              onClick={navigateToReadMore}
            >
              Read More.. <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </Col>
        </Row>
      </Container>

      {/* Section 5 BRICK KILNS
       */}
      <Container fluid className="local-wrapper-final">
        <div className="section2-heading lazy-appear3 text-white">
          <h2>BRICK KILNS</h2>
        </div>

        <Row className="lazy-appear5">
          <Col
            md={6}
            className="baptism-text-container lazy-appear2 text-white local-col"
          >
            <p className="baptism-txt">
              Brick kilns are one of the oldest manufacturing facilities that
              produce bricks, a fundamental building material. They operate
              through firing clay at high temperatures, which historically
              involved manual labor and traditional techniques. Today, they vary
              from small-scale operations to large industrial complexes,
              employing different technologies like Clamp Kilns, Bull’s Trench
              Kilns, Hoffmann Kilns, and Tunnel Kilns.
            </p>
            <br />

            <p className="baptism-txt">
              This section delves into the history of brick-making, the
              evolution of kiln technology, and the environmental and social
              issues surrounding the industry. It will highlight advancements in
              sustainable practices, the life of workers in the kilns, and the
              global distribution and economics of brick production. We also
              address the advocacy for fair labor practices and the future of
              brick manufacturing in an eco-conscious world.
            </p>
            <button className=" lazy-appear6" onClick={navigateToReadMore}>
              Read More.. <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </Col>
          <Col md={6} className="local-col1 lazy-appear1">
            <ImageSlider time={3500} transitionDuration={"1s"}>
              <img src={img1.src} alt="" />
              <img src={img2.src} alt="" />
              <img src={img3.src} alt="" />
              <img src={img4.src} alt="" />
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-white text-center">
              <i>Marwari Tribe Sources*</i>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
