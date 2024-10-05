import { Result } from 'postcss';
import React, { useEffect, useState } from 'react'
import './App.css'

const categorias = ['Mountain','Beaches','Birds','Food'];
async function fetchData(url) {
  const rs = await fetch(url);
  const json = await rs.json();
  return json
}

export default function App() {
  const [search, setSearch] = useState('car');
  const [results, setResults] = useState([])
  function getData() {
    const key = '9d990524e078f1778f0d08400d69e3ed';
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${search}&per_page=24&format=json&nojsoncallback=1`

    fetchData(url).then(data => setResults(data.photos.photo))
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='w-full flex flex-col'>
      <h1 className='flex justify-center text-7xl mt-20 mb-10'>
        SnappShot
      </h1>
      
      <div className='py-8 flex justify-center gap-4'>
        <input type="text" name="" id="" placeholder='Search' className='w-80 px-8  h-9 border rounded-md shadow'
          onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className='flex justify-center mb-14  '>
        <ul className='flex gap-10'>
        {categorias.map((categoria,index)=>(
          <Boton
          key = {index} 
          nombre ={categoria}
          />
        ))

        }
        
        </ul>
        

      </div>

      <div className='flex flex-wrap gap-8'>
        {results &&
          results.map((rs) =>
            <Photo key={rs.id} image={rs} />
          )}
      </div>
    </div>
  )
}
function Boton({nombre}){
  return(
    <li>
      <button className='boton text-white font-bold w-20'>
          {nombre}
        </button>
    </li>
    
  )
}

function Photo({ image: { farm, server, id, secret, title } }) {
  return (
    <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`} alt={title} />
  )
}