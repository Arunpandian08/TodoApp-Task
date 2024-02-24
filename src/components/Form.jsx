import React, { useState } from 'react';
import './style/form.css'
const Form = ({ addTodo }) => {
    // managing state for title and description to update card
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const addButtonCall = () => {
        addTodo(title, description)
        setTitle('');
        setDescription('');
    }
    return (
        <div className='form'>
            <div className="input-group  mb-3">
                <input type="text" className="form-control" placeholder=" Todo Title ..." aria-label="name" value={title} onChange={e => setTitle(e.target.value)} required />
                <input type="text" className="form-control" placeholder="Todo Description.." aria-label="text" value={description} onChange={e => setDescription(e.target.value)} required />
                {/* onclick event to add todo list  */}
                <button className='addBtn' onClick={() => { addButtonCall(title, description) }}>
                    <span className="transition"></span>
                    <span className="gradient"></span>
                    <span className="label">Add</span>
                </button>
            </div>
        </div>
    );
};

export default Form;