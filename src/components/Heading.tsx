import { Heading, HeadingProps } from "@chakra-ui/react";
interface Props extends HeadingProps {}

export const H1 = (props: Props) => {
  return (
    <Heading as="h1" variant={props.variant || "h1"} {...props}>
      {props.children}
    </Heading>
  );
};
export const H2 = (props: Props) => {
  return (
    <Heading as="h2" variant={props.variant || "h2"} {...props}>
      {props.children}
    </Heading>
  );
};
export const H3 = (props: Props) => {
  return (
    <Heading as="h3" variant={props.variant || "h3"} {...props}>
      {props.children}
    </Heading>
  );
};
export const H4 = (props: Props) => {
  return (
    <Heading as="h4" variant={props.variant || "h4"} {...props}>
      {props.children}
    </Heading>
  );
};
export const H5 = (props: Props) => {
  return (
    <Heading as="h5" variant={props.variant || "h5"} {...props}>
      {props.children}
    </Heading>
  );
};
export const H6 = (props: Props) => {
  return (
    <Heading as="h6" variant={props.variant || "h6"} {...props}>
      {props.children}
    </Heading>
  );
};
export const MobileH1 = (props: Props) => {
  return (
    <Heading as="h1" variant={props.variant || "mobile-h1"} {...props}>
      {props.children}
    </Heading>
  );
};
export const MobileH2 = (props: Props) => {
  return (
    <Heading as="h2" variant={props.variant || "mobile-h2"} {...props}>
      {props.children}
    </Heading>
  );
};
export const MobileH3 = (props: Props) => {
  return (
    <Heading as="h3" variant={props.variant || "mobile-h3"} {...props}>
      {props.children}
    </Heading>
  );
};
