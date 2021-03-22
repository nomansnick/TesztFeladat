import React from "react";

export default function ButtonCustom(props) {
  const { text, className } = props;
  return <button className={className}>{text}</button>;
}
