import React, { useState } from 'react';
import './style/TodoCards.css'

const TodoDsiplay = ({ item, index, deleteButton, statusUpdate, handleEdit }) => {
    const [edit, setEdit] = useState(true);
    const [newTitle, setNewTitle] = useState(item.title);
    const [newDescription, setNewDescription] = useState(item.description)

    return (
        <>
            {(edit) ?
                (
                    <div className='col p-2' key={index}>
                        <div className="card h-100 ">
                            <div className="card2 p-2" >
                                <label className='mb-3' htmlFor="card-title "><h6>Title: <em> {item.title}</em></h6></label><br />
                                <label className='mb-3' htmlFor="description"><h6>Description: <em>{item.description}</em></h6></label><br />
                                <div>
                                    <label className='list-label mb-4' htmlFor="text"><h6>Status:</h6> </label>
                                    <select className="dropdown" class={(item.completed) ? "bg-success m-2 p-0" : "bg-danger m-2 p-0"} name="completion" id="task-completion" value={item.completed} onChange={(e) => { statusUpdate(e.target.value, item.id) }} >
                                        <option value={true}>Completed</option>
                                        <option value={false}>In Completed</option>
                                    </select>
                                </div>

                                <div className='row'>
                                    <button class="btn btn-primary col m-2" onClick={() => { setEdit(!edit) }} >
                                        Edit
                                    </button>
                                    <button class="bin-button col m-2" onClick={() => { deleteButton(item.id) }} >
                                        <svg
                                            class="bin-top"
                                            viewBox="0 0 39 7"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <line y1="5" x2="39" y2="5" stroke="white" stroke-width="4"></line>
                                            <line
                                                x1="12"
                                                y1="1.5"
                                                x2="26.0357"
                                                y2="1.5"
                                                stroke="white"
                                                stroke-width="3"
                                            ></line>
                                        </svg>
                                        <svg
                                            class="bin-bottom"
                                            viewBox="0 0 33 39"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <mask id="path-1-inside-1_8_19" fill="white">
                                                <path
                                                    d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                                                ></path>
                                            </mask>
                                            <path
                                                d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                                                fill="white"
                                                mask="url(#path-1-inside-1_8_19)"
                                            ></path>
                                            <path d="M12 6L12 29" stroke="white" stroke-width="4"></path>
                                            <path d="M21 6V29" stroke="white" stroke-width="4"></path>
                                        </svg>
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>
                ) : (
                    <div class="col p-2" key={index}>
                        <div class="card h-100">
                            <div class="card-body">
                                <label class="m-1"><h6>Title :</h6></label><input className='editInput' type="text" placeholder={item.title} value={newTitle} onChange={e => setNewTitle(e.target.value)} /> <br />
                                <label className='m-1' htmlFor="description"><h6>Description :</h6></label> <input className='editDesInput' type="text" placeholder={item.description} value={newDescription} onChange={e => setNewDescription(e.target.value)} />
                                <h5 class="card-text"><label class="m-1"><h6>Status :</h6></label>
                                    <select class={(item.completed) ? "bg-success m-2 p-0" : "bg-danger m-2 p-0"} name="completion" id="task-completion" value={item.completed} onChange={(e) => { statusUpdate(e.target.value, item.id) }}>
                                        <option value={true}>Completed</option>
                                        <option value={false}>In completed</option>
                                    </select></h5>

                                <div className='row'>
                                    <div className="col">
                                        <button class="saveBtn m-1" onClick={() => { handleEdit(item.id, newTitle, newDescription); setEdit(!edit) }} >
                                            <p class="text">Save</p>
                                        </button>
                                        <button className='deleteBtn' onClick={() => { deleteButton(item.id) }}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default TodoDsiplay;