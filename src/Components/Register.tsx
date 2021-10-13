import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from 'react-router-dom';
import { Button } from "../ui/Button ";
import { Input } from '../ui/Input';
import AuthenticationFrame from './AuthenticationFrame';

type Inputs = {
  username: string,
  email: string,
  password: string,
};

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("email")) // watch input value by passing the name of it

  return (
    <AuthenticationFrame hasBackButton>
      <label htmlFor="">Registrate con tu Email: </label>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input icon="carbon:user-avatar-filled-alt" {...register("username", { required: true })} placeholder="Nombre de usuario" />
        <Input icon="clarity:email-solid" {...register("email", { required: true })} placeholder="E-mail" />
        <Input icon="fontisto:locked" {...register("password", { required: true })} placeholder="Contraseña" />
        <Input icon="fontisto:locked" placeholder="Confirma tu contraseña" />

        <Button title="Registrarse" className="p-3.5 w-full bg-orange-medium text-black border border-1 border-gray-300 mt-8 mb-2 hover:bg-orange-hover" type="submit" />

        <p>¿Ya estas registrado?<Link to="/login"> <a className="underline text-orange-medium hover:text-orange-hover hover:shadow">Inicia sesión aqui</a> </Link></p>
      </form>
    </AuthenticationFrame>

  )
}

export default Register
