import React, { useState } from "react";
import ErrorDetails from "./ErrorDetails";

export default function ErrorHeading(props) {
  const [showDetail, setShowDetails] = useState(false);
  return (
    <div
      onClick={() => setShowDetails((prev) => !prev)}
      style={{
        border: "solid black 1px",
        backgroundColor: "#F5F5F5",
        margin: "10px 0 10px 0",
        padding: "10px 10px 10px 10px",
        borderRadius: "10px",
        width: "600px",
        textAlign: "left",
      }}
    >
      <h3>
        {props.created_at} | {props.reason ? props.reason : props.message}
      </h3>
      {showDetail && <ErrorDetails {...props} />}
    </div>
  );
}
