"use client";
import { useRouter } from "next/navigation";
import "./Header.css";

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <h1 className="tittle cursor-pointer" onClick={() => router.push("/")}>
        Podcaster
      </h1>
    </header>
  );
}