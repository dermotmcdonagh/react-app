import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";


function App() {
 const [alertvisible, setAlertVisibility] = useState(false);

  return <div>
   {alertvisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
   <Button color="danger" onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>;
}
export default App;