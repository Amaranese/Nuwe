import { Wrapper } from "../styled-components/Wrapper";
import Table from "../table/Table";

const App = () => {
  const headers = [
    {value: "Title 1", width: "30vw"},
    {value: "Title 2", width: "20vw"}
  ]
  const list = [
    {first:"1", second:"5"},
    {first:"7", second:"2"},
    {first:"3", second:"4"}
  ]
  return (
    <Wrapper w = "100vw" h = "100vh" justify align>
      <Table headers = {headers} list = {list}>

      </Table>
    </Wrapper>
  );
}

export default App;
