import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import ImageSlider from "@/components/General/ImageSlider";
import { useRouter } from "next/router";

import capeTown2011_1 from "@/source/global/Cape_town_2011/1.jpeg";
import capeTown2011_2 from "@/source/global/Cape_town_2011/2.jpeg";
import capeTown2011_3 from "@/source/global/Cape_town_2011/3.jpeg";
import capeTown2011_4 from "@/source/global/Cape_town_2011/4.jpeg";
import capeTown2011_5 from "@/source/global/Cape_town_2011/5.jpeg";
import capeTown2011_6 from "@/source/global/Cape_town_2011/6.jpeg";
import capeTown2011_7 from "@/source/global/Cape_town_2011/7.jpeg";
import capeTown2011_8 from "@/source/global/Cape_town_2011/8.jpeg";
import capeTown2011_9 from "@/source/global/Cape_town_2011/9.jpeg";

import capeTown2014_1 from "@/source/global/cape_town_2014/1.jpeg";
import capeTown2014_2 from "@/source/global/cape_town_2014/2.jpeg";
import capeTown2014_3 from "@/source/global/cape_town_2014/3.jpeg";
import capeTown2014_4 from "@/source/global/cape_town_2014/4.jpeg";
import capeTown2014_5 from "@/source/global/cape_town_2014/5.jpeg";
import capeTown2014_6 from "@/source/global/cape_town_2014/6.jpeg";
import capeTown2014_7 from "@/source/global/cape_town_2014/7.jpeg";
import capeTown2014_8 from "@/source/global/cape_town_2014/8.jpeg";
import capeTown2014_9 from "@/source/global/cape_town_2014/9.jpeg";
import capeTown2014_10 from "@/source/global/cape_town_2014/10.jpeg";
import capeTown2014_11 from "@/source/global/cape_town_2014/11.jpeg";
import capeTown2014_12 from "@/source/global/cape_town_2014/12.jpeg";
import capeTown2014_13 from "@/source/global/cape_town_2014/13.jpeg";
import capeTown2014_14 from "@/source/global/cape_town_2014/14.jpeg";
import capeTown2014_15 from "@/source/global/cape_town_2014/15.jpeg";
import capeTown2014_16 from "@/source/global/cape_town_2014/16.jpeg";
import capeTown2014_17 from "@/source/global/cape_town_2014/17.jpeg";

import namibia1 from "@/source/global/Namibia/1.jpeg";
import namibia2 from "@/source/global/Namibia/2.jpeg";
import namibia3 from "@/source/global/Namibia/3.jpeg";
import namibia4 from "@/source/global/Namibia/4.jpeg";
import namibia5 from "@/source/global/Namibia/5.jpeg";
import namibia6 from "@/source/global/Namibia/6.jpeg";
import namibia7 from "@/source/global/Namibia/7.jpeg";

import singapore1 from "@/source/global/singapore_trip_2014/1.jpeg";
import singapore2 from "@/source/global/singapore_trip_2014/2.jpeg";
import singapore3 from "@/source/global/singapore_trip_2014/3.jpeg";
import singapore4 from "@/source/global/singapore_trip_2014/4.jpeg";
import singapore5 from "@/source/global/singapore_trip_2014/5.jpeg";
import singapore6 from "@/source/global/singapore_trip_2014/6.jpeg";
import singapore7 from "@/source/global/singapore_trip_2014/7.jpeg";
import singapore8 from "@/source/global/singapore_trip_2014/8.jpeg";

import usatrip1 from "@/source/global/usatrip2024/1.jpeg";
import usatrip2 from "@/source/global/usatrip2024/2.jpeg";
import usatrip3 from "@/source/global/usatrip2024/3.jpeg";
import usatrip4 from "@/source/global/usatrip2024/4.jpeg";
import usatrip5 from "@/source/global/usatrip2024/5.jpeg";

import aea1 from "@/source/global/aeawomen/1.jpeg";
import aea2 from "@/source/global/aeawomen/2.jpeg";
import aea3 from "@/source/global/aeawomen/3.jpeg";
import aea4 from "@/source/global/aeawomen/4.jpeg";
import aea5 from "@/source/global/aeawomen/5.jpeg";
import aea6 from "@/source/global/aeawomen/6.jpeg";
import aea7 from "@/source/global/aeawomen/7.jpeg";
import aea8 from "@/source/global/aeawomen/8.jpeg";

import womentogether1 from "@/source/global/womentogetherasia/1.jpeg";
import womentogether2 from "@/source/global/womentogetherasia/2.jpeg";
import womentogether3 from "@/source/global/womentogetherasia/3.jpeg";
import womentogether4 from "@/source/global/womentogetherasia/4.jpeg";
import womentogether5 from "@/source/global/womentogetherasia/5.jpeg";
import womentogether6 from "@/source/global/womentogetherasia/6.jpeg";
import womentogether7 from "@/source/global/womentogetherasia/7.jpeg";
import womentogether8 from "@/source/global/womentogetherasia/8.jpeg";


