import Header from "./components/Header";
import {Button} from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import { movies } from "./components/constants/movies";
import {Card,Container} from "react-bootstrap"

function App() {
  return (
    <>
      <Header/>
      <Container className="mt-5">

     <SearchBar/>
     <div className="d-flex flex-wrap justify-content-around">
{movies.map(({title,id})=> {
return(
  <Card Key={id} className="m-3">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
      Lorem Ipsum is simply dummy text of the printing.
        </Card.Text>
        <Button variant="success">Book Movie</Button>
        <Button variant="warning">ADD TO CART</Button>
    </Card.Body>
  </Card>
)

})}
     </div>
     </Container>
    </>
  );
}

export default App;
