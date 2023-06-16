'use client';

import Image from "next/image";
import { IconType } from "react-icons";

interface CategoryViewProps {
  icon: string | null | undefined;
  label: string,
  description: string
}

const CategoryView: React.FC<CategoryViewProps> = ({ 
  icon,
  label,
  description
 }) => {
  return ( 
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
      <Image width={200} height={200} src={icon || '/placeholder.jpg'} alt='img' />
        <div className="flex flex-col">
            <div 
              className="text-lg font-semibold"
            >
              {label}
            </div>
            <div 
              className="text-neutral-500 font-light"
            >
              {description}
            </div>
        </div>
      </div>
    </div>
   );
}
 
export default CategoryView;