import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button '
import { InputClear } from '../ui/Input/InputClear'
import AddInput from './AddInput'
import Header from './Header'

const Post = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="max-w-xl w-full">
          <form>

            <div className="bg-gray-post flex items-center flex-col mb-1 rounded-md" >
              <div className="button-padding cursor-pointer flex flex-col	items-center">
                <Icon className="cursor-pointer" icon="fluent:camera-add-24-filled" width="60" />
                <input className="hidden mb-3" type="file" accept="image/png, image/jpeg" />
                <p className="text-sm">Sube foto de tu propia receta <br /> Inspira a otros con tus ideas</p>
              </div>
              <progress className="mb-3 w-3/12 h-2" value="0" max="100">0%</progress>
            </div>

            <div>
              <div className="flex flex-col border-b-8 border-gray-post">
                <input className="border-none bg-gray-post text-left w-full mb-2 rounded-md p-4 h-8 text-sm" type="text" placeholder="Ej: Brócoli gratinado" />
                <div className="flex justify-between mb-2">
                  <label>Comensales</label>
                  <input className="border-none bg-gray-post text-left rounded-md p-4 h-8 text-sm" type="text" placeholder="Ej: 2 personas" />
                </div>
                <div className="flex justify-between mb-4">
                  <label>Tiempo de preparación</label>
                  <input className="border-none bg-gray-post text-left rounded-md p-4 h-8 text-sm" type="text" placeholder="Ej: 15 minutos" />
                </div>
              </div>

              <div className="border-b-8 border-gray-post">
                <h5 className="mt-4">INGREDIENTES: </h5>
                <InputClear placeholder="Ej: 1 rama de brócoli de unos 600gr." />
                <InputClear placeholder="Ej: 3 cucharadas de aceite de oliva" />
                <InputClear placeholder="Ej: Queso parmesano" />
                <InputClear placeholder="Ej: 100gr. Jamón en cubos" />
                <AddInput title={"Ingredientes"} />

              </div>

              <div>
                <h5 className="mt-4" >PASO A PASO:</h5>
                <div className="flex gap-10 mb-2">
                  <textarea className="w-11/12 h-1/4 bg-gray-post rounded-md text-sm p-2" placeholder="Ej:Cocemos el brocoli al vapor 3 ó 4 min. Lo separamos en arbolitos." />
                  <button>
                    <Icon icon="bi:trash" className="bg-white cursor-pointer mb-2" />
                  </button>
                </div>

                <AddInput title="Paso a paso" />
              </div>

              <Link to="/" className="flex justify-center">
                <Button className="p-2 w-3/12 h-1/6 bg-orange-medium text-black border-none mb-8 hover:bg-orange-hover" title="Publicar" />
              </Link>

            </div>
          </form>
        </div>
      </div >
    </>
  )
}

export default Post
