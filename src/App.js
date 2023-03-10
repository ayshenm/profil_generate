import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [profilName,setProfilName]= useState("");
  const [profilCell,setProfilCell]= useState("");
  const [profilImage,setProfilImage]= useState("");
  const [profilEmail,setProfilEmail]= useState("");

  const profilData = async ()=>{
    try{
      const response = await axios.get("https://randomuser.me/api");
      console.log(response);
      setProfilCell(response.data.results[0].cell);
      setProfilImage(response.data.results[0].picture.large);
      setProfilEmail(response.data.results[0].email);
      setProfilName(`${response.data.results[0].name.first} ${response.data.results[0].name.last}`);

    }catch(error){
      console.log("error");
    }
  }

  return (
    <div className="App">
      <div className='profileContainer'>
        <img src={profilImage} alt=""/>
        <h1>{profilName}</h1>
        <p>{profilEmail}</p>
        <p>{profilCell}</p>



      <button onClick={profilData}>click for new profile</button>

      </div>
      
     
    </div>
  );
}

export default App;
