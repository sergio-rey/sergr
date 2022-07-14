import Image from "next/image";
import Link from "next/link";

export default function Logo({ linkP, name, width, height, png }) {
  const file = png ? ".png" : ".svg";
  return (
    <div className="logo">
      <Link href={linkP}>
        <a target="_blank" rel="noopener noreferrer">
          <div className="content_img">
            <Image
              className="img_logo"
              src={"/logos/" + name + file}
              alt={"Logo of " + name}
              width={width ? width : 58}
              height={height ? height : 58}
            />
          </div>
          <p className="logo_name">{name}</p>
        </a>
      </Link>
      <style jsx>{`
        .content_img {
          height: 90px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .logo {
          width: 120px;
        }
        p {
          text-align: center;
          margin: 10px 0 0 0;
          padding: 0;
          color: var(--text-color);
          font-size: 14px;
        }
        .content_img:hover + .logo_name, p:hover {
          color: var(--primary-hight);
        }
      `}</style>
    </div>
  );
}
