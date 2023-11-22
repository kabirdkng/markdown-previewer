import { useState } from "react";
import { marked } from 'marked';
import './App.css'



function App() {
  const defaultContent = "# Markdown Previewer\n ## Created By Kabir Hossain\n [My Twitter](https://twitter.com/kabir_crypto)\n [My Telegram](https://t.me/KabirCrypto)\n ![Image](https://images.freeimages.com/images/small-previews/08b/puente-sobre-el-lago-de-maraca-1567022.jpg)\n dangerouslySetInnerHTML was the ***Trickiest*** part of this _challenge_ ` <div dangerouslySetInnerHTML = {__html : content }> `\n\n\nExample Code: \n ``` \n function createMarkup() { \n  return {__html: 'First &middot; Second'}; \n } \n function MyComponent() { \n return <div dangerouslySetInnerHTML={createMarkup()} />; \n  } \n ```\n > Kabir Hossain \n  Just remember to: \n - Search, Read, Ask\n - Ask for help on the Forum (that's what worked for me.)"
  
  
  
  
  const [content, setContent] = useState(defaultContent);

  const html = marked(content, { breaks: true, sanitize : true })

  const handleChange = (e) => {
    setContent(e.target.value)
  }
  return (
    <div className="app">
      <h1 className="header">Markdown Previewer</h1>
      <div>
        <textarea id="editor" value={ content } onChange={ handleChange } />
      </div>
      <div id="preview" className="preview" dangerouslySetInnerHTML={{__html : html}}/>
    </div>
  );
}

export default App;
