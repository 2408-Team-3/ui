import React, { useState } from "react";

export default function ErrorDetails(props) {
  return (
    <div style={{ width: "500px" }}>
      <ul
        style={{
          textAlign: "left",
          paddingLeft: "70px",
          borderRadius: "10px",
        }}
      >
        {props.reason && (
          <li>
            <strong>Reason:</strong> {props.reason}
          </li>
        )}
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Message:</strong> {props.message}
        </li>
        {props.status_code && ( // only for errors with a status code...
          <div>
            <li>
              <strong>Status code:</strong> {props.status_code}
            </li>
            <li>
              <strong>Status message:</strong> {props.status_message}
            </li>
            <li>
              <strong>Method:</strong> {props.method}
            </li>
            <li>
              <strong>Path:</strong> {props.url}
            </li>
          </div>
        )}
        <li>
          <strong>Line number:</strong> {props.line_number}
        </li>
        <li>
          <strong>Column number:</strong> {props.col_number}
        </li>
        <li>
          <strong>Stack trace:</strong> {props.stack_trace || "No info"}
        </li>
      </ul>
    </div>
  );
}
