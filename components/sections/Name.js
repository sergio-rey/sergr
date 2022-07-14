import Link from "next/link";

export default function Name() {
  return (
    <section id="name">
      <div className="titles">
        <h1>Sergio Rey</h1>
      </div>
      <h2>Developer</h2>
      <div className="buttons">
        <a
          href="/files/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn_1"
        >
          Resume
        </a>
        <Link href="/#contact">
          <a className="btn btn_2">Contact</a>
        </Link>
      </div>
      <p>
        I am a self-taught person and passionate about new technologies, a
        believer in a more digital and egalitarian world thanks to the talent of
        all the people in the world.
      </p>
      <style jsx>{`
        section {
          padding: 110px 0 0 0;
        }
        .titles {
          margin: 0 auto;
          width: 100%;
          padding: 56px 0 0 0;
          background: linear-gradient(
            -45deg,
            var(--third),
            var(--secondary),
            var(--primary),
            var(--four)
          );
          background-size: 500% 500%;
          animation: gradient 12s ease infinite;
          height: 228px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
        }
        h1 {
          margin: 0;
          font-size: var(--text-title);
        }
        h2 {
          margin: 10px 0 0 0;
          color: var(--text-color);
          font-size: var(--text-subtitle);
          text-align: center;
        }
        .buttons {
          margin: 70px 0 70px 0;
          width: 100%;
          justify-content: center;
          display: flex;
          align-items: center;
        }
        .btn {
          display: block;
          text-align: center;
          width: 180px;
          font-size: 14px;
          padding: 15px;
          border-radius: 5px;
          margin: 0 10px;
          font-weight: 700;
        }
        .btn_1 {
          border: black 0.5px solid;
          color: black;
          background: var(--text-color);
        }
        .btn_1:hover {
          color: var(--text-color);
          background: black;
          border: var(--text-color) 0.5px solid;
        }
        .btn_2 {
          border: var(--text-color-lower) 0.5px solid;
          color: var(--text-color-lower);
          background: black;
        }
        .btn_2:hover {
          color: var(--text-color);
          border: var(--text-color) 0.5px solid;
        }
        p {
          line-height: 1.7;
          margin: 0 auto;
          width: 84%;
          text-align: center;
          font-size: var(--text-content);
          color: var(--text-color-lower);
          padding: 0 150px;
        }
        @media only screen and (max-width: 1126px) {
          .titles {
            height: 208px;
          }
          h1 {
            font-size: var(--text-title-second);
          }
          h2 {
            font-size: var(--text-subtitle-second);
          }
        }
        @media only screen and (max-width: 984px) {
          .titles {
            height: 192px;
          }
          h1 {
            font-size: var(--text-title-third);
          }
          h2 {
            font-size: var(--text-subtitle-third);
          }
        }
        @media only screen and (max-width: 912px) {
          .titles {
            height: 180px;
          }
          h1 {
            font-size: var(--text-title-four);
          }
          h2 {
            font-size: var(--text-subtitle-four);
          }
        }
        @media only screen and (max-width: 676px) {
          .titles {
            height: 166px;
          }
          h1 {
            font-size: var(--text-title-five);
          }
          h2 {
            font-size: var(--text-subtitle-five);
          }
        }
        @media only screen and (max-width: 545px) {
          .titles {
            height: 160px;
          }
          h1 {
            font-size: var(--text-title-six);
          }
          h2 {
            font-size: var(--text-subtitle-six);
          }
        }
        @media only screen and (max-width: 530px) {
          .titles {
            height: 140px;
          }
          h1 {
            font-size: var(--text-title-seven);
          }
          h2 {
            font-size: var(--text-subtitle-seven);
          }
          .buttons {
            display: block;
          }
          .btn {
            width: 240px;
            margin: 0 auto;
          }
          .btn_2 {
            margin-top: 15px;
          }
        }
        @media only screen and (max-width: 440px) {
          .titles {
            height: 126px;
          }
          h1 {
            font-size: var(--text-title-eight);
          }
          h2 {
            font-size: var(--text-subtitle-eight);
          }
          .buttons {
            display: block;
          }
          .btn {
            width: 240px;
            margin: 0 auto;
          }
          .btn_2 {
            margin-top: 15px;
          }
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