export default function GlobalPage() {
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
          Courage is what led us to our name and it&apos;s what will lead you to
          winning ideas that fuel your creative juices, inspire your team, and
          move your audiences. Consider us your partner in crime on the journey
          to find your fascinating.
        </div>
        <br />
        <button className="lazy-appear6" onClick={navigateToReadMore}>
          Read More.. <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Section 2 */}
      <Container fluid className="local-wrapper2">
        <div className="section2-heading lazy-appear3">
          <h2>Spanish Church Visit - USA 2024</h2>
        </div>

        <Row className="lazy-appear5">
          <Col md={6} className="local-col1 lazy-appear1">
            <ImageSlider time={3500} transitionDuration={"1s"}>
              <img src={usatrip1.src} alt="" />
              <img src={usatrip2.src} alt="" />
              <img src={usatrip3.src} alt="" />
              <img src={usatrip4.src} alt="" />
              <img src={usatrip5.src} alt="" />
            
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-center">
              <i>Spanish Church Visit - USA 2024 Sources</i>
            </p>
          </Col>
          <Col md={6} className="baptism-text-container lazy-appear2 local-col">
            <p className="baptism-txt">
              During the 2024 USA trip, I was given the opportunity to visit and preach at a 
              Spanish-speaking church. This ministry moment came during a deeply difficult time,
              as my cousin had recently passed away. In the midst of personal loss, the message
              focused on how, even in life’s storms, we are sustained when we remain rooted in Christ.
            </p>
            <br />

            <p className="baptism-txt">
              During this trip, God provided opportunities to minister in Colorado, where the focus 
              was on highlighting the importance of women within the Presbyterian Church and their
              vital role in the life of the Church.
            </p>
            {/* <button
              className="baptism-btn lazy-appear6"
              onClick={navigateToReadMore}
            >
              Read More.. <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button> */}
          </Col>
        </Row>
      </Container>

      {/* Section 3 MARWARI TRIBE */}
      <Container fluid className="local-wrapper3">
        <div className="section2-heading lazy-appear3 text-white">
          <h2>Asian Evangelical Alliance Women’s Conference</h2>
        </div>

        <Row className="lazy-appear5">
          <Col
            md={6}
            className="baptism-text-container lazy-appear2 text-white local-col"
          >
            <p className="baptism-txt">
              This conference, organized by the Asian Evangelical Alliance, was the first in-person
              gathering held after COVID. Centered on the theme “Arise and Shine,” the conference
              focused on storytelling as a powerful tool for faith and witness.
            </p>
            <br />

            <p className="baptism-txt">
              The keynote speaker, Asha Williamson, a British speaker, beautifully encouraged women
              to recognize the story God has placed in their lives and to use their personal journeys
              to bring honor and glory to His name.
            </p>
            {/* <button className=" lazy-appear6" onClick={navigateToReadMore}>
              Read More.. <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button> */}
          </Col>
          <Col md={6} className="local-col1 lazy-appear1">
            <ImageSlider time={3500} transitionDuration={"1s"}>
              <img src={aea1.src} alt="" />
              <img src={aea2.src} alt="" />
              <img src={aea3.src} alt="" />
              <img src={aea4.src} alt="" />
              <img src={aea5.src} alt="" />
              <img src={aea6.src} alt="" />
              <img src={aea7.src} alt="" />
              <img src={aea8.src} alt="" />
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-white text-center">
              <i>Asian Evangelical Alliance Women’s Conference Sources*</i>
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="local-wrapper2">
        <div className="section2-heading lazy-appear3">
          <h2>CAPE TOWN 2011</h2>
        </div>

        <Row className="lazy-appear5">
          <Col md={6} className="local-col1 lazy-appear1">
            <ImageSlider time={3500} transitionDuration={"1s"}>
              <img src={capeTown2011_1.src} alt="" />
              <img src={capeTown2011_2.src} alt="" />
              <img src={capeTown2011_3.src} alt="" />
              <img src={capeTown2011_4.src} alt="" />
              <img src={capeTown2011_5.src} alt="" />
              <img src={capeTown2011_6.src} alt="" />
              <img src={capeTown2011_7.src} alt="" />
              <img src={capeTown2011_8.src} alt="" />
              <img src={capeTown2011_9.src} alt="" />
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-center">
              <i>CapeTown 2011 Sources</i>
            </p>
          </Col>
          <Col md={6} className="baptism-text-container lazy-appear2 local-col">
            <p className="baptism-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec nisi ut libero fermentum fermentum. Integer convallis ex quis
              sodales ultricies. Ut euismod, ante a suscipit lacinia, arcu odio
              imperdiet libero, non auctor odio elit nec justo. Vestibulum
              feugiat, turpis at feugiat varius, ligula dolor tincidunt metus,
              ut sollicitudin elit odio at quam. Fusce volutpat, justo id auctor
              laoreet, libero sapien vehicula nisl, et molestie sapien erat
              vitae sapien. Phasellus nec ligula odio. Vivamus in sapien vitae
              tellus venenatis posuere. Integer quis varius nunc, in dignissim
              nisi.
            </p>
            <br />

            <p className="baptism-txt">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Ut vitae lacinia mauris, non
              hendrerit ipsum. Integer vitae velit a sem condimentum vestibulum.
              Nulla facilisi. Fusce interdum vitae eros nec dignissim. Sed eu
              lacus urna. Vestibulum congue, mi a ultrices malesuada, arcu ipsum
              varius felis, sit amet fermentum quam massa id lorem. In hac
              habitasse platea dictumst. Quisque auctor turpis nec justo congue,
              sit amet eleifend lacus efficitur.
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
          <h2>SINGAPORE TRIP 2014</h2>
        </div>

        <Row className="lazy-appear5">
          <Col
            md={6}
            className="baptism-text-container lazy-appear2 text-white local-col"
          >
            <p className="baptism-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec nisi ut libero fermentum fermentum. Integer convallis ex quis
              sodales ultricies. Ut euismod, ante a suscipit lacinia, arcu odio
              imperdiet libero, non auctor odio elit nec justo. Vestibulum
              feugiat, turpis at feugiat varius, ligula dolor tincidunt metus,
              ut sollicitudin elit odio at quam. Fusce volutpat, justo id auctor
              laoreet, libero sapien vehicula nisl, et molestie sapien erat
              vitae sapien. Phasellus nec ligula odio. Vivamus in sapien vitae
              tellus venenatis posuere. Integer quis varius nunc, in dignissim
              nisi.
            </p>
            <br />

            <p className="baptism-txt">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Ut vitae lacinia mauris, non
              hendrerit ipsum. Integer vitae velit a sem condimentum vestibulum.
              Nulla facilisi. Fusce interdum vitae eros nec dignissim. Sed eu
              lacus urna. Vestibulum congue, mi a ultrices malesuada, arcu ipsum
              varius felis, sit amet fermentum quam massa id lorem. In hac
              habitasse platea dictumst. Quisque auctor turpis nec justo congue,
              sit amet eleifend lacus efficitur.
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
              <img src={singapore1.src} alt="" />
              <img src={singapore2.src} alt="" />
              <img src={singapore3.src} alt="" />
              <img src={singapore4.src} alt="" />
              <img src={singapore5.src} alt="" />
              <img src={singapore6.src} alt="" />
              <img src={singapore7.src} alt="" />
              <img src={singapore8.src} alt="" />
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-white text-center">
              <i>Singapore Trip 2014 Sources*</i>
            </p>
          </Col>
        </Row>
      </Container>

      {/* Section 4 KELASH TRIBE
       */}
      <Container fluid className="local-wrapper2">
        <div className="section2-heading lazy-appear3">
          <h2> CAPE TOWN 2014</h2>
        </div>

        <Row className="lazy-appear5">
          <Col md={6} className="local-col1 lazy-appear1">
            <ImageSlider time={3500} transitionDuration={"1s"}>
              <img src={capeTown2014_1.src} alt="" />
              <img src={capeTown2014_2.src} alt="" />
              <img src={capeTown2014_3.src} alt="" />
              <img src={capeTown2014_4.src} alt="" />
              <img src={capeTown2014_5.src} alt="" />
              <img src={capeTown2014_6.src} alt="" />
              <img src={capeTown2014_7.src} alt="" />
              <img src={capeTown2014_8.src} alt="" />
              <img src={capeTown2014_9.src} alt="" />
              <img src={capeTown2014_10.src} alt="" />
              <img src={capeTown2014_11.src} alt="" />
              <img src={capeTown2014_12.src} alt="" />
              <img src={capeTown2014_13.src} alt="" />
              <img src={capeTown2014_14.src} alt="" />
              <img src={capeTown2014_15.src} alt="" />
              <img src={capeTown2014_16.src} alt="" />
              <img src={capeTown2014_17.src} alt="" />
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-center">
              <i>CapeTown 2014 Sources</i>
            </p>
          </Col>
          <Col md={6} className="baptism-text-container lazy-appear2 local-col">
            <p className="baptism-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec nisi ut libero fermentum fermentum. Integer convallis ex quis
              sodales ultricies. Ut euismod, ante a suscipit lacinia, arcu odio
              imperdiet libero, non auctor odio elit nec justo. Vestibulum
              feugiat, turpis at feugiat varius, ligula dolor tincidunt metus,
              ut sollicitudin elit odio at quam. Fusce volutpat, justo id auctor
              laoreet, libero sapien vehicula nisl, et molestie sapien erat
              vitae sapien. Phasellus nec ligula odio. Vivamus in sapien vitae
              tellus venenatis posuere. Integer quis varius nunc, in dignissim
              nisi.
            </p>
            <br />

            <p className="baptism-txt">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Ut vitae lacinia mauris, non
              hendrerit ipsum. Integer vitae velit a sem condimentum vestibulum.
              Nulla facilisi. Fusce interdum vitae eros nec dignissim. Sed eu
              lacus urna. Vestibulum congue, mi a ultrices malesuada, arcu ipsum
              varius felis, sit amet fermentum quam massa id lorem. In hac
              habitasse platea dictumst. Quisque auctor turpis nec justo congue,
              sit amet eleifend lacus efficitur.
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

       <Container fluid className="local-wrapper3">
        <div className="section2-heading lazy-appear3 text-white">
          <h2>NAMBIBIA TOUR</h2>
        </div>

        <Row className="lazy-appear5">
          <Col
            md={6}
            className="baptism-text-container lazy-appear2 text-white local-col"
          >
            <p className="baptism-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisi ut libero 
              fermentum fermentum. Integer convallis ex quis sodales ultricies. Ut euismod, ante a 
              suscipit lacinia, arcu odio imperdiet libero, non auctor odio elit nec justo. Vestibulum
              feugiat, turpis at feugiat varius, ligula dolor tincidunt metus, ut sollicitudin elit
              odio at quam. Fusce volutpat, justo id auctor laoreet, libero sapien vehicula nisl, et
              molestie sapien erat vitae sapien. Phasellus nec ligula odio. Vivamus in sapien vitae
              tellus venenatis posuere. Integer quis varius nunc, in dignissim nisi.
            </p>
            <br />

            <p className="baptism-txt">
             Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
             egestas. Ut vitae lacinia mauris, non hendrerit ipsum. Integer vitae velit a sem 
             condimentum vestibulum. Nulla facilisi. Fusce interdum vitae eros nec dignissim. Sed eu
             lacus urna. Vestibulum congue, mi a ultrices malesuada, arcu ipsum varius felis, sit 
             amet fermentum quam massa id lorem. In hac habitasse platea dictumst. Quisque auctor 
             turpis nec justo congue, sit amet eleifend lacus efficitur.
            </p>
            {/* <button className=" lazy-appear6" onClick={navigateToReadMore}>
              Read More.. <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button> */}
          </Col>
          <Col md={6} className="local-col1 lazy-appear1">
            <ImageSlider time={3500} transitionDuration={"1s"}>
              <img src={namibia1.src} alt="" />
              <img src={namibia2.src} alt="" />
              <img src={namibia3.src} alt="" />
              <img src={namibia4.src} alt="" />
              <img src={namibia5.src} alt="" />
              <img src={namibia6.src} alt="" />
              <img src={namibia7.src} alt="" />
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-white text-center">
              <i>Namibia Tour Sources*</i>
            </p>
          </Col>
        </Row>
      </Container>

      {/* Section 5 BRICK KILNS
       */}
      <Container fluid className="local-wrapper2">
        <div className="section2-heading lazy-appear3">
          <h2>Women Together Asia Conference</h2>
        </div>

        <Row className="lazy-appear5">
          <Col md={6} className="local-col1 lazy-appear1">
            <ImageSlider time={3500} transitionDuration={"1s"}>
              <img src={womentogether1.src} alt="" />
              <img src={womentogether2.src} alt="" />
              <img src={womentogether3.src} alt="" />
              <img src={womentogether4.src} alt="" />
              <img src={womentogether5.src} alt="" />
              <img src={womentogether6.src} alt="" />
              <img src={womentogether7.src} alt="" />
              <img src={womentogether8.src} alt="" />
              
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-center">
              <i>Women Together Asia Conference Sources</i>
            </p>
          </Col>
          <Col md={6} className="baptism-text-container lazy-appear2 local-col">
            <p className="baptism-txt">
              This conference marked our first gathering in collaboration with Women Together Asia, 
              working alongside Dr. Susan Chan. The event brought together 50 women leaders from 12
              different countries, united around the theme “Influential Leadership Impacting 
              Generations.”
            </p>
            <br />

            <p className="baptism-txt">
             Participants ranged from as young as 15–16 years old to over 75 years of age, reflecting 
             a powerful intergenerational presence. The Bible study focused on Mary, highlighting her 
             desire to sit at the feet of Christ and presenting her life as a lasting example of 
             leadership and devotion for women today.
            </p>
            {/* <button
              className="baptism-btn lazy-appear6"
              onClick={navigateToReadMore}
            >
              Read More.. <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button> */}
          </Col>
        </Row>
      </Container>

      
    </Container>
  );
}
