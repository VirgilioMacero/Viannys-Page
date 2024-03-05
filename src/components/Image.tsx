function Image(props: {
  route: string;
  url: string;
  firsText: string;
  secodText: string;
}) {
  return (
    <a target="_blank" href={props.url}>
      <div
        className="w-[287px] h-[287px] "
        style={{
          backgroundImage: `url(${props.route})`,
          backgroundSize: "cover",
        }}
      >
        <h1
          className="text-white text-center h-full text-3xl pt-28"
          style={{ fontFamily: "Garet Heavy" }}
        >
          {props.firsText}
          {!props.secodText ? (
            ""
          ) : (
            <>
              <br />
              {props.secodText}
            </>
          )}
        </h1>
      </div>
    </a>
  );
}

export default Image;
