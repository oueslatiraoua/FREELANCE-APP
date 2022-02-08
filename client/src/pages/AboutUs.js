import React from "react";

import "./AboutUs.css";

import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <div>
      <div className="navbarAboutUs">
        <div className="logo">
          <Link to="/OurServices"> click here to see our services {""}! </Link>
        </div>
      </div>

      <section class="home" id="home">
        <div class="home-content">
          <div class="text">
            <div
              style={{
                color: "DimGrey",
                fontSize: "35px",
                fontWeight: "600",
                marginLeft: "-3px",
                width: "500px",
                paddingTop: "400px",
                fontFamily: "Helvet",
              }}
            >
              We provide opportunities for freelancers to work remotely and to
              market their services to companies.
            </div>
          </div>
        </div>
      </section>

      <section class="services" id="services">
        <div class="content">
          <div class="title">
            <span>Our Services</span>
          </div>
          <div class="boxes">
            <div class="box">
              <i class="fas fa-desktop" style={{ fontSize: "25px" }}></i>

              <div class="topic">Web Development</div>
              <p>
                There are a lot of potential tasks for which you might need to
                enlist web development services.You might use web development
                services to develop an online tool, to create a unique widget
                with a specific functionality for your website, to fix a bug, or
                to automate a task that you spend a lot of time doing manually.
              </p>
            </div>
            <div class="box">
              <i class="fas fa-paint-brush" style={{ fontSize: "25px" }}></i>

              <div class="topic">Graphic Design</div>
              <p>
                Are you looking for a graphic designer? We provide a full range
                of graphic design services, from logo design and branding to web
                design and development.
              </p>
            </div>
            <div class="box">
              <i class="fas fa-chart-line" style={{ fontSize: "25px" }}></i>

              <div class="topic">Digital Marketing</div>
              <p>
                We will take your product to the next level: We will make the
                best branding strategy to improve your digital strategy, create
                your graphic pieces for social media and create reports to
                guarantee your company’s success.
              </p>
            </div>
            <div class="box">
              <i class="fas fa-running" style={{ fontSize: "30px" }}></i>

              <div class="topic">Lifestyle</div>
              <p>
                we empower people to make positive decisions about their health
                and wellbeing, supporting them to set goals, equipping them with
                tools and techniques that they can use each day to develop new
                and sustainable change. We offer a variety of in-house services
                including massage, fitness classes and nutrition counseling to
                achieve health goals.
              </p>
            </div>
            <div class="box">
              <i class="fas fa-building" style={{ fontSize: "25px" }}></i>

              <div class="topic">Building Engineering</div>
              <p>
                We provide a range of services for buildings from structural
                design to strengthening and rehabilitation. Our structural
                engineers evaluate many buildings around the world every year .
                Our services relies on technical experiences and the latest
                building science and engineering standards.
              </p>
            </div>
            <div class="box">
              <i class="fas fa-book" style={{ fontSize: "25px" }}></i>

              <div class="topic">Translation</div>
              <p>
                You need translation services? We’re here to help. We are always
                available and ready to adapt to every translation need. Have
                your legal documents, film scripts, and business contracts ready
                to take over international markets with our translation
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <div class="content">
          <div class="title">
            <span>Contact us</span>
          </div>
          <div class="text">
            <div class="topic">Have Any Project?</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              neque ipsum corrupti dolores, facere numquam voluptate aspernatur
              sit perferendis qui nisi modi! Recusandae deserunt consequatur
              voluptatibus alias repellendus nobis eligendi.
            </p>
            <div class="button">
              <button>Let's Chat</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
