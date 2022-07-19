import Image from 'next/image';
import ImgJob1 from "../../public/job1.jpg";
import ImgJob2 from "../../public/job2.jpg";

export default function Experience() {
    return (
        <section id="experience">
            <div className="title">
                <h2>Experience</h2>
            </div>
            <h3>My Professional History</h3>
            <div className="jobs">
                <div className="job">
                    <div className="panel">
                        <h4>EXDU S.A.S</h4>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum et
                            aperiam incidunt veritatis debitis tempora dignissimos enim qui,
                            fugiat rem. Fugiat sed harum minus a consectetur, blanditiis
                            nobis, reprehenderit, cupiditate odio beatae delectus sapiente
                            quidem fuga optio eius labore? Labore eos vitae facilis
                            repellendus natus minima laborum nam quos ex.
                        </p>
                    </div>
                    <div className="img">
                        <div className="img_effect"></div>
                        <Image
                            className="img_job"
                            src={ImgJob1}
                            alt="Picture of the author"
                            width={500}
                            height={510}
                        />
                    </div>
                </div>
                <div className="job job_2">
                    <div className="img">
                        <div className="img_effect"></div>
                        <Image
                            className="img_job"
                            src={ImgJob2}
                            alt="Picture of the author"
                            width={500}
                            height={510}
                        />
                    </div>
                    <div className="panel">
                        <h4>FREELANCER</h4>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum et
                            aperiam incidunt veritatis debitis tempora dignissimos enim qui,
                            fugiat rem. Fugiat sed harum minus a consectetur, blanditiis
                            nobis, reprehenderit, cupiditate odio beatae delectus sapiente
                            quidem fuga optio eius labore? Labore eos vitae facilis
                            repellendus natus minima laborum nam quos ex.
                        </p>
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
                width: 220px;
                background: linear-gradient(to bottom,
                var(--secondary),
                var(--third));
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
                font-size: var(--text-fifth);
                color: var(--text-color);
                line-height: 1.7;
                padding: 0;
                margin: 0;
              }

              .jobs {
                padding: 0 50px;
              }

              .job {
                display: flex;
                gap: 50px;
                margin-top: 60px;
                justify-content: center;
                align-items: center;
              }

              .img {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .img_effect {
                position: absolute;
                width: 100%;
                height: 353.8px;
                z-index: 3;
                border-radius: 16px;
                background: var(--primary-lower);
              }

              .img_effect:hover {
                background-color: transparent;
              }

              .panel {
                width: 70%;
                background: var(--background-hight);
                border-radius: 16px;
                padding: 30px;
                border: solid 1px var(--color-box);
              }

              p {
                font-size: var(--text-content-2);
                line-height: 1.7;
                text-align: justify;
                margin-top: 0;
                color: var(--text-color-lower);
              }

              @media only screen and (max-width: 1300px) {
                section {
                  padding: 120px 170px 0;
                }
              }

              @media only screen and (max-width: 1230px) {
                section {
                  padding: 120px 150px 0;
                }
              }

              @media only screen and (max-width: 1200px) {
                section {
                  padding: 120px 130px 0;
                }
              }

              @media only screen and (max-width: 1160px) {
                section {
                  padding: 120px 100px 0;
                }
              }

              @media only screen and (max-width: 1090px) {
                section {
                  padding: 120px 70px 0;
                }
              }

              @media only screen and (max-width: 1030px) {
                section {
                  padding: 120px 50px 0;
                }
              }

              @media only screen and (max-width: 990px) {
                .job {
                  gap: 35px;
                }

                .jobs {
                  padding: 0;
                }

                h4 {
                  text-align: center;
                  margin-bottom: 20px;
                }

                .img_effect {
                  width: 100%;
                  height: 100%;
                }

                .panel {
                  width: 85%;
                }
              }

              @media only screen and (max-width: 860px) {
                .job {
                  flex-direction: column;
                }

                .job_2 {
                  flex-direction: column-reverse;
                }

                .img {
                  width: 360px;
                  height: 367.2px;
                }
              }

              @media only screen and (max-width: 700px) {
                .panel {
                  width: 100%;
                }
              }

              @media only screen and (max-width: 460px) {
                .img {
                  width: auto;
                  height: auto;
                }
              }
            `}</style>
        </section>
    );
}
