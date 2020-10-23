import React from "react";

export default function Alert({ type, msg, removeAlert, list }) {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2500);
    return () => {
      clearTimeout(timeout);
    };
  }, [list]);
  return (
    <div
      className={`bg-${type}-400 text-${type}-100 text-lg rounded px-3 w-11/12 md:w-1/2 mx-auto mt-4`}
    >
      <h1>{msg}</h1>
    </div>
  );
}
