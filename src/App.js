import logo from "./logo.svg";
import "./App.css";
import AnimalList from "./components/AnimalList";
import AddAnimal from "./components/AddAnimal";
import { useState } from "react";

function App() {
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
    alert(newAnimals);
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
    <div className="App">
      <header className="App-header">
        <AddAnimal addAnimal={addAnimal} sectorList={sectorList} />
        <AnimalList
          animalList={animalList}
          onRemove={onRemove}
          moveToTop={moveToTop}
        ></AnimalList>
        <div>
          <ol>
            {sectorListCopy.map((sector) => {
              return (
                <li>
                  {sector}
                  <button
                    onClick={() => {
                      checkAnimals(sector, animalList);
                    }}
                  >
                    Check Animals
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </header>
    </div>
  );
}

export default App;
