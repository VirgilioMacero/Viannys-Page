export default function Divider({
  id,
  mt,
  mb,
  className,
}: {
  id: string;
  mt: string;
  mb: string;
  className: string;
}) {
  return (
    <div
      id={id}
      className={`divider h-[1px] ${className}`}
      style={{ marginTop: mt, marginBottom: mb }}
    ></div>
  );
}
