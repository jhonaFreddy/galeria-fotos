export default function Boton({ nombre, onClick }) {
    return (
      <li>
        <button
          className='boton text-white font-bold md:w-24 w-full rounded-sm'
          onClick={onClick}
        >
          {nombre}
        </button>
      </li>
    );
  }