import { useState } from "react";
import Header from "../components/Header";
import { useEffect } from "react";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  const obtenerMenu = async () => {
    try {
      const respuesta = await fetch("http://localhost:4000/menu");
      const resultado = await respuesta.json();
      setMenu(resultado);
    } catch (error) {
      console.log("Error en obtenerMenu: ", error);
    }
  };

  useEffect(() => {
    obtenerMenu();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="min-h-screen flex flex-col items-center gap-10 m-4">
          <h1 className="text-4xl font-semibold">Menú: </h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 m-auto mt-0 w-5/6">
            {menu.map((platillo) => {
              return (
                <article
                  key={platillo.id}
                  className="bg-white border border-gray-700 py-2 text-center rounded-lg shadow-md"
                >
                  <h2 className="font-semibold text-2xl py-2">{platillo.name}</h2>
                  <img src={platillo.imageUrl} alt="" className="h-48 w-full object-cover" />
                  <p className="py-2">Precio: ${platillo.price}</p>
                  <ul className="list-disc pl-5 py-2 text-left mx-4">
                  <p>Ingredientes: </p>
                    {platillo.ingredients.map((ingrediente, index) => (
                      <li key={index}>{ingrediente}</li> // Usamos el índice como clave si los ingredientes no tienen un id único
                    ))}
                  </ul>
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
