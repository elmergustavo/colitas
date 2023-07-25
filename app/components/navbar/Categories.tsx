'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Perros',
    icon: '/dog.png',
    description: 'Únicos y encantadores. Los perros mestizos tienen la magia de la diversidad en su ADN. ¡Adopta un compañero único y descubre un amor sin igual!',
  },
  {
    label: 'Gatos',
    icon: '/cart.png',
    description: 'Elegancia en movimiento, miradas que encantan. Adopta un gato y descubre el misterio y cariño que te conquistarán a cada ronroneo',
  },
  {
    label: 'Raza',
    icon: '/raza.png',
    description: 'Descubre la elegancia y carácter distintivo que hacen de ellos verdaderos compañeros de vida. ¡Encuentra tu raza perfecta y lleva a casa a un amigo excepcional!',
  },
  {
    label: 'Gatos y Perros',
    icon: '/catosperros.png',
    description: 'Amor en todas sus formas. Dos especies, una conexión única. Adopta un peludo o un minino y descubre la felicidad en cada ronroneo o cola que mueve. ¡La mejor compañía que llenará tu vida de alegría!',
  },
 
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;