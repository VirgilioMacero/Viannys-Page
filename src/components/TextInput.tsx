import { ChangeEventHandler, useState } from "react";

export default function TextInput(props: {
  id: string;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler;
}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      required
      style={{
        paddingLeft: "7px",
        border: isFocused ? "1px solid #000000" : "1px solid black",
        borderBottom: isFocused ? "1px solid #000000" : "1px solid #000000",
        boxShadow: isFocused ? "1px 1px 1px 1px #000000" : "",
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    ></input>
  );
}
