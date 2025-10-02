'use client'
import Image from "next/image";
import { useEffect } from "react";

interface UserPageProps {
  params: {
    id: string;
  };
}

export default function UserPage({ params }: UserPageProps) {
  useEffect (() => {
    window.alert("pindah yukk")
  })
  console.log("ini tumbler")
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "50px", height: "100%", width: "100%", justifyItems: "center"}}>
      <h1>Profil User</h1>
      <p>ID User: {params.id}</p>
      <Image src="/Asset/lucuu.jpeg" alt="..." height={300} width={300} className="rounded-2xl flex items-center justify-center"/>
    </div>
  );
}
