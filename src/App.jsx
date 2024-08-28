
import './App.css'
import Title from "./Title.jsx"
import Product from "./Product.jsx"
import Producttab from "./Producttab.jsx"
import MsgBox from './Msgbox.jsx'
function App() {
  return (
    <>
      <MsgBox userName="jashan" textColor="blue" />
      <Producttab />
    </>
  );


}

export default App
