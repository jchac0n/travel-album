// import Carousel from "better-react-carousel";

const MyCarousel = (props) => {
  //   const { images } = props;
  //   return (
  //     <div>
  //       <Carousel cols={3} rows={1} gap={10} loop>
  //         {images.map((img, idx) => (
  //           <Carousel.Item key={idx}>
  //             <img width="%100" src={img} alt="" />
  //           </Carousel.Item>
  //         ))}
  //       </Carousel>
  //     </div>
  //   );
  //   let's see if we can do this ourselves someday
  return (
    <div>
      {props.images.map((img, idx) => (
        <div className="photo-item" key={idx}>
          <img src={img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default MyCarousel;
