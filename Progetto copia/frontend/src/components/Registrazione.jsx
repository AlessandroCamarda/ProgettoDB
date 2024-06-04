import { useState } from 'react';
import './Registrazione.css';
import axios from 'axios'


function Registrazione(){

  const [username, setUsername] = useState();
  const [codes, setCodes] = useState();
  const [email, setEmail] = useState();


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {username,codes,email })
    .then(result => console.log(result))
    .catch(err=>console.log(err))          

  }

    return(
      <div className='login-container'>
      <form action="POST" className="login-form"  onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required placeholder='Inserisci Username'
        onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" required placeholder='Inserisci Email'
        onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="codes">Codes</label>
        <input type="text" id="codes" name="codes" required placeholder='Inserisci Codes'
        onChange={(e) => setCodes(e.target.value)}/>
      </div>
      
      
      <button type="submit" className="login-button" >Registrati</button>
    </form>
      </div>
      
    );
}

export default Registrazione;