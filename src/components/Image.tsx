function Image(props: {
  route: string;
  url: string;
  firsText: string;
  secodText: string;
  target: string;
}) {
  return (
    <a target={props.target} href={props.url}>
      <div
        className="w-[287px] h-[287px] rounded-3xl shadow-2xl hover:border-2 hover:border-indigo-600"
        style={{
          backgroundImage: `url(${props.route})`,
          backgroundSize: "cover",
        }}
      >
        <h1
          className="text-white h-full text-3xl pt-44 pl-10"
          style={{ fontFamily: "Garet Heavy" }}
        >
          {props.firsText}
          {!props.secodText ? (
            ""
          ) : (
            <>
              <br />
              <h1 style={{ fontFamily: "Garet Book" }}>{props.secodText}</h1>
            </>
          )}
        </h1>
      </div>
    </a>
  );
}

export default Image;
