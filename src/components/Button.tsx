function Button(props:{name:string}) {
  return <button onClick={() => {console.log("Button Pressed")}} className="btn-small red">{props.name}</button>;

}

export default Button;
