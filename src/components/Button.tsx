import React from "react";

export default function Button(props: {
  name: string;
  link: string;
  className: string;
}) {
  return (
    <a
      className={`border-2 border-black px-6 py-3 ${props.className}`}
      href={props.link}
    >
      {props.name}
    </a>
  );
}
