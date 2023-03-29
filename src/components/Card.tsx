"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./Card.css";

export default function Card({
  src,
  alt,
  tittle,
  author,
  id,
}: {
  src: string;
  alt: string;
  tittle: string;
  author: string;
  id: string;
}) {
  const router = useRouter();
  return (
    <div
      className="card cursor-pointer"
      onClick={() => router.push(`/podcasts/${id}`)}
    >
      <Image src={src} alt={alt} width={100} height={100} className="podcast" />
      <span className="tittle-podcast">{tittle}</span>
      <span>Author: {author}</span>
    </div>
  );
}
