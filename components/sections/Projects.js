import Image from "next/image";
import project1 from "../../public/project1.jpg"
import project2 from "../../public/project2.jpg"

export default function Projects() {
    return (
        <section id="projects">
            <div className="title">
                <h2>Some Projects</h2>
            </div>
            <h3>My Most Recent Projects</h3>
            <div className="container">
                <div className="project">
                    <div className="text_f"></div>
                    <div className="text">
                        <h4>CHESS WEB</h4>
                        <div className="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi consectetur
                                deleniti ea fugit ipsum optio perferendis, placeat totam. A aspernatur eos facilis, fuga
                                harum labore laboriosam odio sit veritatis.</p>
                        </div>
                        <ul>
                            <li> P5.js</li>
                            <li> JavaScript</li>
                            <li> Vite.js</li>

                        </ul>
                    </div>
                    <div className="img">
                        <div className="img_effect"></div>
                        <Image
                            className="img_project"  alt="Image of project chess" src={project1} width={580} height={360}></Image>
                    </div>
                </div>
                <div className="project">
                    <div className="img">
                        <div className="img_effect"></div>
                        <Image className="img_project" alt="Image of project tangram" src={project2} width={580} height={360}></Image>
                    </div>
                    <div className="text_f"></div>
                    <div className="text text_r">
                        <h4>TANGRAM WEB</h4>
                        <div className="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi consectetur
                                deleniti ea fugit ipsum optio perferendis, placeat totam. A aspernatur eos facilis, fuga
                                harum labore laboriosam odio sit veritatis.</p>
                        </div>
                        <ul>
                            <li> P5.js</li>
                            <li> JavaScript</li>
                            <li> Vite.js</li>
                        </ul>
                    </div>
                </div>
            </div>
            <style jsx>{`
              section {
                margin-top: 40px;
                padding: 120px 200px 0;
              }

              .title {
                margin: 0 auto;
                width: 280px;
                background: linear-gradient(to bottom,
                var(--third),
                var(--four));
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
                padding: 0;
              }

              h4 {
                color: var(--text-color);
                font-size: var(--text-fifth);
                line-height: 1.7;
                margin: 10px 0;
              }

              .project {
                margin: 0 0 30px;
                position: relative;
                display: flex;
                height: 400px;
                align-items: center;
              }

              .text_f {
                width: 40%;
                height: 100%;
              }

              .text {
                z-index: 4;
                position: absolute;
                width: 50%;
              }

              .text_r {
                left: 50%;
              }

              .text_r h4, .text_r p {
                text-align: end;
              }

              .text_r ul {
                justify-content: end;
              }

              .panel {
                background: var(--background-hight);
                width: 100%;
                border-radius: 4px;
                padding: 20px;
              }

              .panel p {
                font-size: var(--text-content-2);
                line-height: 1.7;
                margin: 0;
              }

              ul {
                display: flex;
                margin: 10px 0;
                padding: 0;
                gap: 20px;
              }

              li {
                line-height: 1.7;
                color: var(--text-color-lower-2);
                font-size: var(--text-content-3);
              }

              .img {
                width: 60%;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
              }

              .img_effect {
                position: absolute;
                background: var(--primary-lower);
                max-width: 580px;
                max-height: 360px;
                width: 100%;
                height: 100%;
                z-index: 3;
                border-radius: 4px;
              }

              .img_effect:hover {
                background-color: transparent;
              }

              @media only screen and (max-width: 1180px) {
                section {
                  padding: 120px 100px 0;
                }
              }

              @media only screen and (max-width: 990px) {
                section {
                  padding: 120px 50px 0;
                }
              }

              @media only screen and (max-width: 800px) {
                .container {
                  width: 100%;
                }

                .project {
                  display: block;
                  height: 360px;
                  width: fit-content;
                  margin: 0 auto 30px;
                }

                .img {
                  width: 100%;
                }

                .text_f {
                  display: none;
                }

                .text {
                  top: 20px;
                  left: 35px;
                  width: 60%;
                }

                .text_r h4, .text_r p {
                  text-align: start;
                }

                .text_r ul {
                  justify-content: start;
                }

                .panel {
                  background: none;
                  padding: 10px 0;
                }

                .img_effect {
                  background: var(--primary-lower-second);
                }

                .project:hover .img_effect {
                  background: none;
                }
              }
            `}</style>
        </section>);
}
