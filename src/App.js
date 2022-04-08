import React, { useState } from "react";
import "./App.css";

function App() {
  const [submitting, setSubmitting] = useState(false);

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
      {submitting && <div> Submitting Form...</div>}

      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="">
            <p>Name</p>
            <input name="name" />
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
