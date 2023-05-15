// https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/

import type { PolymorphicRef, PolymorphicComponentProp } from "./types";

type Rainbow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";

type ButtonProps = {
  color?: Rainbow;
};

const Button = <C extends React.ElementType = "button">(
  { as, children, ...restProps }: PolymorphicComponentProp<C, ButtonProps>,
  ref?: PolymorphicRef<C>
) => {
  const Element = as || "button";

  return (
    <Element ref={ref} {...restProps}>
      {children}
    </Element>
  );
};

export default Button;
