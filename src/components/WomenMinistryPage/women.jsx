import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import ImageSlider from "@/components/General/ImageSlider";
import { useRouter } from "next/router";
import Image from "next/image";



export default function WomenMinistryPage() {
  const router = useRouter();

  const navigateToReadMore = () => {
    router.push("#baptism-container");
  };

  return (
    <Container fluid className="local-main-wrapper">
      <div className="local-wrapper1 women-ministry-hero">
        <h3 className="lazy-appear3 local-heading">
          <span className="lazy-appear1">Empowering </span>
          <span className="lazy-appear2">Women </span>
          <span className="lazy-appear3"> With</span>
          <br />
          <i className="lazy-appear4">Faith</i>
          <i className="lazy-appear4"> & Purpose</i>
        </h3>

        <div className="local-main-txt lazy-appear5">
          Courage is what birthed this ministry, and it&apos;s what continues to raise women who lead with conviction, 
          love with strength, and serve with vision. From rural communities to city churches, we walk with women as they 
          discover their God-given calling and rise to impact their families, churches, and the world.
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
      <Container id='baptism-container' fluid className="local-wrapper2">
        <div className="section2-heading lazy-appear3">
          <h2>1st annual Women&apos;s Camp 2011</h2>
        </div>

        <Row className="lazy-appear5">
          <Col md={6} className="local-col1 lazy-appear1">
            <ImageSlider time={2000} transitionDuration={"1s"}>
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08841.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08842.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08843.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08844.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08845.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08846.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08847.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08848.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08849.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08850.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08873.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08879.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08884.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08901.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08905.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08907.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08920.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08939.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08940.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08941.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08980.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08981.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08982.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08983.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC09026.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08851.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08859.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08860.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/1st Annual Women_s Camp 2011/DSC08861.jpg" alt="" />
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-center">
              <i>1st annual Women&apos;s Camp 2011</i>
            </p>
          </Col>
          <Col md={6} className="baptism-text-container lazy-appear2 local-col">
            <p className="baptism-txt">
              The <strong>1st Annual Women&apos;s Camp</strong> was held from <strong>25th to 28th March 2011</strong> in the scenic 
              hills of <strong>Camp Mubarak, Murree</strong>, and was organized by <strong>Women for Christ Pakistan</strong>. 
              Centered on the theme “Women&apos;s Role & Social Challenges,” the camp gathered women from diverse backgrounds 
              to reflect on their identity in Christ, confront the social issues they face, and embrace their calling in the Church 
              and community. Rooted in <strong>Galatians 3:28-29</strong>, the event emphasized spiritual equality and unity in Christ. 
              Through teaching sessions, fellowship, and prayer, women were equipped to rise as bold, compassionate, and purpose-driven 
              leaders for their families, churches, and nation.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Section 3 */}
      <Container fluid className="local-wrapper3">
        <div className="section2-heading lazy-appear3 text-white">
          <h2>Bahawalpur Sewing Centers</h2>
        </div>

        <Row className="lazy-appear5">
          <Col
            md={6}
            className="baptism-text-container lazy-appear2 text-white local-col"
          >
            <p className="baptism-txt">
              In the heart of Bahawalpur, our sewing centers are transforming lives one stitch at a time. These centers 
              provide underprivileged women with practical tailoring skills, spiritual encouragement, and a pathway to economic 
              independence. Through a supportive, faith-based environment, women not only learn to sew but also discover their 
              God-given worth and purpose.
            </p>
            <br />

            <p className="baptism-txt">
              Each center is more than just a training space, it&apos;s a place of dignity, discipleship, and hope. Graduates 
              leave empowered to support their families, start small businesses, and become agents of change in their communities. 
              We believe that when a woman is equipped, an entire generation is impacted.
            </p>
          </Col>
          <Col md={6} className="local-col1 lazy-appear1">
            <ImageSlider time={2500} transitionDuration={"1s"}>
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Bahawalpur Sewing Centers/141331.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Bahawalpur Sewing Centers/141332.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Bahawalpur Sewing Centers/141333.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Bahawalpur Sewing Centers/141334.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Bahawalpur Sewing Centers/141335.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Bahawalpur Sewing Centers/141336.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Bahawalpur Sewing Centers/141337.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Bahawalpur Sewing Centers/141338.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Bahawalpur Sewing Centers/151531.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Bahawalpur Sewing Centers/151532.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Bahawalpur Sewing Centers/151533.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Bahawalpur Sewing Centers/151534.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Bahawalpur Sewing Centers/151535.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Bahawalpur Sewing Centers/151536.jpeg" alt="" />
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-white text-center">
              <i>Bahawalpur Sewing Centers</i>
            </p>
          </Col>
        </Row>
      </Container>

      {/* Section 4 */}
      <Container fluid className="local-wrapper2">
        <div className="section2-heading lazy-appear3">
          <h2>Mirpurkhas Sewing Centers</h2>
        </div>

        <Row className="lazy-appear5">
          <Col md={6} className="local-col1 lazy-appear1">
            <ImageSlider time={2500} transitionDuration={"1s"}>
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/3415135315.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/3415135317.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/3415135318.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/3415135319.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/3415135320.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/3415135321.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/3415135322.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/4415135316.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/3415135323.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/3415135324.jpeg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/3415135325.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/3415135326.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/3415135327.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/3415135328.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/3415135329.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/3415135330.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/3415135331.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/3415135332.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Mirpurkhas Sewing Centers/3415135333.jpg" alt="" />
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-center">
              <i>Mirpurkhas Sewing Centers</i>
            </p>
          </Col>
          <Col md={6} className="baptism-text-container lazy-appear2 local-col">
            <p className="baptism-txt">
              In the city of Mirpurkhas, our sewing centers serve as a beacon of hope for women seeking 
              new beginnings. These centers offer more than vocational training—they provide a safe space 
              where women are equipped with tailoring skills, encouraged through the Word of God, and empowered 
              to step into financial stability and purpose.
            </p>
            <br />

            <p className="baptism-txt">
              Many of the women come from marginalized backgrounds, yet through the program they discover confidence, 
              creativity, and community. As they learn to sew, they also experience healing and personal growth. 
              The Mirpurkhas Sewing Centers are raising women who are not only skilled artisans, but also leaders and 
              light-bearers in their homes and neighborhoods.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Section 5 */}
      <Container fluid className="local-wrapper-final">
        <div className="section2-heading lazy-appear3 text-white">
          <h2>Ladies Seminar&apos; Faisalabad</h2>
        </div>

        <Row className="lazy-appear5">
          <Col
            md={6}
            className="baptism-text-container lazy-appear2 text-white local-col"
          >
            <p className="baptism-txt">
              Held in <strong>Faisalabad on 23rd March 2014</strong>, this special <strong>Ladies Seminar</strong> brought 
              together women from various local churches for a day of worship, teaching, and encouragement. The gathering 
              created space for women to be refreshed in God&apos;s presence and reminded of their value, calling, and influence 
              in both the Church and society.
            </p>
            <br />

            <p className="baptism-txt">
              Through messages grounded in Scripture, interactive sessions, and moments of prayer, participants were 
              inspired to grow deeper in their faith and walk boldly in their God-given roles. The seminar helped build 
              unity among women of faith and sowed seeds of leadership, courage, and vision across the region.
            </p>
          </Col>
          <Col md={6} className="local-col1 lazy-appear1">
            <ImageSlider time={2500} transitionDuration={"1s"}>
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Ladies Seminar 23 Mar 14 at FSD/IMAG0504.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Ladies Seminar 23 Mar 14 at FSD/IMAG0505.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Ladies Seminar 23 Mar 14 at FSD/IMAG0506.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Ladies Seminar 23 Mar 14 at FSD/IMAG0507.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Ladies Seminar 23 Mar 14 at FSD/IMAG0508.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Ladies Seminar 23 Mar 14 at FSD/IMAG0510.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Ladies Seminar 23 Mar 14 at FSD/IMAG0511.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Ladies Seminar 23 Mar 14 at FSD/IMAG0512.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Ladies Seminar 23 Mar 14 at FSD/IMAG0513.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Ladies Seminar 23 Mar 14 at FSD/IMAG0514.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Ladies Seminar 23 Mar 14 at FSD/IMAG0515.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Ladies Seminar 23 Mar 14 at FSD/IMAG0519.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Ladies Seminar 23 Mar 14 at FSD/IMAG0523.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Ladies Seminar 23 Mar 14 at FSD/IMAG0501.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Ladies Seminar 23 Mar 14 at FSD/IMAG0502.jpg" alt="" />
              <Image src="https://roshanrah.blob.core.windows.net/bethel/Women Ministry/Ladies Seminar 23 Mar 14 at FSD/IMAG0503.jpg" alt="" />
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-white text-center">
              <i>Ladies Seminar&apos; Faisalabad</i>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
