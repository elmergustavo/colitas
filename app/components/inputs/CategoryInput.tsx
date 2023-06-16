'use client';

import Image from "next/image";
import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: string | null | undefined;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon,
  label,
  selected,
  onClick
}) => {
  return ( 
    <div
      onClick={() => onClick(label)}
      className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:border-black
        transition
        cursor-pointer
        ${selected ? 'border-black' : 'border-neutral-200'}
      `}
    >
      {/* <Icon size={30} />
       */}
       <Image width={200} height={200} src={icon || '/placeholder.jpg'} alt='img' />
      <div className="font-semibold">
        {label}
      </div>
    </div>
   );
}
 
export default CategoryBox;