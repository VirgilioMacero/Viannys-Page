export default function Review({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div
      className="text-center w-full self-end border-2 border-slate-300 h-full  p-4"
      style={{ fontFamily: "Raleway" }}
    >
      <div className="align-middle h-[80%] text-center p-2 pb-4">
        {description}
      </div>
      <div style={{ fontWeight: "bold" }} className="align-middle  text-xl">
        {name}
      </div>
    </div>
  );
}
