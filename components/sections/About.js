import Image from "next/image";
import Link from "next/link";
import profile from "../../public/profile.jpg";
export default function About() {
  return (
    <section id="about">
      <div className="title">
        <h2>About Me</h2>
      </div>
      <h3>Developing from childhood</h3>
      <div className="content">
        <div className="text">
          <p>
            I am a self-taught person and passionate about new{" "}
            <Link href="/#technologies">
              <a className="a_text effect-text">technologies</a>
            </Link>
            , a believer in a more digital and egalitarian world thanks to the
            talent of all the people in the world. Since I was a child I have
            been interested in technology, taking as my first contact with
            programming at school and to this day I take advantage of every
            opportunity that comes my way to improve my professional and
            personal development.
          </p>
          <ul>
            <li>Live in Bogota D.C</li>
            <li>Spanish and English</li>
            <li>Computer and Systems Engineering Student</li>
          </ul>
        </div>
        <div className="img">
          <Image className="img-profile" src={profile} alt="Sergio Rey" width={280} height={280} />
        </div>
      </div>
      <style jsx>{`
        section {
          padding: 70px 0 0 0;
        }
        .title {
          margin: 0 auto;
          width: 168px;
          background: linear-gradient(
            to right,
            var(--primary),
            var(--primary-second)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        h2 {
          font-size: var(--text-third);
          text-align: center;
          margin: 0;
        }
        h3 {
          font-size: var(--text-third);
          color: var(--white);
          text-align: center;
          margin: 30px 0 50px;
        }
        .content {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 50px;
        }
        p {
          font-size: var(--text-content-2);
          line-height: 1.5;
          text-align: justify;
          margin-top: 0;
        }
        .a_text {
          color: var(--primary);
        }
        li {
          color: var(--white-lower);
          font-family: "Montserrat", sans-serif;
          font-size: var(--text-content-2);
          line-height: 1.5;
        }
        li::before {
          content: "~";
          color: var(--primary);
          font-size: var(--text-content);
          display: inline-block;
          width: 1.1em;
          margin-left: -1em;
        }
      `}</style>
    </section>
  );
}
