const Sector = ({sectorListCopy,animalList,checkAnimals}) =>{
 return (
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
 )
}
export default Sector