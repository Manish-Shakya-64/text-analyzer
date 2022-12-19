
import "./App.css";
import Navbar from "./components/Navbar";
import TextareaForm from "./components/TextareaForm";



function App() {
  const obj =  {
    Title: "Created By Manish Shakya",
    Home:"Home ",
    Link:"Contact"
  }
  return (
    <>
    <Navbar title = {obj.Title} home = {obj.Home} link={obj.Link}/>
    {/* <Navbar/> */}
    <TextareaForm title="Enter text below"/>
    </>
  );
}




export default App;
