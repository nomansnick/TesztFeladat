import React from "react";

export default function ButtonCustom(props) {
  const { param, children, className, click } = props;
  return (
    <button onClick={() => click(param)} className={className}>
      {children}
    </button>
  );
}
