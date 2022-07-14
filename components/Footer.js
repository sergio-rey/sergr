import Link from "next/link";
import React from "react";
import Github from "./svg/Github.js";
import Gmail from "./svg/Gmail.js";
import Linkedin from "./svg/Linkedin.js";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="icons">
          <a
            href="https://github.com/sergio-rey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/sergio-rey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://github.com/sergio-rey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Gmail />
          </a>
        </div>
        <p>
          <span>❮ </span>
          <a
            href="https://github.com/sergio-rey/sergr"
            target="_blank"
            rel="noopener noreferrer"
          >
            code
          </a>
          <span> /❯</span> by
          <Link href="/" as={process.env.BACKEND_URL + "/"}>
            <a> Sergio Rey </a>
          </Link>
          2022
        </p>
        <style jsx>{`
          footer {
            margin: 29px auto;
          }
          .icons {
            margin: 0 auto;
            width: 160px;
            display: flex;
            justify-content: space-between;
          }
          img {
            color: blue;
          }
          p {
            color: var(--text-color-lower);
            text-align: center;
            font-size: 14px;
          }
          span {
            color: var(--third);
          }
          a {
            color: var(--text-color);
          }
          a:hover {
            color: var(--third);
          }
        `}</style>
      </footer>
    </>
  );
}
