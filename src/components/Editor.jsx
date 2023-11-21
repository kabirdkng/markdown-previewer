import React from 'react'

const Editor = ({ content, handleChange }) => {
  return (
    <div>
        <textarea className = " border border-3 border-slate-950 rounded-md w-5/6 min-h-100 p-4"
                 value={ content } onChange={ handleChange } />
    </div>
  )
}

export default Editor