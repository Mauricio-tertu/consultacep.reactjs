import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './style.css'

import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

   async function handleSearch(){
    

    if(input ==='') {
      alert ("Por favor Digitar CEP!")
      return;
    }
try { 
const response = await api.get('${input}/json');
setCep(response.data);
setInput ("");


}catch{
alert("ops não reconhecemos esse cep");
setInput ("");
}

  }

  return (
    <div className="container">
      <h1 className='title'>Consulta CEP </h1>
      <h5 className='re'>Com React</h5>
      <div className='containerInput'>
        <input 
        type="text"
        placeholder='Digite o seu cep aqui... '
        value={input}
        onChange={(e) => setInput(e.target.value) }
        />

        <butoom className="buttonSearch" onClick={handleSearch} >
          <FiSearch size={35} color="#000"/>
        </butoom>
      </div>

     
      {Object.keys(cep).length > 0 && (
 <main className='main' >
 <h2> CEP: {cep.cep} </h2>

 <span> {cep.logradouro} </span>
 <span>Complemento: {cep.complemento}  </span>
 <span> {cep.bairro} </span>
 <span> {cep.localidade} - {cep.uf} </span>
</main>
 )}
     </div>
 );
}

export default App;
