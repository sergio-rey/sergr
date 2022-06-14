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
          className="btn btn-1"
        >
          Resume
        </a>
        <Link href="/#contact">
          <a className="btn btn-2">Contact</a>
        </Link>
      </div>
      <p>
        I am a self-taught person and passionate about new technologies, a
        believer in a more digital and egalitarian world thanks to the talent of
        all the people in the world.
      </p>
      <style jsx>{`
        section {
          padding: 100px 0 0 0;
        }
        .titles {
          margin: 0 auto;
          width: 735;
          padding: 56px 0 0 0;
          height: 218px;
          background: linear-gradient(
            to right,
            var(--primary),
            var(--primary-second)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        h1 {
          margin: 0;
          color: var(--white);
          font-size: var(--text-title);
          text-align: center;
        }
        h2 {
          margin: 10px 0 0 0;
          color: var(--white);
          font-size: var(--text-second);
          text-align: center;
        }
        .buttons {
          margin: 70px 0;
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
        }
        .btn-1 {
          border: black 0.5px solid;
          color: black;
          background: var(--white);
        }
        .btn-1:hover {
          color: var(--white);
          background-color: black;
          border: var(--white) 0.5px solid;
        }
        .btn-2 {
          border: var(--white-lower) 0.5px solid;
          color: var(--white-lower);
          background: black;
        }
        .btn-2:hover {
          color: var(--white);
          border: var(--white) 0.5px solid;
        }
        p {
          line-height: 1.7;
          margin: 0 auto;
          width: 84%;
          text-align: center;
          font-size: var(--text-content);
        }
      `}</style>
    </section>
  );
}
