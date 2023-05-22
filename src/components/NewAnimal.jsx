import { useParams } from "react-router-dom";
const NewAnimal = ({ animalsList }) => {
  const { id } = useParams();
  const animal = animalsList[id];
  console.log(animal);
  return (
    <div>
      <p>name : {animal.name}</p>
      <p>species: {animal.species}</p>
      <p>birth: {animal.birthDate}</p>
    </div>
  );
};

export default NewAnimal;
