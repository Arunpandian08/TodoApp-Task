
const MenuBar = ({ handleFilter, filterStatus }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <h2 className="navbar-brand" >My Todo List</h2>
                    <div>
                        <label className='list-label' htmlFor="text"><h5>Status Filter: <span> {' '}</span></h5> </label>
                        <select name="statusFilter" value={filterStatus} class={(filterStatus === "completed") ? "bg-success" : "bg-danger"} onChange={e => handleFilter(e.target.value)} >
                            <option value='all'>All</option>
                            <option value="completed">Completed</option>
                            <option value="in completed">In Completed</option>
                        </select>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MenuBar;