import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TestRoutes from "./components/TestRoutes";
import Test123 from "./components/Test123";
import NewAnimal from "./components/NewAnimal";
import NewAnimalsList from "./components/NewAnimalList";
import AddAnimal from "./components/AddAnimal";
import { useState } from "react";
import Sectors from "./components/Sectors";
import Sector from "./components/Sector";

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
    alert(
      newAnimals.map((animal) => {
        return animal.name;
      })
    );
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
    <Routes>
      <Route
        path=":id"
        element={
          <Sector
            sectorListCopy={sectorListCopy}
            animalList={animalList}
            checkAnimals={checkAnimals}
          ></Sector>
        }
      ></Route>
      <Route
        path="sectors"
        element={
          <Sectors
            sectorListCopy={sectorListCopy}
            animalList={animalList}
            checkAnimals={checkAnimals}
          ></Sectors>
        }
      ></Route>
      <Route
        path="addAnimal"
        element={
          <AddAnimal addAnimal={addAnimal} sectorList={sectorList}></AddAnimal>
        }
      ></Route>
      <Route
        path="animals"
        element={<NewAnimalsList animalsList={animalList} />}
      ></Route>
      <Route
        path="animals/:id"
        element={<NewAnimal animalsList={animalList} />}
      ></Route>
      <Route index element={<TestRoutes />}></Route>
      <Route path="test123" element={<Test123 />}></Route>
    </Routes>
  );
}

export default App;
