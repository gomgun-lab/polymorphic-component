import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Button from "./index";

describe("Button component", () => {
  test("renders button correctly", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders correct color", () => {
    render(<Button style={{ color: "red" }}>Click me</Button>);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toHaveStyle("color: red");
  });

  test("render button as div", () => {
    render(<Button as="div">Click me</Button>);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement.tagName).toBe("DIV");
  });

  test("forwards ref correctly", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click me</Button>);
    expect(ref.current).not.toBeNull();
  });
});
