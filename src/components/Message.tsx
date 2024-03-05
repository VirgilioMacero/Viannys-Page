function Message(props: { data: string; usedClass: string }) {
  const lines = props.data
    .split("\n")
    .map((line, index) => <p key={index}>{line}</p>);

  return (
    <div className={props.usedClass} style={{ fontFamily: "Raleway" }}>
      {lines}
    </div>
  );
}

export default Message;
