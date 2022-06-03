import React from 'react';
import './Todo.scss';

function DetailTodo(props){
  let _todoDesc;
  let _todoData = props.detailData;
  if(_todoData.length !== 0){
    _todoDesc = _todoData.desc;
  }
  return(
    <>
      <p className="listTitle">Detail Todo</p>
      <div className="detailWrap">
        <textarea placeholder='Description' value={_todoDesc}></textarea>
      </div>
      <div className="listUpdateWrap">
        <button value="plus" onClick={(e)=>{
          e.preventDefault();
          props.onChange(e.target.value, _todoData)
        }}>Plus</button>
        <button value="update" onClick={(e)=>{
          e.preventDefault();
          props.onChange(e.target.value, _todoData)
        }}>Update</button>
        <button value="delete" onClick={(e)=>{
          e.preventDefault();
          props.onChange(e.target.value, _todoData)
        }}>Delete</button>
      </div>
    </>
  )
}

export default DetailTodo;