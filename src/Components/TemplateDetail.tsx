import { Icon } from "@iconify/react";
import { Button } from "../ui/Button ";
import Checkbox from "../ui/Input/Checkbox/Checkbox";
import CarouselEasycook from "./CarouselEasycook";

const TemplateDetail = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl w-full border-2 p-4 border-black rounded-md">
        <div className="flex justify-between">
          <h2 className="font-semibold text-lg">Título de la receta</h2>
          <Button>
            <Icon icon="carbon:overflow-menu-vertical" width="25" />
          </Button>
        </div>
        <div className="flex justify-center gap-5 bg-orange-medium p-2 rounded-md">
          <div className="flex gap-2">
            <Icon icon="emojione-monotone:fork-and-knife" width="25" />
            <label>4 Personas</label>
          </div>
          <div className="flex gap-2">
            <Icon icon="bi:clock-history" width="25" />
            <label>30 minutos</label>
          </div>
        </div>

        <div className="justify-center flex">
          <CarouselEasycook />
        </div>

        <div className="flex justify-between pb-2 border-b-2">
          <div className="flex gap-2">
            <button>
              <Icon icon="bytesize:heart" width="25" />
            </button>
            <button>
              <Icon icon="fluent:chat-28-regular" width="25" />
            </button>
            <button>
              <Icon icon="carbon:share" width="25" />
            </button>
          </div>
          <div>
            <button>
              <Icon icon="bi:bookmark-heart" width="25" />
            </button>
          </div>
        </div>

        <h3 className="pt-4 pb-1 text-base font-medium">Ingredientes:</h3>
        <div>
          <Checkbox title="ingredientes" />
          <Checkbox title="ingredientes" />
          <Checkbox title="ingredientes" />
        </div>
        <h3 className="pt-4 pb-1 text-base font-medium">Paso a paso:</h3>
        <ol className="list-decimal ml-5" start={1}>
          <li>algo</li>
          <li>algo</li>
          <li>algo</li>
          <li>algo</li>
        </ol>
      </div>
    </div>
  );
};

export default TemplateDetail;
