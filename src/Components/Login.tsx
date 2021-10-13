import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { Icon } from '@iconify/react';
import { Input } from '../ui/Input';
import AuthenticationFrame from './AuthenticationFrame';
import { Button } from '../ui/Button ';

type Inputs = {
  email: string,
  password: string,
};

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("email")) // watch input value by passing the name of it

  return (
    <AuthenticationFrame>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Inicia sesión:</label>
        <section>
          <Input icon="clarity:email-solid" {...register("email", { required: true })} placeholder="E-mail" />
          <Input icon="fa-solid:key" {...register("password", { required: true })} placeholder="Contraseña" />
        </section>

        {errors.email?.message && <span>This field is required</span>}
        <Button className="w-full p-3.5 bg-orange-medium text-black border-none mb-8 hover:bg-orange-hover" title="Inicia sesión" />
        <Button className="w-full p-3.5 bg-white flex justify-center content-center items-center gap-x-1 border-2 border-orange-medium mb-4 hover:bg-orange-hover" title="Inicia sesión con Google">
          <Icon icon="flat-color-icons:google" width="20" />
        </Button>
      </form>

      <section>
        <label htmlFor="">¿No tienes cuenta?</label>
        <Link to="/register">
          <Button className="w-full p-3.5 bg-gray-light text-black hover:bg-gray-hover" title="Registrate aqui" />
        </Link>
      </section>
    </AuthenticationFrame>

  )
}

export default Login;