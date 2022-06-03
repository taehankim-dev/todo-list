import React, { useState } from 'react';
import DetailTodo from './DetailTodo';
import './Todo.scss';

function Todo(props){
  const [todos, setTodos] = useState([
    {id : 1, desc : '오늘의 할일은 Lorem ipsum sososo'},
    {id : 2, desc : '설명'},
    {id : 3, desc : '설명'},
  ])

  let todoList = [];
  let descLength = 50;
  let max_length_id = todos.length;

  const [detailData, setDetailData] = useState([]);


  if(todos.length > 0){
    for(let i = 0; i < todos.length; i++){
      todoList.push(
        <li data-id={todos[i].id} key={todos[i].id} onClick={(e)=>{
          setDetailData(todos[i])
        }}>
          {todos[i].desc.length > descLength ? todos[i].desc.slice(0, todos[i].desc.length-1) + "..." : todos[i].desc}
        </li>
      )
    }
  } else {
    todoList.push(<li>할 일 목록이 없습니다.</li>)
  }
  return (
    <>
      <button className="goHome" onClick={(e)=>{
        e.preventDefault()
        props.onClickEvent()
      }}> Home </button>
      <div className="listWrap">
        <p className="listTitle">Todo List</p>
        <ul>
          {todoList}
        </ul>
      </div>
      <div className="listWrap detailWrap">
        <DetailTodo detailData={detailData} onChange={(clickBtn, data)=>{
          console.log(clickBtn, data)
          if(clickBtn === 'plus'){
            max_length_id += 1;
            let todo = todos.filter((data, idx, arr) => {
              return arr.findIndex((item) =>
                item.id === idx+1 && item.desc === data.desc
              ) === idx
            })
            setTodos(todo)
          }
        }}/>
      </div>
    </>
  )
}

export default Todo;