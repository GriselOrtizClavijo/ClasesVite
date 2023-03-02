import { useState } from "react";

const FuncComponent = () => {

    const [persona, setPersona] = useState({
        name:'Frank',
        age: 37,
        country: 'Colombia'
    })
   

    const chageName = () => {
       if (persona.name === 'Frank') setPersona({name:'Grisel', age: 36})
        else setPersona({... persona, name:'Frank', age: 37})

    }   

    return (
        <div>
           <h3>Tu nombre es {persona.name}</h3>  
            <h3>Tu edad es {persona.age} años</h3>
           <button onClick={chageName}>Cambiar Nombre</button>
        </div>
    )
}

export default FuncComponent;