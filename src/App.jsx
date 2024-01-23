import Great from "./sum";
function App(){
  let card =[]
  for (let i =0; i<9;i++)
  card.push(
    <div className="card mt-4" style={{width: "18rem"}}>
  <img src="./a.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Mobile Phone</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary"onClick={Great}>Buy</a>
  </div>
</div>
  )
  return (
    <>
    <h1>Usman khan</h1>
    <div className="container my_card">
        {card}

</div>
</>

  )
}
export default App;