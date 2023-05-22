const Animal = ({e,onRemove,moveToTop,index}) =>{
       
            return (
                <div>
                    <tr>
                <td>{e.name} </td>
                <td>{e.species} </td>
                <td>{e.birthDate} </td>
                <td>{e.sector} </td>
                <td><button onClick={()=> onRemove(e.name)}>Remove</button></td>
                <td><button onClick={()=> moveToTop(index)}>Move</button></td>
                </tr>
                </div>
             
                 )
}
export default Animal