import React, { useEffect, useState } from 'react';
import './App.css';
import Photo from './components/Photo';
import Boton from './components/Boton'
import Barra from './components/SearchBar/Barra'

const categorias = ['Mountain', 'Beaches', 'Birds', 'Food'];

async function fetchData(url) {
  const rs = await fetch(url);
  const json = await rs.json();
  return json;
}

export default function App() {
  const [search, setSearch] = useState('car');
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('car'); 

  function getData(query) {
    const key = '9d990524e078f1778f0d08400d69e3ed';
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

    fetchData(url).then(data => setResults(data.photos.photo));
  }

  useEffect(() => {
    getData(searchTerm); 
  }, [searchTerm]);

  return (
    <div className='w-full flex flex-col'>
      <h1 className='titulo flex justify-center text-7xl mt-20 mb-10'>
        SnappShot
      </h1>

      <Barra/>
      

     
      <div className='flex justify-center mb-14 mx-2 '>
        <ul className='flex gap-4 flex-col md:flex-row w-full md:w-auto'>
          {categorias.map((categoria, index) => (
            <Boton
              key={index}
              nombre={categoria}
              onClick={() => setSearchTerm(categoria)}
            />
          ))}
        </ul>
      </div>

    
      <div className='flex justify-center mb-10'>
        <h2 className='text-3xl font-bold titulo'>
          {searchTerm} Images 
        </h2>
      </div>

     
      <div className='flex row-auto flex-wrap gap-8 w-full justify-center p-20'>
        {results && results.map((rs) => (
          <Photo key={rs.id} image={rs} />
        ))}
      </div>
    </div>
  );
}




