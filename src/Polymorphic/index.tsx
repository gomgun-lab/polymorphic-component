// https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/

import React from "react";
import type { PolymorphicRef, PolymorphicComponentPropWithRef } from "./types";

type Rainbow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";

type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    color?: Rainbow;
  }
>;

type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonProps<C>
) => React.ReactElement | null;

const Button: ButtonComponent = React.forwardRef(
  <C extends React.ElementType = "button">(
    { as, children, ...restProps }: ButtonProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Element = as || "button";

    return (
      <Element ref={ref} {...restProps}>
        {children}
      </Element>
    );
  }
);

export default Button;
