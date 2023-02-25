   import React from 'react'
   import './Card.css'
   
   const NavBar = () => {
    let titulos = ['Home', 'Catálogo', 'About us', 'Contacto'] 
    
    return (
       <div  className='navegacion'>
        <ul>
            {titulos.map((titulo, index) =>  <li key={index}>{titulo}</li>)}
        </ul>
       </div>
     )
   }
   
   export default NavBar
