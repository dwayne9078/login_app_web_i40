import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1>INICIO</h1>
      <div>
      <Link to={"/login"}>Ir al Login</Link>
      </div>
      <Link to={"/register"}>Ir al Registro</Link>
    </div>
  );
}
