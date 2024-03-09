export default function FAQ(props: { name: string; description: string }) {
  return (
    <div
      className="text-center w-full self-end"
      style={{ fontFamily: "Raleway" }}
    >
      <div style={{ fontWeight: "bold" }} className="align-middle mb-3 text-xl">
        {props.name}
      </div>
      <div className="align-middle text-center p-2">{props.description}</div>
    </div>
  );
}
