"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import ArrowLeft from '@/public/assets/images/ArrowLeft.png'

export default function BackButton({className}:{className:string}) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={className}
    >
      <Image src={ArrowLeft} alt='arrow' fill objectFit='contain' className='cursor-pointer' />
    </button>
  );
}
