import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ButtonCustom from "../Button";

describe("ButtonCustom Component", () => {
  it("renders without crashing", () => {
    render(<ButtonCustom>Click me</ButtonCustom>);
  });

  it("renders children correctly", () => {
    const { getByText } = render(<ButtonCustom>Click me</ButtonCustom>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("applies custom styling correctly", () => {
    const { getByText } = render(
      <ButtonCustom sx={{ color: "red" }}>Custom Button</ButtonCustom>
    );
    const button = getByText("Custom Button");
    expect(button).toHaveStyle("color: red");
  });

  it("calls onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <ButtonCustom onClick={onClickMock}>Click me</ButtonCustom>
    );
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
