
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  let foodItems=[];
  // let foodItems=["Dal","Green VegeTable","Roti","Salad","Milk","Ghee"]
// if(foodItems.length==0){
//   return <h3>I am still Hungry</h3>
// }

let emptyMessage=foodItems.length==0 ? <h3>I am Still hungry</h3>:null
  return (
    <>
    <h1>Healthy Food</h1>
    {/* {emptyMessage} */ foodItems.length==0 &&<h3>I am Still hungry</h3>}
    <ul className="list-group">
      {foodItems.map(item=> <li key={item}className="list-group-item">{item}</li>)}

 
</ul>
    </>
  )
}

export default App
