export default function Divider({
  id,
  mt,
  mb,
}: {
  id: string;
  mt: string;
  mb: string;
}) {
  return (
    <div
      id={id}
      className="divider h-[1px]"
      style={{ marginTop: mt, marginBottom: mb }}
    ></div>
  );
}
