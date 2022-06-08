import React, { useState } from 'react';

import UpdateComponent from './UpdateComponent';
import CreateComponent from './CreateComponent';
import './Todo.scss';

function renderContent(mode){
  let leftSide = document.getElementsByClassName('todoWrap')[0];
  let rightSide = document.getElementsByClassName('todoWrap')[1]

  if(mode === "read"){
    leftSide.classList.add('todoWrap_full');
    rightSide.style.display="none";

    if(leftSide.classList.contains('todoWrap_dis')){
      leftSide.classList.remove('todoWrap_dis');
    }
  } else {
    leftSide.classList.remove('todoWrap_full');
    leftSide.classList.add('todoWrap_dis');
    rightSide.classList.add('todoWrap_dis');
    rightSide.style.display="block";
  }
}

function Todo(props){
  console.log(props)
  let _component = null;
  let _todoList = [];

  const [mode, setMode] = useState('read');
  const [todos, setTodos] = useState([
    {id : 1, desc : '할일할일'},
    {id : 2, desc : '할일할일'},
    {id : 3, desc : '할일할일'},
  ]);
  const [detailData, setDetailData] = useState([])

  let maxId = todos.length;

  //List Component First Render
  setTimeout(()=>{
    renderContent(mode);
  })

  if(mode === 'create'){
    _component = <CreateComponent onSubmit={(desc)=>{
      maxId++;
      let newTodos = todos.concat({id : maxId, desc : desc})
      setTodos(newTodos);
      setMode('read');
      renderContent();
    }}/>
  } else if(mode === 'update'){
    _component = <UpdateComponent detailData={detailData} onSubmit={(id, desc)=>{
      let copyTodos = Array.from(todos);
      console.log(id, desc)
      for(let i = 0; i < copyTodos.length; i++){
        if(copyTodos[i].id === id){
          copyTodos[i].id = id; 
          copyTodos[i].desc = desc;
          setTodos(copyTodos);
          setMode('read');
          renderContent();
          break;
        }
      }
    }} />
  } else {
    _component = null;
  }

  if(todos.length !== 0){
    for(let i = 0; i < todos.length; i++){
      _todoList.push(
        <li key={todos[i].id} onClick={(e)=>{
          setMode('update');
          setDetailData(todos[i]);
        }}>{todos[i].id}. {todos[i].desc}</li>
      );
    }
  } else {
    _todoList.push(
      <li>목록이 없습니다. 목록을 추가해주세요!</li>
    )
  }

  console.log(mode, "mode!!")
  return (
    <>
      <div className="todoWrap">
        <p>Todo Lists
          <button className='buttonCss' onClick={(e)=>{
            e.preventDefault();
            setMode('create');
          }}> &#43; </button>
        </p>
        <ul className="todoListWrap">
          {_todoList}
        </ul>
      </div>
      <div className="todoWrap">
        {_component}
      </div>

      <button className='buttonCss homeBtn' onClick={()=>{
        props.onClickEvent();
      }}>Home</button>
      
    </>
  )
}

export default Todo;