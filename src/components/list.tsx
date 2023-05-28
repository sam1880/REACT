import { useState } from "react";

function List(){
    let items = ['london','paris']
    const[selectedIndex, setSelectedIndex] = useState(-1);
    return( 
    <ul className = "list-group">
        {items.map((item, index) =>(
            <li
            className = {selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key = {index}
            onClick = {()=> {setSelectedIndex(index)}}
            >
                {item}
            </li>
        ))}
    </ul>
    );
}
export default List;