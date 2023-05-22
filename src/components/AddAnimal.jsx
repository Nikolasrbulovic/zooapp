import DatePicker from "react-date-picker"
import { useState } from "react";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
const AddAnimal = ({addAnimal,sectorList}) => {
   
    const [dateValue, onDateChange] = useState(new Date());
    const [name, setName] = useState()
    const [species, setSpecies] = useState()
    const [select, setSelect] = useState()
    const sectorCopy = sectorList

   
    const submitHandler = (e) =>{
       
        e.preventDefault();

        
       addAnimal({
        name:name,
        species: species,
        birthDate: dateValue.toDateString(),
        sector: select
       })
    }
 
    
    return(
        <form action="submit" id="animalForm" onSubmit={submitHandler}>
            <div>
                <label >
                    Name :   
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                </label>
            </div>
            <div>
            <select name="animals" id="animals" form="animalForm" onChange={(e)=>{setSelect(e.target.value)}}>
           { sectorCopy.map((e)=>{
                return(
                    <option value={e}>{e}</option>
                )
           })}
            </select>
            </div>
      
            <div>
                <label >
                    species :   
                    <input type="text" name="species" value={species} onChange={(e) => setSpecies(e.target.value)}></input>
                </label>
            </div>
           
            <div className="react-date-picker">
                <label >
                    Date : 
                    <DatePicker onChange={onDateChange}   className="date-picker" value={dateValue} closeCalendar={true} autoFocus={true} />
                </label>
            </div>
            <input type="submit" value="Submit" />
           
            
        </form>
       
    )
}
export default AddAnimal