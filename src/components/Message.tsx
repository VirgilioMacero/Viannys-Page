function Message(props:{data:string,usedClass:string}) {
  return (
    <div className={props.usedClass}><pre>{props.data}</pre></div>
  )
}

export default Message