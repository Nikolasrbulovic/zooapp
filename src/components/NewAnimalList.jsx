import { Link } from "react-router-dom";

const NewAnimalsList = () => {
  const animals = ["cat", "dog", "bear", "fish"];
  return animals.map((animal, id) => {
    return (
      <div>
        <p>{animal}</p>
        <Link to={`${id}`}>
          <button>Show Animal</button>
        </Link>
      </div>
    );
  });
};
export default NewAnimalsList;
