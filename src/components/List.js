import React from "react";

function List({ data, handleEdit, handleDelete }) {
  return (
    <div>
      <ul>
        {data !== null &&
          data.map((res) => {
            return (
              <>
                <li>
                  {res.name} | {res?.email} &nbsp;
                  <button onClick={handleEdit} value={res.id}>
                    edit
                  </button>
                  <button onClick={handleDelete} value={res.id}>
                    delete
                  </button>
                </li>
              </>
            );
          })}
      </ul>
    </div>
  );
}

export default List;
