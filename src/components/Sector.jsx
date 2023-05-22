import { Link } from "react-router-dom";

const Sector = ({ sector, id }) => {
  return (
    <li>
      Ime sektora: {sector}
      <Link to={id}>
        <button>Check Animals</button>
      </Link>
    </li>
  );
};
export default Sector;
