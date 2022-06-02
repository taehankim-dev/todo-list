import React from 'react';

function Todo(props){
  return (
    <>
      <button onClick={(e)=>{
        e.preventDefault()
        props.onClickEvent()
      }}> ← </button>
    </>
  )
}

export default Todo;