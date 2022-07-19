import Link from "next/link";
import Linkedin from "../svg/Linkedin";
import Github from "../svg/Github";
import Gmail from "../svg/Gmail";

export default function Contact() {
    return (
        <section id="contact">
            <div className="panel">
                <div className="title">
                    <h2>Contact Me</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut distinctio dolores hic magni,
                    praesentium quae quod sapiente! Nesciunt, voluptate?</p>
                <Link href="mailto: reysergio383@gmai.com">
                    <a className="btn">Contact Me</a>
                </Link>
            </div>
            <style jsx>{`
              section {
                margin-top: 40px;
                padding: 120px 200px 0;
              }

              .panel {
                display: flex;
                flex-direction: column;
                border-radius: 16px;
                border: solid 1px var(--color-box);
                gap: 50px;
                width: 560px;
                padding: 50px;
                margin: 0 auto 50px;
              }

              .title {
                margin: 0 auto;
                width: 200px;
                background: linear-gradient(to bottom,
                var(--four),
                var(--five));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              h2 {
                color: var(--five);
                font-size: var(--text-third);
                text-align: center;
                margin: 0;
              }


              p {
                text-align: justify;
                margin: 0 auto;
                font-size: var(--text-content-2);
                line-height: 1.7;
                color: var(--text-color-lower);
              }

              .btn {
                text-align: center;
                width: 180px;
                font-size: 14px;
                padding: 15px;
                margin: 0 auto;
                font-weight: 700;
                box-shadow: inset 0 0 0 1px var(--text-color-lower);
                color: var(--text-color-lower);
                transition: color 0.25s 0.0833333333s;
                position: relative;
              }

              .btn::before, .btn::after {
                border: 0 solid transparent;
                box-sizing: border-box;
                content: "";
                pointer-events: none;
                position: absolute;
                width: 0;
                height: 0;
                bottom: 0;
                right: 0;
              }

              .btn::before {
                border-bottom-width: 1px;
                border-left-width: 1px;
              }

              .btn::after {
                border-top-width: 1px;
                border-right-width: 1px;
              }

              .btn:hover {
                color: var(--five);
              }

              .btn:hover::before, .btn:hover::after {
                border-color: var(--five);
                transition: border-color 0s, width 0.25s, height 0.25s;
                width: 100%;
                height: 100%;
              }

              .btn:hover::before {
                transition-delay: 0s, 0s, 0.25s;
              }

              .btn:hover::after {
                transition-delay: 0s, 0.25s, 0s;
              }

              .btn {
                background: none;
                border: none;
                cursor: pointer;
              }

            `}</style>
        </section>
    );
}

