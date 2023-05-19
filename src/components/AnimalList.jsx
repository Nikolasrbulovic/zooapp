import { useState } from "react";
function AnimalList(){
    const date = new Date();
    const animalList = [{name : 'cat', species: "mamal", birthDate: null},
    {name : 'dog', species: "mamal", birthDate: date.toDateString()},
    {name : 'frog', species: "mamal", birthDate: date.toDateString()},
    {name : 'turtle', species: "mamal", birthDate:date.toDateString()}]

    const [animals , setAnimals] = useState(animalList)

    const onRemove = (name) => {
        
        setAnimals((prev) => 
            prev.filter(animal => animal.name !== name)
        )
    }
    const moveToTop = (index) =>{
        
        const topAnimal = animals[index]
        setAnimals((prev)=>{
           return [topAnimal, ...prev.filter((item, id)=> id !== index)]
        })
    }
   
   
return (
   <div> <table>
   <thead>
       <tr>
       <th>Ime zivotinje</th>
       <th>Vrsta zivotinje</th>
       <th>datum zuvitubhe</th>
       <th>remove</th>
       </tr>
   </thead>
   <tbody> 
   {animals.map((e,index)=>{
       return ( 
        <tr key={index}>
           <td>{e.name}</td>
           <td>{e.species}</td>
           <td>{e.birthDate}</td>
           <td><button onClick={()=> onRemove(e.name)}>Remove</button></td>
           <td><button onClick={()=> moveToTop(index)}>Move</button></td>
       </tr>
            )
        })}
   </tbody>
</table>

   </div>
        
        
)
}

export default AnimalList