const Header = () => {
  return (
    <nav className="bg-blue-600">
      <ul className="flex justify-center gap-10 text-xl text-white font-semibold p-4">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/">Tomar Orden</a>
        </li>
        <li>
          <a href="/menu">Menú</a>
        </li>
        <li>
          <a href="/inventario">Inventario</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
