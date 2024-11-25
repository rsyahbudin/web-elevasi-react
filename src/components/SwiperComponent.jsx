import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";

const SwiperComponent = ({ images, title, location }) => {
  return (
    <div className="swiper-container">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 3000, // Waktu pergeseran dalam milidetik (3 detik)
          disableOnInteraction: false, // Agar autoplay terus berjalan meskipun user berinteraksi
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full aspect-square overflow-hidden rounded-lg shadow-sm">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Title and Location */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-md font-light text-gray-600">{location}</p>
      </div>
    </div>
  );
};

export default SwiperComponent;
