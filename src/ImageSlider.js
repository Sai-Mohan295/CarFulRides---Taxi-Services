import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://images.pexels.com/photos/18670317/pexels-photo-18670317/free-photo-of-suzuki-swift-on-the-road.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    url: "https://c4.wallpaperflare.com/wallpaper/448/169/179/2011-hyundai-i10-wallpaper-preview.jpg",
  },
  {
    url: "https://w0.peakpx.com/wallpaper/240/473/HD-wallpaper-honda-accord-street-car-10th-gen-car-graphy-golden-hour-road-silver-colour-autos-sandstorm.jpg",
  },
  {
    url: "https://i.pinimg.com/736x/31/5a/a6/315aa682357ce97f3a73f9890f924486.jpg",
  },
  {
    url: "https://i.pinimg.com/originals/92/dd/ff/92ddffc32de4160f232da9e390b3463c.jpg",
  },
];

const ImageSlider = () => {
  return (
    <div>
      {window.innerWidth > 1000 ? (
        <SimpleImageSlider
          width={463}
          height={800}
          images={images}
          showBullets={true}
          autoPlay={true}
          autoPlayDelay={3.0}
          style={{
            padding: "10px 400px",
            backgroundColor: "white",
          }}
        />
      ) : (
        <SimpleImageSlider
          width={345}
          height={650}
          images={images}
          showBullets={true}
          autoPlay={true}
          autoPlayDelay={3.0}
          style={{
            padding: "10px",
            backgroundColor: "white",
          }}
        />
      )}
    </div>
  );
};

export default ImageSlider;
