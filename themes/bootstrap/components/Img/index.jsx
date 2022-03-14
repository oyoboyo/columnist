import Image from "next/image";

const Img = ({ src, alt, width, height, optimize }) => {
  return optimize ? (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      layout="responsive"
      objectFit="cover"
    />
  ) : (
    <img className="img-fluid" src={src} alt={alt} />
  );
};

export default Img;
