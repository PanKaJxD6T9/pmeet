
'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'bg-[#995FE9] px-4 py-6 flex flex-col justify-between w-full xl:max-w-[360px] min-h-[200px] rounded-[14px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 max-sm:hover:scale-100 max-md:hover:scale-100 max-lg:hover:scale-100',
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt="meeting" width={27} height={27} />
      </div>
      
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl text-white font-bold">{title}</h1>
        <p className="text-lg text-white font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
