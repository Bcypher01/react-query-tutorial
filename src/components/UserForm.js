import React, { useState } from "react";
import { useMutation } from "react-query";
import * as api from "../usersApi";

const UserForm = ({ user }) => {
  const [fields, setFields] = useState({ ...user });
  const { isLoading, mutate } = useMutation(api.updateUser);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(fields);
    mutate(fields);
  };

  return (
    <div style={{ paddingTop: 20 }}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            name="name"
            type="text"
            value={fields.name}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: 20 }}
          />
        </label>
        <label>
          Details:{" "}
          <textarea
            name="details"
            value={fields.details}
            onChange={handleChange}
            style={{ width: "100%", height: 100 }}
          />
        </label>
        <button type="submit">{isLoading ? "Saving..." : "Save"}</button>
      </form>
    </div>
  );
};

export default UserForm;
