import { useContext } from "react";
import { useForm, useFormState } from "react-hook-form";
import { addUser } from "../services/auth.service";
import { Link } from "react-router-dom";

import { UserContext } from "../context/auth.context";

export default function RegisterPage() {
  const { user, setUser } = useContext(UserContext);

  const { handleSubmit, errors, register } = useForm();
  const submitForm = async (data) => {
    console.log(data);
    const res = await addUser(data);
    console.log(res);
  };

  return (
    <>
      <div className="ml-4 mt-2">
        <Link to={"/"}>Regresar</Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <h2 className="font-bold text-xl tracking-widest">REGISTRO</h2>
        </div>
        <div>
          <form onSubmit={handleSubmit(submitForm)} autoComplete="off">
            <div>
              <label htmlFor="username">Nombre de Usuario</label>
            </div>
            <div>
              <input
                type="text"
                id="username"
                placeholder="user1234"
                {...register("username", {
                  required: "El nombre de usuario es requerido",
                })}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray"
              >
                Contraseña
              </label>
            </div>
            <div>
              <input
                type="password"
                id="password"
                className="bg-gray-900 border border-gray-300"
                {...register("password", {
                  required: "La contraseña es requerida",
                })}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray"
              >
                Teléfono
              </label>
            </div>
            <div>
              <input
                type="text"
                id="phone"
                className="bg-gray-900 border border-gray-300"
                {...register("phone", { required: "El teléfono es requerido" })}
              />
            </div>
            <div>
              <label
                htmlFor="firstname"
                className="block mb-2 text-sm font-medium text-gray"
              >
                Nombres
              </label>
            </div>
            <div>
              <input
                type="text"
                id="firstname"
                className="bg-gray-900 border border-gray-300"
                {...register("firstname", {
                  required: "Los nombres son requeridos",
                })}
              />
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block mb-2 text-sm font-medium text-gray"
              >
                Apellidos
              </label>
            </div>
            <div>
              <input
                type="text"
                id="lastname"
                className="bg-gray-900 border border-gray-300"
                {...register("lastname", {
                  required: "Los apellidos son requeridos",
                })}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray"
              >
                Correo Electrónico
              </label>
            </div>
            <div>
              <input
                type="email"
                id="email"
                className="bg-gray-900 border border-gray-300"
                {...register("email", { required: "El correo es requerido" })}
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray"
              >
                Genero
              </label>
            </div>
            <div>
              <input
                type="text"
                id="gender"
                className="bg-gray-900 border border-gray-300"
                {...register("gender", { required: "El genero es requerido" })}
              />
            </div>
            <div>
              <label
                htmlFor="birthdate"
                className="block mb-2 text-sm font-medium text-gray"
              >
                Fecha de Nacimiento
              </label>
            </div>
            <div>
              <input
                type="text"
                id="birthdate"
                className="bg-gray-900 border border-gray-300"
                {...register("birthdate", {
                  required: "La fecha de nacimiento es requerida",
                })}
              />
            </div>
            <div>
              <label
                htmlFor="age"
                className="block mb-2 text-sm font-medium text-gray"
              >
                Edad
              </label>
            </div>
            <div>
              <input
                type="number"
                id="age"
                className="bg-gray-900 border border-gray-300"
                {...register("age", { required: "La edad es requerida" })}
              />
            </div>
            <div>
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
