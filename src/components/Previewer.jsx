import { marked } from 'marked';


const Previewer = ({ content }) => {
    let html = marked.parse(content);
  return (
    <>
     <div dangerouslySetInnerHTML={{__html : html}}/>
    </>
    
  )
}

export default Previewer