function AllTask({task}) {
    return(
        <div>
            <h1 className="mytask">MY TASKS</h1>
            {task.map((e) =>(
                <div className="card">
                    <h4>{e.task}</h4>
                    <p>{e.time}</p>
                    <p>{e.date}</p>
                </div>
            ))}
        </div>
    )
}
export default AllTask;