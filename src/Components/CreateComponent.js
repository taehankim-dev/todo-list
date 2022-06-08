import React, { useState } from 'react';

function CreateComponent(props){
  const [desc, setDesc] = useState('')
  return(
    <>
      <p>Create To Do</p>
      <form action="/create_process" method="post" onSubmit={(e)=>{
        e.preventDefault();
        props.onSubmit(desc)
      }}>
        <textarea
          value={desc}
          placeholder="할일을 입력해주세요."
          onChange={(e)=>{
            e.preventDefault();
            setDesc(e.target.value)
          }}
        />
        <input className="buttonCss" type="submit" value="Save"/>
      </form>
    </>
  )
}

export default CreateComponent;