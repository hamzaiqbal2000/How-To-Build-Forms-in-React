import React, { useReducer, useState } from "react";
import "./App.css";

const formReducer = (state, { name, value }) => {
  return { ...state, [name]: value };
};

function App() {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, {});

  function handleChange(e) {
    const isCheckbox = e.target.type === "checkbox";

    setFormData({
      name: e.target.name,
      value: isCheckbox ? e.target.checked : e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  }

  return (
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      {submitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>:{value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="">
            <p>Name</p>
            <input name="name" onChange={handleChange} />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="">
            <p>Apples</p>
            <select name="apple" id="" onChange={handleChange}>
              <option value="">--Please choose an option</option>
              <option value="fuji">Fuji</option>
              <option value="jonathan">Jonathan</option>
              <option value="honey-crisp">Honey Crisp</option>
            </select>
          </label>
          <label htmlFor="">
            <p>Count</p>
            <input
              type="number"
              name="count"
              onChange={handleChange}
              step="1"
            />
          </label>
          <label htmlFor="">
            <p>Gift Wrap</p>
            <input type="checkbox" name="gift-wrap" onChange={handleChange} />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
//uncontrolled component - let browser handle most of the form elements - react is not setting the value
//controlled components = react is actively updating the input
