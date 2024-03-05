export default function Review({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div
      className="text-center w-full self-end"
      style={{ fontFamily: "Raleway" }}
    >
      <div className="align-middle text-justify p-2">{description}</div>
      <div style={{ fontWeight: "bold" }} className="align-middle mt-3 text-xl">
        {name}
      </div>
    </div>
  );
}
