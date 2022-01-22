import NextLink from "next/link";
import { useRouter } from "next/router";

const Link = ({ children, href, className, onClick }) => {
  // Access router object
  const router = useRouter();
  // Construct link class
  const linkClassName =
    href === router.pathname
      ? `active${className ? " " + className : ""}`
      : className;

  return (
    <NextLink href={href}>
      <a onClick={onClick} className={linkClassName}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
