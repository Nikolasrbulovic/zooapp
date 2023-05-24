import DatePicker from "react-date-picker"
import { useState } from "react";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { Button, Form } from "react-bootstrap";
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
        <Form className="w-50" onSubmit={submitHandler}>
            <Form.Group className="mb-3">
                <Form.Label>Name </Form.Label>
                <Form.Control id="name" type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">Select sector</Form.Label>
                <Form.Select id="sector"  onChange={(e) => {setSelect(e.target.value);}}>
                {sectorCopy.map((e) => {
                    return <option value={e}>{e}</option>;
                })}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Species </Form.Label>
                <Form.Control type="text" placeholder="Enter species" onChange={(e) => setSpecies(e.target.value)}/>
            </Form.Group>
            <div className="react-date-picker ">
                <label>
                Date :
                <DatePicker
                    onChange={onDateChange}
                    className="date-picker"
                    value={dateValue}
                    closeCalendar={true}
                    autoFocus={true}
                   
                />
                </label>
            </div>

            <div className="pt-4 text-center">
                <Button type="submit"> Submit</Button>
            </div>
           

        </Form>
       
    )
}
export default AddAnimal