import AddAnimal from "./components/AddAnimal";
import Sectors from "./components/Sectors";
import AnimalList from "./components/AnimalList";
import { useState } from "react";

const AppContainer = () =>{
    const date = new Date();
  const sectorList = ["ptice", "zmije", "medvedi", "vukovi"];
  const sectorListCopy = sectorList;
  const [animalList, setAnimalList] = useState([
    { name: "cat", species: "mamal", birthDate: null, sector: "medvedi" },
    {
      name: "dog",
      species: "mamal",
      birthDate: date.toDateString(),
      sector: "medvedi",
    },
    {
      name: "frog",
      species: "mamal",
      birthDate: date.toDateString(),
      sector: "medvedi",
    },
    {
      name: "turtle",
      species: "mamal",
      birthDate: date.toDateString(),
      sector: "medvedi",
    },
  ]);
  const checkAnimals = (sector, animalList) => {
    const newAnimals = [];
    animalList.forEach((animal) => {
      if (animal.sector == sector) {
        newAnimals.push(animal);
      }
    });
    alert(newAnimals.map((animal)=>{return animal.name}));
  };
  const addAnimal = (animal) => {
    setAnimalList([...animalList, animal]);
    console.log(animalList);
  };
  const onRemove = (name) => {
    setAnimalList((prev) => prev.filter((animal) => animal.name !== name));
  };
  const moveToTop = (index) => {
    const topAnimal = animalList[index];
    setAnimalList((prev) => {
      return [topAnimal, ...prev.filter((item, id) => id !== index)];
    });
  };
  return (
    <div>
        <AddAnimal addAnimal={addAnimal} sectorList={sectorList} />
        <AnimalList
        animalList={animalList}
        onRemove={onRemove}
        moveToTop={moveToTop}
        ></AnimalList>
        <Sectors sectorListCopy={sectorListCopy} animalList={animalList} checkAnimals={checkAnimals}></Sectors>
    </div>
    
  
  )
}
export default AppContainer;