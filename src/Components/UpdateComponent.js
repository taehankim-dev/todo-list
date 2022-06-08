import React, { useState } from 'react';
import './Todo.scss';

function UpdateComponent(props){
  let data = props.detailData;
  const [id] = useState(data.id);
  const [desc, setDesc] = useState(data.desc);
  return(
    <>
      <p>Update To Do</p>
      <form action="/update_process" method="post" onSubmit={(e)=>{
        e.preventDefault();
        props.onSubmit(id, desc)
      }}>
        <textarea
          value={desc}
          placeholder="할일을 입력해주세요."
          onChange={(e)=>{
            e.preventDefault();
            setDesc(e.target.value)
          }}
        />
        <input className="buttonCss" type="submit" value="Update"/>
      </form>
    </>
  )
}

export default UpdateComponent;