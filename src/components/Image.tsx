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
        className="w-[350px] h-[230px] rounded-3xl shadow-2xl  hover:shadow-[#213122] hover:shadow-2xl pb-10"
        style={{
          backgroundImage: `url(${props.route})`,
          backgroundSize: "cover",
        }}
      >
        <h1
          className="text-white h-full text-2xl pt-44 pl-10"
          style={{ fontFamily: "Garet Heavy" }}
        >
          {props.firsText}
          {!props.secodText ? (
            ""
          ) : (
            <>
              <br />
              {/* <h1 style={{ fontFamily: "Garet Book" }}>{props.secodText}</h1> */}
              <h1>{props.secodText}</h1>
            </>
          )}
        </h1>
      </div>
    </a>
  );
}

export default Image;
