import React from "react";
type ErrrProps = {
  error: Error;
};
// error boundary
const Errorboundary = (props: ErrrProps) => {
  return <div>{props.error.message}</div>;
};

export default Errorboundary;
