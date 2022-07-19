import Head from "next/head";
import Link from "next/link";

function Error({statusCode}) {
    return (
        <>
            <Head>
                <title>{statusCode ? `${statusCode} | Sergio Rey ` : "Error | Sergio Rey"}</title>
                <meta name="description" content="Personal website of Sergio Rey"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <div className="content">
                    <div className="title">
                        <p>
                            {statusCode
                                ? statusCode
                                : 'Error'}
                        </p>
                    </div>
                    <p className="message">
                        An error has been generated
                    </p>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </div>
            </main>
            <style jsx>{`
              main {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100vh;
              }

              .title {
                width: 280px;
                background: linear-gradient(-45deg,
                var(--third),
                var(--secondary),
                var(--primary),
                var(--four),
                var(--five));
                background-size: 500% 500%;
                animation: gradient 12s ease infinite;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                height: 90px;
                font-weight: 800;
                text-align: center;
              }

              .title p {
                font-size: var(--text-error);
                margin: 0;
              }

              .message {
                margin-top: 30px;
                text-align: center;
                color: var(--text-color);
              }

              a {
                text-align: center;
                display: block;
                color: var(--text-color-lower);
              }

              @keyframes gradient {
                0% {
                  background-position: 0 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0 50%;
                }
              }
            `}</style>
        </>
    )
}

Error.getInitialProps = ({res, err}) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return {statusCode}
}

export default Error