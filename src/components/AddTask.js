function AddTask(){
    return(
        <form>
            <input type="text" placeholder="enter task"/>
            <input type="text" placeholder="enter time"/>
            <input type="text" placeholder="enter date"/>
            <textarea placeholder="enter notes"></textarea>
            <button className="btn">DONE</button>
        </form>
    )
}
export default AddTask;