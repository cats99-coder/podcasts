import Image from "next/image";
import "./Card.css";

export default function Card({
  src,
  alt,
  tittle,
  author,
}: {
  src: string;
  alt: string;
  tittle: string;
  author: string;
}) {
  return (
    <div className="card">
      <Image src={src} alt={alt} width={100} height={100} className="podcast" />
      <span className="tittle-podcast">{tittle}</span>
      <span>Author: {author}</span>
    </div>
  );
}
