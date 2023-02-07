import img0 from "../test_images/pic0.jpg";
import img1 from "../test_images/pic1.jpg";
import img2 from "../test_images/pic2.jpg";
import img3 from "../test_images/pic3.png";
import img4 from "../test_images/pic4.jpg";
import img5 from "../test_images/pic5.jpg";
import img6 from "../test_images/pic6.jpg";

const images = [img0, img1, img2, img3, img4, img5, img6];

const Album = () => {
  return (
    <div className="grid-container">
      {images.map((img, idx) => (
        <div className="grid-item" key={idx}>
          <img src={img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Album;
