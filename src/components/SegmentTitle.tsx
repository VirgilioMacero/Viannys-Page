import Message from "./Message";

function SegmentTitle(props: {
  text: string;
  className: string;
  titleLeft: boolean;
  titleRigth: boolean;
  titleClasses: string;
}) {
  return (
    <div className="row">
      <div
        className={`col s12 grid grid-cols-3 abalible-services-title-container ${props.className} `}
      >
        {!props.titleLeft ? (
          <div></div>
        ) : (
          <div>
            <Message
              data="NUTRICIÓN 
 INTEGRAL
Y DEPORTE "
              usedClass="text-xl font-normal text-left"
            />
          </div>
        )}
        <h1
          style={{ fontFamily: "Raleway" }}
          className={`part-title ${props.titleClasses}`}
        >
          {props.text}
        </h1>
        {!props.titleRigth ? (
          <div></div>
        ) : (
          <div>
            <Message
              data="NUTRICIÓN 
 INTEGRAL
Y DEPORTE "
              usedClass="text-xl font-normal text-right"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default SegmentTitle;
