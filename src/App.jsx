import React, { useState, useEffect } from "react";
import ErrorHeading from "./components/ErrorHeading";
import "./App.css";

// import { getData } from "./services/data";

const dummyErrors = [
  {
    id: 1,
    name: "ReferenceError",
    message: "Variable user is referenced but never declared",
    created_at: "10-21-2024 4:33p.m.",
    reason: undefined,
    status_code: undefined,
    status_message: undefined,
    method: undefined,
    url: undefined,
    line_number: 341,
    col_number: 63,
    stack_trace: "This will be a stack trace...",
  },
  {
    id: 2,
    name: "Bad request",
    message: "Bad request",
    created_at: "10-21-2024 4:45p.m.",
    reason: undefined,
    status_code: 400,
    status_message: "Bad request",
    method: "GET",
    url: "/users",
    line_number: 223,
    col_number: 14,
    stack_trace: "This will be a stack trace...",
  },
  {
    id: 3,
    name: undefined,
    message: undefined,
    created_at: "10-21-2024 4:55p.m.",
    reason: "Promise rejected and not handled",
    status_code: undefined,
    status_message: undefined,
    method: undefined,
    url: undefined,
    line_number: 23,
    col_number: 88,
    stack_trace: "This will be a stack trace...",
  },
];
const App = () => {
  const [errors, setErrors] = useState(dummyErrors);

  // uncomment this when backed is functional...

  // useEffect(() => {
  //   try {
  //     async function fetchData() {
  //       const data = await getData();
  //       setProjects(data);
  //     }
  //     fetchData();
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // }, []);

  const errorHeadings = errors.map((error) => (
    <ErrorHeading
      id={error.id}
      name={error.name}
      message={error.message}
      created_at={error.created_at}
      reason={error.reason}
      status_code={error.status_code}
      status_message={error.status_message}
      method={error.method}
      url={error.url}
      line_number={error.line_number}
      col_number={error.col_number}
      stack_trace={error.stack_trace}
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
