import { MouseEventHandler } from "react";

export default function Button(props: {
  name: string;
  onClick: MouseEventHandler;
  className: string;
}) {
  return (
    <button
      onClick={props.onClick}
      className={`border-2 border-black px-6 py-3 focus:bg-white hover:bg-gray-700 hover:text-white ${props.className}`}
    >
      {props.name}
    </button>
  );
}
