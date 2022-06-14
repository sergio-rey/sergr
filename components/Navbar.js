import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/favicon.ico";
import Link from "next/link";

export default function Navbar() {
  const [menu, setMenu] = useState("");

  function handleMenu() {
    if (menu === "") {
      setMenu("open");
    }
    if (menu === "open") {
      setMenu("");
    }
  }

  return (
    <header className={menu}>
      <nav>
        <Link href="/#name">
          <a>
            <Image src={Logo} alt="Logo of Sergio Rey" width={42} height={42} />
          </a>
        </Link>
        <div className="menu" onClick={handleMenu}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <ul className="ul_navbar">
          <li>
            <Link href="/#about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/#experience">
              <a>Experience</a>
            </Link>
          </li>
          <li>
            <Link href="/#projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <a>Contact</a>
            </Link>
          </li>
          <a
            className="a_navbar"
            href="/files/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="resume">Resume</li>
          </a>
        </ul>
      </nav>
      <div className="panel"></div>
      <style jsx>{`
        header {
          position: fixed;
          width: calc(100% - 100px);
          margin: 0 50px;
          height: 100px;
          padding: 29px 0;
          z-index: 5;
          background: var(--transparent);
        }
        nav {
          position: relative;
          margin: 0;
          height: 42px;
          display: flex;
          justify-content: space-between;
        }
        .menu {
          display: none;
          height: 42px;
          width: 42px;
          cursor: pointer;
        }
        .menu div {
          border-radius: 5px;
          height: 2px;
          background: var(--primary);
        }
        .one {
          margin: 9px 0 0 4px;
          width: 38px;
        }
        .two {
          margin: 8px 0 0 10px;
          width: 32px;
        }
        .three {
          margin: 8px 0 0 16px;
          width: 26px;
        }
        ul {
          display: flex;
          padding: 0;
          margin: 0;
        }
        li {
          list-style: none;
          margin: auto 0 auto 30px;
          padding: 0;
          color: var(--white);
          font-size: 14px;
        }
        .resume {
          margin: 0 0 0 30px;
          padding: 10.5px 15px;
          border: var(--white) 0.25px solid;
          border-radius: 5px;
        }
        .resume:hover {
          background: var(--primary-lower);
          color: var(--white);
        }
        li:hover {
          color: var(--primary);
        }
        .panel {
          display: none;
        }
        @media only screen and (max-width: 1080px) {
          header {
            width: calc(100% - 80px);
            margin: 0 40px;
          }
        }
        @media only screen and (max-width: 770px) {
          header {
            width: calc(100% - 50px);
            margin: 0 25px;
          }
          ul {
            top: 0;
            right: -100%;
            position: fixed;
            padding-top: 100px;
            height: 100vh;
            width: 385px;
            background: var(--background-hight);
            display: block;
            text-align: center;
            z-index: 4;
            transition: all 0.5s;
          }
          li,
          a li {
            font-size: 16px;
            margin: 60px 80px;
          }
          .resume {
            margin: 0 auto;
            padding: 10.5px 15px;
            width: 200px;
          }
          .menu {
            z-index: 5;
            position: fixed;
            right: 25px;
            display: block;
          }
          .open ul {
            right: 0;
          }
          .panel {
            background: var(--transparent);
            height: 100vh;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
          }
          .open .panel {
            display: block;
          }
        }
        @media only screen and (max-width: 385px) {
          ul {
            width: 100%;
          }
          li,
          a li {
            margin: 60px 60px;
          }
        }
        @media only screen and (max-width: 320px) {
          ul {
            width: 100%;
          }
          li,
          a li {
            margin: 60px 30px;
          }
        }
      `}</style>
    </header>
  );
}
