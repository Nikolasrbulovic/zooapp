
import Sector from "./Sector";
import { ListGroup } from "react-bootstrap";

const Sectors = ({ sectorListCopy}) => {
  return (
    <ListGroup  className="w-25" variant="flush">
      {  sectorListCopy.map((sector, id) => {
    return (
      <ListGroup.Item  className="d-flex">
        <Sector sector={sector} id={id}></Sector>
      </ListGroup.Item>
    )
  })
  }
    </ListGroup>
  )
};
export default Sectors;

