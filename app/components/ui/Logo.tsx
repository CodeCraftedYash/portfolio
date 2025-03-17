"use client";
import Image from "next/image";
import logo from '@/app/assets/logo.webp';
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  return (
    <Image src={logo} alt="Logo" width={50} height={50} className="rounded-full border-2 border-white hover:cursor-pointer" onClick={ ()=> {router.push("/")}}/>
  );
}