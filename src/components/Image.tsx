function Image(props: { route: string; useClass: string; url: string }) {
  return (
    <a
      className="center"
      style={{ width: "50%", justifySelf: "center" }}
      href={props.url}
    >
      <img className={props.useClass} loading="lazy" src={props.route}></img>
    </a>
  );
}

export default Image;
