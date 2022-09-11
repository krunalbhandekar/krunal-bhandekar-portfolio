import React from "react";
import { FaLinkedin, FaInstagram, FaGithub,FaPhone } from "react-icons/fa";
import styled from "styled-components";

const Social = styled.div`
  display: block;
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2rem;
    color: rgb(119, 119, 121);
    transition: 0.2s ease-in;
    &:hover {
      color: rgb(57, 134, 250);
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
function FixSocialIcon() {
  return (
    <Social>
      <ul>
        <li className="item">
          <a
            href="https://www.linkedin.com/in/krunal-bhandekar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="item">
          <a
            href="https://github.com/krunalbhandekar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="item">
          <a
            href="https://www.instagram.com/krunal_bhandekar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li className="item">
          <a
            href="tel:+91 9158291878"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhone />
          </a>
        </li>
      </ul>
    </Social>
  );
}

export default FixSocialIcon;
