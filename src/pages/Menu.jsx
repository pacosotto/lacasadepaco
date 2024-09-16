import { useState } from "react";
import Header from "../components/Header";
import { useEffect } from "react";

const Menu = () => {
  const [platillos, setPlatillos] = useState(null);

  const obtenerPlatillos = async () => {
    try {
      const respuesta = await fetch("http://localhost:4000/platillos");
      const resultado = await respuesta.json();
      setPlatillos(resultado);
    } catch (error) {
      console.log("Error en obtenerPlatillos: ", error);
    }
  };

  useEffect(() => {
    obtenerPlatillos();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <form className="flex flex-col m-10 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="nombre">Nombre del platillo:</label>
            <input type="text" name="nombre" id="nombre" className="border" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="imagen">Foto del platillo:</label>
            <input type="file" name="imagen" id="imagen" className="border" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="precio">Precio:</label>
            <input type="number" name="precio" id="precio" className="border" />
          </div>
          <div className="flex flex-col gap-2 w-3/6">
            <label htmlFor="ingredientes">Ingredientes:</label>
            <select
              name="ingredientes"
              id="ingredientes"
              className="border p-2"
            >
              <option value="">Selecciona un ingrediente</option>
            </select>
            <input
              type="number"
              placeholder="Ingresa la cantidad"
              className="border p-2"
            />
            <button
              type="button"
              className="bg-blue-500 text-white rounded-lg p-2"
            >
              Agregar ingrediente
            </button>
          </div>
          <div></div>
        </form>

        <section className="min-h-screen flex flex-col items-center gap-10 m-4">
          <h1 className="text-4xl font-semibold">Platillos: </h1>
          <div className="grid grid-flow-col gap-10 m-10 w-5/6">
            {platillos?.map((platillo) => {
              return (
                <article
                  key={platillo.id}
                  className="border flex flex-col rounded-lg items-center shadow-md hover:scale-110 transition ease-in-out"
                >
                  <img
                    src={platillo.urlImagen}
                    alt=""
                    className="rounded-t-lg"
                  />
                  <h3 className="text-lg font-semibold p-2 text-center">
                    {platillo.nombre}
                  </h3>
                  <p className="p-2">
                    Precio:{" "}
                    <span className="font-semibold">${platillo.precio}</span>
                  </p>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Menu;
