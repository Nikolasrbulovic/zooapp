import Animal from "./Animal"
function AnimalList({animalList,onRemove,moveToTop}){
   
   
return (
   <div> 
    <table>
   <thead>
       <tr>
       <th>Ime zivotinje </th>
       <th>Vrsta zivotinje </th>
       <th>datum rodjenja </th>
       <th>Sector</th>
       <th>remove</th>
       </tr>
   </thead>
  
</table>
    <tbody> 
        {animalList.map((e,index)=>{
            return(
                <div>
                 <Animal e={e} onRemove={onRemove} moveToTop={moveToTop} index={index}></Animal>

                </div>
           
            )
    })}
    </tbody>
   </div>

)
}

export default AnimalList