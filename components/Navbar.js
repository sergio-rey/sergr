import React, {useState} from "react";
import Image from "next/image";
import Logo from "./svg/Logo";
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

    function handleCloseMenu() {
        if (menu === "open") {
            setMenu("");
        }
    }

    return (
        <header className={menu}>
            <nav>
                <Link href="/#name">
                    <a>
                        <Logo />
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
                            <a onClick={handleCloseMenu}>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#experience">
                            <a onClick={handleCloseMenu}>Experience</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#projects">
                            <a onClick={handleCloseMenu}>Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#contact">
                            <a onClick={handleCloseMenu}>Contact</a>
                        </Link>
                    </li>
                    <li className="resume">
                        <a
                            className="a_navbar"
                            href="/files/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="panel"></div>
            <style jsx>{`
              header {
                position: fixed;
                width: 100%;
                margin: 0;
                height: 80px;
                padding: 23.2px 50px;
                z-index: 5;
                background: var(--transparent);
                border-bottom: solid 0.01px var(--color-box);
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
                color: var(--text-color);
                font-size: 14px;
              }

              .resume {
                margin: 0 0 0 30px;
                padding: 10.5px 15px;
                border: var(--text-color) 0.25px solid;
                border-radius: 5px;
              }

              .resume:hover {
                background: var(--primary-lower);
                color: var(--text-color);
              }

              li:hover {
                color: var(--primary);
              }

              .panel {
                display: none;
              }

              @media only screen and (max-width: 1080px) {
                header {
                  padding: 23.2px 40px;
                }
              }

              @media only screen and (max-width: 770px) {
                header {
                  padding: 23.2px 25px;
                }

                ul {
                  top: 0;
                  right: -100%;
                  position: fixed;
                  padding: 20vh 0;
                  height: 100vh;
                  width: 385px;
                  background: var(--background-hight);
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  text-align: center;
                  z-index: 4;
                  transition: all 0.5s;
                }

                li,
                a li {
                  margin-left: 0;
                  font-size: 16px;
                }

                .resume {
                  margin: 10.5px 0 0;
                  padding: 10.5px 15px;
                  width: 225px;
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
