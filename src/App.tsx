import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup"
import List from "./components/list"
import Button from "./components/Button";

function App(){
  let items = ["paris","london",'africa','madagascar']
  let heading ="places"
  const [alertVisibility, setAlertVisibility] = useState(false)

  return (
    <div>
      {alertVisibility && <Alert onClose={()=> setAlertVisibility(false)}>this is a alert</Alert>}
      <Button onClick={()=> setAlertVisibility(true)}>click me</Button>
      <ListGroup items={items} heading={heading} onSelectItem = {() => {setAlertVisibility(true)}}></ListGroup>
      <List items = {items}></List>
    </div>
  );
}

export default App;