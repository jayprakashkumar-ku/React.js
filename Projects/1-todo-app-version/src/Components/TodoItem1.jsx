function AddTodoitem1(){
  let todoDate ='19/04/2025';
  let todonm='Buy Milk'
  return(
   
   
    <>
    <div class="row munna">
    <div class="col-6">{todonm}</div>
    <div class="col-4">{todoDate}</div>
    <div class="col-2"><button type="button" class="btn btn-danger munna-btn">Delete</button></div>
  </div>
    </>
  )
}
export default AddTodoitem1;