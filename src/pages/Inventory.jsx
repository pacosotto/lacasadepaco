import Header from "../components/Header";
import { useState, useEffect } from "react";

//   json-server --watch db.json --port 4000

const Inventory = () => {
  const [inventario, setInventario] = useState([]);
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [unidad, setUnidad] = useState("");

  const obtenerInventario = async () => {
    try {
      const respuesta = await fetch("http://localhost:4000/inventario");
      const resultado = await respuesta.json();
      setInventario(resultado);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch("http://localhost:4000/inventario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });
      const resultado = await respuesta.json();
      setInventario((anteriorInv) => [...anteriorInv, resultado]);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const eliminarProducto = async (id) => {
    const respuesta = confirm("¿Estás seguro de eliminar?");
    if (!respuesta) {
      console.log("Rechazaste eliminar");
      return;
    }
    try {
      await fetch(`http://localhost:4000/inventario/${id}`, {
        method: "DELETE",
      });

      setInventario((anteriorInv) =>
        anteriorInv.filter((producto) => producto.id !== id)
      );
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    obtenerInventario();
  }, []);

  const handleAgregarProducto = (e) => {
    e.preventDefault();

    if ([nombre, unidad, cantidad].includes("")) {
      console.log("Rellena todos los campos");
      return;
    }

    const producto = {
      id: Date.now(),
      nombreProducto: nombre,
      cantidad,
      unidad,
    };
    setNombre("");
    setCantidad("");
    setUnidad("");
    agregarProducto(producto);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen m-10">
        <div className="mb-10">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleAgregarProducto}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="nombre">Nombre del producto:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="border w-2/6"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="cantidad">Unidad de medida</label>
              <select
                className="w-2/6 border"
                value={unidad}
                onChange={(e) => setUnidad(e.target.value)}
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="ml">Mililitros</option>
                <option value="gr">Gramos</option>
                <option value="unidad">Unidades</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="cantidad">Cantidad del producto</label>
              <input
                type="numbre"
                id="cantidad"
                name="cantidad"
                value={cantidad}
                className="border w-1/6"
                onChange={(e) => setCantidad(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Agregar producto"
              className="bg-blue-500 text-white rounded-lg w-1/3 py-2 cursor-pointer hover:bg-blue-700"
            />
          </form>
        </div>
        <table className="w-full mx-2 border">
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Unidad de medida</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {inventario.map(({ id, nombreProducto, cantidad, unidad }) => (
              <tr key={id} className="border text-center">
                <td>{id}</td>
                <td>{nombreProducto}</td>
                <td>{cantidad}</td>
                <td>{unidad}</td>
                <td className="py-2">
                  <div className="flex gap-2 justify-center">
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-700 text-white p-2 font-semibold rounded-lg"
                      onClick={() => eliminarProducto(id)}
                    >
                      Eliminar
                    </button>
                    <button
                      type="button"
                      className="bg-sky-600 hover:bg-sky-800 text-white p-2 font-semibold rounded-lg"
                    >
                      Editar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default Inventory;
