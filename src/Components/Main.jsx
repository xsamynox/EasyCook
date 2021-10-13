import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import comidaVegana from "../Images/comida-vegana.jpg";
import { Button } from '../ui/Button ';
import ButtonAdd from './ButtonAdd';

const Main = () => {
  return (
    <>
      <div className="flex flex-col	items-center gap-y-1">
        <div className="max-w-xl w-full flex border-2 border-black rounded-lg	p-4">
          <div className="w-1/3">
            <img className="rounded-lg" src={comidaVegana} />
          </div>
          <div className="px-8">
            <h4><strong>Receta título</strong></h4>
            <div className="flex gap-2 mb-2">
              <Icon icon="carbon:user-avatar-filled-alt" width="25" />
              <p>Por: Samantha Moreno</p>
            </div>
            <div className="flex gap-6 mb-3">
              <button>
                <Icon icon="bytesize:heart" width="25" />
              </button>
              <Button className="w-1/3 border-2 text-xs border-orange-medium text-orange-medium" title="Seguir" />
            </div>
            <a className="underline text-sm" href="/"><Link to="/detail"><strong>Leer más...</strong></Link></a>
          </div>
        </div>

        <div className="max-w-xl w-full flex border-2 border-black rounded-lg	p-4">
          <div className="w-1/3">
            <img className="rounded-lg" src={comidaVegana} />
          </div>
          <div className="px-8">
            <h4><strong>Receta título</strong></h4>
            <div className="flex gap-2 mb-2">
              <Icon icon="carbon:user-avatar-filled-alt" width="25" />
              <p>Por: Samantha Moreno</p>
            </div>
            <div className="flex gap-6 mb-3">
              <button>
                <Icon icon="bytesize:heart" width="25" />
              </button>
              <Button className="w-1/3 border-2 text-xs border-orange-medium text-orange-medium" title="Seguir" />
            </div>
            <a className="underline text-sm" href="/"><strong>Leer más...</strong></a>
          </div>
        </div>

        <div className="max-w-xl w-full flex border-2 border-black rounded-lg	p-4">
          <div className="w-1/3">
            <img className="rounded-lg" src={comidaVegana} />
          </div>
          <div className="px-8">
            <h4><strong>Receta título</strong></h4>
            <div className="flex gap-2 mb-2">
              <Icon icon="carbon:user-avatar-filled-alt" width="25" />
              <p>Por: Samantha Moreno</p>
            </div>
            <div className="flex gap-6 mb-3">
              <button>
                <Icon icon="bytesize:heart" width="25" />
              </button>
              <Button className="w-1/3 border-2 text-xs border-orange-medium text-orange-medium" title="Seguir" />
            </div>
            <a className="underline text-sm" href="/"><strong>Leer más...</strong></a>
          </div>
        </div>


      </div >
      <div className="relative">
        <div className="absolute right-20 bottom-0">
          <ButtonAdd right-20 />
        </div>
      </div>
    </>
  );
};

export default Main;
