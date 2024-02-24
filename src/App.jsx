import React, { useEffect, useState } from 'react';
import TodoDsiplay from './components/TodoDsiplay';
import Form from './components/Form';
import MenuBar from './components/MenuBar';
import './App.css'


const App = () => {
  const [todoValue, setTodoValue] = useState([]);
  const [filteredTodo, setFilteredTodo] = useState(todoValue);
  const [filterStatus, setFilteredStatus] = useState("all");

  //adding new todos in array of objects
  const addTodo = (title, description) => {
    let newData = {
      id: todoValue.length,
      title: title,
      description: description,
      completed: false
    }
    setTodoValue([...todoValue, newData]) // updating state todo values with new todo's
  }

  // delete todo's with their respected id's 
  const deleteButton = (deleteIndex) => {
    setTodoValue(todoValue.filter((item, index) => item.id != deleteIndex))
  }

  // Todo status updating function 
  const statusUpdate = (status, id) => {
    setTodoValue(todoValue.map((item, index) => {
      if (id == item.id) {
        if (item.completed) {
          return ({ ...item, completed: false })
        }
        else {
          return ({ ...item, completed: true })
        }
      }
      return item;
    }))
  }
  //filter status update to display current status 
  const handleFilter = (todoFilter) => {
    console.log(todoFilter + "filter status");
    setFilteredStatus(todoFilter)
  }

  // Filtered todo's are when get rendering time to display so here using useEffect hook 
  useEffect(() => {
    if (filterStatus === "all") {
      setFilteredTodo(todoValue)
    }
    else if (filterStatus === "pending") {
      setFilteredTodo(todoValue.filter((item, index) => item.completed === false))
    }
    else if (filterStatus === "completed") {
      setFilteredTodo(todoValue.filter((item, index) => item.completed === true))
    }
  }, [filterStatus, todoValue])

  //edit the added title and description in cards
  const handleEdit = (id, newTitle, newDescription) => {
    setTodoValue(todoValue.map((item, index) => {
      return ({
        ...item,
        title: (item.id === id) ? newTitle : item.title,
        description: (item.id === id) ? newDescription : item.description
      })
    }
    ))
  }


  return (
    <div className='container-fluid'>
      <div className="text-center mb-5">
        <h1 className="title">My Todo</h1>
      </div>
      {/* needed props sending here to form component // similarly,sending all need props to with their respected components  */}
      <Form todoValue={todoValue} setTodoValue={setTodoValue} addTodo={addTodo} />
      <hr />
      <MenuBar handleFilter={handleFilter} filterStatus={filterStatus} />
      <hr />
      <div className>
        <div className="row row-cols-md-2 row-cols-lg-3 g-2">
          {filteredTodo.map((item, index) => {
            return (
              <TodoDsiplay item={item} index={index} deleteButton={deleteButton} statusUpdate={statusUpdate} handleEdit={handleEdit} />
            )
          })}
        </div>
      </div>
    </div>


  );
};

export default App;