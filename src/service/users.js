import axios from "axios";
import api from "../helper/api";

// export const getUser = async (params = "") => {
//   const res = await api.get(`users?${params}`);
//   console.log(res);
//   return res;
// };

export async function getUser(setData, params = "") {
  await api
    .get(`users?${params}`)
    .then((res) => {
      setData([...res.data]);
    })
    .catch((err) => {
      alert(JSON.stringify(err));
    });
}

export const handleInput = (event, setInput, input) => {
  let name = event.target.name;
  let value = event.target.value;

  setInput({ ...input, [name]: value });
};

//handling submit
export async function handleSubmit(
  event,
  input,
  currentId,
  setFetchStatus,
  setCurrentId,
  setInput
) {
  event.preventDefault();

  let { name, email } = input;

  if (currentId === -1) {
    //create data
    await api
      .post(`users`, {
        name,
        email,
      })
      .then((res) => {
        setFetchStatus(true);
        alert("success");
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  } else {
    // update data
    await api
      .put(`users/${currentId}`, {
        name,
        email,
      })
      .then((res) => {
        setFetchStatus(true);
        alert("success");
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  }

  //balikin indikator ke -1
  setCurrentId(-1);

  //clear input setelah create data
  setInput({
    name: "",
    email: "",
  });
}

// Delete
export async function handleDelete(event, setFetchStatus) {
  let idData = parseInt(event.target.value);

  await api
    .delete(`users/${idData}`)
    .then((res) => {
      setFetchStatus(true);
      alert("success");
    })
    .catch((err) => {
      alert(JSON.stringify(err));
    });
}

export async function handleEdit(event, setCurrentId, setInput) {
  let idData = parseInt(event.target.value);

  setCurrentId(idData);

  await api
    .get(`users/${idData}`)
    .then((res) => {
      let data = res.data;

      setInput({
        name: data.name,
        email: data.email,
      });
    })
    .catch((err) => {
      alert(JSON.stringify(err));
    });
}

export const onSubmit = (event, userCreate) => {
  event.preventDefault();
  axios
    .post(`${process.env.REACT_APP_BASE_URL}users`, userCreate)
    .then((res) => {
      alert("success");
    })
    .catch((err) => {
      alert(JSON.stringify(err));
    });
};

export const onChange = (event, setUserCreate) => {
  console.log(event);
  setUserCreate({ [event.target.name]: event.target.value });
};

// export const getUser = async (params = "") => {
//   const res = await axios.get(`http://localhost:3004/users?${params}`);
//   console.log(res);
//   return res;
// };
