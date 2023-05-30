function Experience(props:{title:string,info:string}) {
  return (
    <div className="row">

        <div className="col s12">

            <h1 className="experience-title">{props.title}</h1>

        </div>
        <div className="col s12 experience">

            <h1>{props.info}</h1>

        </div>
    </div>
  )
}

export default Experience