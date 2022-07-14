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
                    <Image
                        className="img_job"
                        src={ImgJob1}
                        alt="Picture of the author"
                        width={500}
                        height={200}
                    />
                </div>
                <div className="job">
                    <Image
                        className="img_job"
                        src={ImgJob2}
                        alt="Picture of the author"
                        width={500}
                        height={200}
                    />
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
                background: linear-gradient(to right,
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
                font-size: var(--text-fifth );
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
              
            `}</style>
        </section>
    );
}
