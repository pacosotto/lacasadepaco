import Header from "../components/Header";

const Menu = () => {
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
      </main>
    </>
  );
};

export default Menu;
