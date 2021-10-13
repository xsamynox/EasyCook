import { Icon } from '@iconify/react';

const ButtonAdd = () => {
    return (
        <button className="rounded-full border-2 border-black border-opacity-100 flex items-center justify-center cursor-pointer hover:shadow-xl hover:bg-orange-medium">
            <Icon className="p-1" icon="akar-icons:plus" width="50" />
        </button>
    )
}

export default ButtonAdd
