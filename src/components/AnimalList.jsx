import Animal from "./Animal"
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
  
</table>
    <Animal animalList={animalList} onRemove={onRemove} moveToTop={moveToTop}></Animal>
   </div>

        
        
)
}

export default AnimalList