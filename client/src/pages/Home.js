import React from "react";
import Navbar from "./Navbar";

import "./homepage.css";
import {
  Modal,
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { ChakraProvider, input } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Contact from "../components/Contact";

const Home = () => {
  const { isAuth } = useSelector((state) => state.user);
  return (
    <>
      <Navbar />
      <div className="main">
        <div>
          <div
            class="banner-text"
            style={{
              backgroundColor: "black",
              opacity: "0.4",
              padding: "20px",
              border: "1px solid",
              borderRadius: "20px",
            }}
          >
            <h1>
              Make bright projects <span> happen</span>
            </h1>
            <br />

            <p>
              Find expert and talented freelancers on our secure and flexible
              platform.
            </p>
            <br />

            <ChakraProvider>
              <Contact />
            </ChakraProvider>
          </div>
        </div>
      </div>

      <footer className="endOfPage">
        <div class="footer-bottom">
          <ul class="socials">
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>

          <p>copyright &copy;2022 freelance</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
