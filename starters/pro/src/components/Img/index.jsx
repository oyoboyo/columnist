// Import core
import Image from "next/image";

// # Image component (next/image wrapper)
export default function Img({ src, alt, width, height, optimize }) {
	// Render image
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
}
