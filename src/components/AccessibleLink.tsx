import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import Link, { LinkProps } from "next/link";

type AccessibleLinkProps = LinkProps & ChakraLinkProps;

const AccessibleLink:React.FC<AccessibleLinkProps> = ({
  href,
  isExternal,
  children,
  as,
  role,
  onClick,
  ...props
}) => {
  return (
    <Link href={href} as={as} passHref>
      <ChakraLink
        isExternal={isExternal}
        role={role}
        aria-label={props["aria-label"]}
        onClick={onClick}
      >
        {children}
      </ChakraLink>
    </Link>
  );
};

export default AccessibleLink;
