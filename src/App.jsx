import { useState } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";



function App() {
  const [content, setContent] = useState('#HI');

  const handleChange = (e) => {
    setContent(e.target.value)
    console.log(content)
  }
  return (
    <div className="flex flex-col justify-center align-middle text-center w-full">
      <header className="text-4xl py-4 my-3">Markdown Previewer</header>
      <Editor content = { content } handleChange = { handleChange } />
      <Previewer content= { content }/>
    </div>
  );
}

export default App;
