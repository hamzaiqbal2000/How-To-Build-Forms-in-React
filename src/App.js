import React, { useReducer, useState } from "react";
import "./App.css";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      apple: "",
      count: 0,
      name: "",
      "gift-wrap": false,
    };
  }

  return { ...state, [event.name]: event.value };
};

function App() {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, { count: 100 });

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
      setFormData({
        reset: true,
      });
    }, 3000);
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
            <input
              name="name"
              onChange={handleChange}
              value={formData.name || ""}
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="">
            <p>Apples</p>
            <select
              name="apple"
              id=""
              onChange={handleChange}
              value={formData.apple || ""}
            >
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
              value={formData.count || ""}
            />
          </label>
          <label htmlFor="">
            <p>Gift Wrap</p>
            <input
              type="checkbox"
              name="gift-wrap"
              onChange={handleChange}
              value={formData["gift-wrap"] || false}
            />
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
