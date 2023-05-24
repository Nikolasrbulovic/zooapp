import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

const NewAnimalsList = ({animalsList}) => {
  console.log(animalsList)
  return (
    <ListGroup  className="w-25" variant="flush">
      {  animalsList.map((animal, id) => {
    return (
      <ListGroup.Item  className="d-flex justify-content-between align-items-start">
        <div className="d-flex align-items-center h-100">
         {animal.name}
        </div>
        <Link to={`${id}`}>
          <Button>Show Animal</Button>
        </Link>
      </ListGroup.Item>
    )
  })
  }
    </ListGroup>
  )
  
  

};
export default NewAnimalsList;
