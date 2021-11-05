import { Logo } from "../ui/Logo";

const NotFound = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full ">
        <div className="flex justify-center items-center p-14 bg-gray-300 rounded-2xl	">
          <Logo className="w-full h-1/3" width="100%" />
          <div>
            <h1 className="text-6xl text-center" >Ups!</h1>
            <h1 className="text-9xl text-yellow-500	font-bold	">404</h1>
            <h2 className="text-4xl">Page not found</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
