import Image from "next/image";

const Img = ({ src, alt, width, height }) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      layout="responsive"
      objectFit="cover"
    />
  );
};

export default Img;
