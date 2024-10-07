import React, { useState } from 'react';

export default function Barra() {
  const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='py-8 flex justify-center gap-0'>
      <input
        type="text"
        placeholder='Search'
        className='w-96 px-8 h-10 border-l border-y rounded-l-md shadow focus:outline-none focus:bg-sky-50 bg-gray-200'
        onChange={(e) => setSearch(e.target.value)} 
      />
      <button
        className='boton px-4 rounded-r-md flex items-center justify-center'
        onClick={() => setSearchTerm(search)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>
    </div>
  );
}
