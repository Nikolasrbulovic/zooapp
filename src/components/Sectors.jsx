import { Link } from "react-router-dom";
import Sector from "./Sector";

const Sectors = ({ sectorListCopy, animalList, checkAnimals }) => {
  return (
    <div>
      {sectorListCopy.map((sector, id) => (
        <Sector sector={sector} id={id}></Sector>
      ))}
    </div>
  );
};
export default Sectors;
