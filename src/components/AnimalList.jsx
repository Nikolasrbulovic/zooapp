import { useState } from "react";
function AnimalList({animalList,onRemove,moveToTop}){
   
   
return (
   <div> <table>
   <thead>
       <tr>
       <th>Ime zivotinje </th>
       <th>Vrsta zivotinje </th>
       <th>datum rodjenja </th>
       <th>Sector</th>
       <th>remove</th>
       </tr>
   </thead>
   <tbody> 
   {animalList.map((e,index)=>{
       return ( 
        <tr key={index}>
           <td>{e.name}</td>
           <td>{e.species}</td>
           <td>{e.birthDate}</td>
           <td>{e.sector}</td>
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