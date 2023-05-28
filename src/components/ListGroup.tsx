import { useState } from "react";

interface props{
    heading:string;
    items:string[];
    onSelectItem: (item: string) => void;
}
function ListGroup(prop: props){
    const[selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
        <h1>{prop.heading}</h1>
        <ul className="list-group">
            {prop.items.map((item, index) =>(
                <li 
                    className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                    key = {item}
                    onClick= {() => 
                        {
                            setSelectedIndex(index);
                            prop.onSelectItem(item);
                        }
                    }
                    >
                        {item}
                </li>
            ))}
        </ul>
        </>
    );
}

export default ListGroup;
