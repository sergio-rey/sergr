import Logo from "../Logo";

export default function Technologies() {
  return (
    <section id="technologies">
      <h3>Technologies</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quo sunt
        quos ad maiores a beatae consequuntur iure, accusamus animi libero
        maxime odit? Cum laboriosam sint eum eaque itaque, neque saepe facere
        voluptatum, voluptates fugiat nam? Dolor similique sit veniam laboriosam
        perspiciatis veritatis atque reiciendis? Eum impedit, beatae error
        dolorem, quas, numquam architecto nobis asperiores quidem facere
        cupiditate sapiente corrupti nihil blanditiis deleniti ipsa illum vel
        labore a sunt! Architecto, inventore. Vel ex consectetur id, quos
        temporibus maiores dignissimos. Repellat.{" "}
      </p>
      <div className="logos">
        <Logo name="Python" linkP="http://www.python.org" />
        <Logo name="Golang" width="90" linkP="https://go.dev/" />
        <Logo name="Reactjs" linkP="https://reactjs.org/" />
        <Logo name="Typescript" linkP="https://www.typescriptlang.org/" />
        <Logo name="Git" png={true} linkP="https://git-scm.com/" />
        <Logo name="Nodejs" width="90" linkP="https://nodejs.org/" />
        <Logo name="MySQL" width="90" linkP="https://www.mysql.com/" />
        <Logo name="MongoDB" width="120" linkP="https://www.mongodb.com/" />
      </div>
      <style jsx>{`
        section {
          margin-top: 40px;
          padding: 120px 200px 0;
        }
        h3 {
          font-size: var(--text-third);
          text-align: center;
          margin: 0 0 50px;
          color: var(--text-color);
        }
        p {
          font-size: var(--text-content-2);
          line-height: 1.7;
          text-align: justify;
          margin: 0;
          padding: 0;
          color: var(--text-color-lower);
        }
        .logos {
          margin: 50px 0 0;
          display: flex;
          justify-content: space-around;
          gap: 50px;
          flex-wrap:wrap;
        }
      `}</style>
    </section>
  );
}
