import "./App.css";
import { useEffect, useState } from "react";
import {
  getUser,
  handleDelete,
  handleEdit,
  handleInput,
  handleSubmit,
} from "./service/users";
import List from "./components/List";
import Crate from "./components/Create";

const App = () => {
  //materi fetching data
  const [data, setData] = useState(null);

  //materi create data
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  //indikator
  const [fetchStatus, setFetchStatus] = useState(true);

  //indikator
  const [currentId, setCurrentId] = useState(-1);

  useEffect(() => {
    //fetch data dengan kondisi
    if (fetchStatus === true) {
      getUser(setData);
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <>
      <p>FORM DATA</p>
      {/* form data */}
      <List
        data={data}
        handleEdit={(e) => handleEdit(e, setCurrentId, setInput)}
        handleDelete={(e) => handleDelete(e, setFetchStatus)}
      />

      <Crate
        handleSubmit={(e) =>
          handleSubmit(
            e,
            input,
            currentId,
            setFetchStatus,
            setCurrentId,
            setInput
          )
        }
        handleInput={(e) => handleInput(e, setInput, input)}
        input={input}
      />
    </>
  );
};
export default App;
