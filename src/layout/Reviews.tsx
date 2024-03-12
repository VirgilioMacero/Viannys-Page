import Review from "../components/Review";
import Divider from "../components/Divider";
import jsonReviews from "../assets/jsons/reviews.json";
import SegmentTitle from "../components/SegmentTitle";

export default function Reviews() {
  return (
    <>
      <Divider id="" mt="100px" mb="0px" />

      <div className="container">
        <SegmentTitle
          text="TESTIMONIOS"
          titleLeft={true}
          titleRigth={false}
          className="text-center mb-8"
          titleClasses="max-[950px]:text-[230%]  max-[400px]:text-3xl "
        />
      </div>
      <div className=" grid grid-cols-3 gap-4 mx-8 overflow-y-auto  max-[1100px]:grid-cols-2 max-[670px]:grid-cols-1 p-2">
        {jsonReviews.review.map((element, index) => {
          if (element.description !== "") {
            return (
              <Review
                key={index}
                name={element.author.name}
                description={element.description}
              />
            );
          }
        })}
      </div>
    </>
  );
}
