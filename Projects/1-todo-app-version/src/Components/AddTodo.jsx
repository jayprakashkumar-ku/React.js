function AddTodo(){
  return(
    <>
    <div class="row munna">
    <div class="col-6"><input type="text"placeholder="Enter todo Here" /></div>
    <div class="col-4"><input type="date" /></div>
    <div class="col-2"><button type="button" class="btn btn-success munna-btn">Delete</button></div>
  </div>
    </>
  )
}
export default AddTodo;