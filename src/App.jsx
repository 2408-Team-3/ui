import React, { useState, useEffect } from "react";
import ErrorHeading from "./components/ErrorHeading";
import "./App.css";

import { getData } from "./services/data";

// const dummyErrors = [
//   {
//     error_id: 1,
//     name: "ReferenceError",
//     message:
//       "ReferenceError: cannot access variable 'user' before initialization",
//     created_at: "2011-10-05T14:48:00.000Z",
//     line_number: 45,
//     col_number: 23,
//     project_id: 234234,
//     stack_trace: "This will be a stack trace...",
//     handled: false,
//   },
// ];

const App = () => {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const data = await getData();
        setErrors(data);
      }
      fetchData();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  const errorHeadings = errors.map((error) => (
    <ErrorHeading
      key={error.error_id}
      name={error.name}
      message={error.message}
      created_at={error.created_at}
      project_id={error.project_id}
      line_number={error.line_number}
      col_number={error.col_number}
      stack_trace={error.stack_trace}
      handled={error.handled}
    />
  ));

  return (
    <main>
      <h1>Team 3 Error Monitor</h1>
      <h2>
        <em>Your Errors:</em>
      </h2>
      {errorHeadings}
    </main>
  );
};

export default App;
