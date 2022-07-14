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
          <h4>Description</h4>
          <p>
            I am a self-taught person and passionate about new{" "}
            <Link href="/#technologies">
              <a className="a_text effect_text">technologies</a>
            </Link>
            , a believer in a more digital and egalitarian world thanks to the
            talent of all the people in the world. Since I was a child I have
            been interested in technology, taking as my{" "}
            <Link href="/#technologies">
              <a className="a_text effect_text">first</a>
            </Link>{" "}
            contact with programming at school and to this day I take advantage
            of every opportunity that comes my way to improve my professional
            and personal{" "}
            <Link href="/#technologies">
              <a className="a_text effect_text">development</a>
            </Link>
            .
          </p>
        </div>
        <div className="img">
          <div className="panel"></div>
          <Image
            className="img_profile"
            src={profile}
            alt="Picture of the author Sergio Rez"
            width={500}
            height={500}
          />
        </div>
      </div>
      <style jsx>{`
        section {
          margin-top: 40px;
          padding: 120px 200px 0;
        }
        .title {
          margin: 0 auto;
          width: 200px;
          background: linear-gradient(
            to right,
            var(--primary),
            var(--secondary)
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
          color: var(--text-color);
          text-align: center;
          margin: 30px 0 50px;
        }
        h4 {
          font-size: var(--text-fourth);
          color: var(--text-color);
          margin: 0;
          line-height: 1.7;
        }
        .content {
          padding: 50px;
          background: var(--background-hight);
          border-radius: 16px;
          border: solid 1px var(--color-box);
          display: grid;
          grid-template-columns: 3.2fr 1.8fr;
          gap: 50px;
        }
        p {
          font-size: var(--text-content-2);
          line-height: 1.7;
          text-align: justify;
          margin-top: 0;
          color: var(--text-color-lower);
        }
        .a_text {
          color: var(--primary-hight);
        }
        .img {
          position: relative;
        }
        .panel {
          position: absolute;
          background: var(--primary-lower);
          max-width: 500px;
          max-height: 500px;
          width: 100%;
          height: 99%;
          z-index: 4;
          border-radius: 16px;
        }
        .panel:hover {
          background-color: transparent;
        }
      `}</style>
    </section>
  );
}
