import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sector = ({ sector, id }) => {
  return (
    <div className="d-flex flex-grow-1 mr-3 justify-content-between">
        <div>
          <li>
          Ime sectora : {sector}
          </li>
        </div>
        <div>
          <Link to={`${id}`}>
          <Button>Check Animals</Button>
          </Link>
        </div>
      
    </div>
   
  );
};
export default Sector;


