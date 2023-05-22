const Animal = ({animalList,onRemove,moveToTop}) =>{
    return (
        <tbody> 
        {animalList.map((e,index)=>{
            return ( 
             <tr key={index}>
                <td>{e.name}</td>
                <td>{e.species}</td>
                <td>{e.birthDate}</td>
                <td>{e.sector}</td>
                <td><button onClick={()=> onRemove(e.name)}>Remove</button></td>
                <td><button onClick={()=> moveToTop(index)}>Move</button></td>
            </tr>
                 )
             })}
        </tbody>
    )
}
export default Animal