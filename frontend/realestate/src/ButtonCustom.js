import React from "react";

export default function ButtonCustom(props) {
  const { text, className, activate } = props;
  return (
    <button onClick={() => activate(text)} className={className}>
      {text}
    </button>
  );
}
