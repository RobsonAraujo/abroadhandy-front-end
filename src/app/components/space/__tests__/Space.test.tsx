// Space.test.tsx

import React from "react";
import { render } from "@testing-library/react";

import Space from "../Space";

describe("Space component", () => {
  it("should render with default margins when no props are provided", () => {
    const { container } = render(<Space />);
    const div = container.firstChild as HTMLDivElement;

    expect(div).toHaveStyle("margin-top: 0px");
    expect(div).toHaveStyle("margin-bottom: 0px");
    expect(div).toHaveStyle("margin-right: 0px");
    expect(div).toHaveStyle("margin-left: 0px");
  });

  it("should apply the correct margin top", () => {
    const { container } = render(<Space top={2} />);
    const div = container.firstChild;

    expect(div).toHaveStyle("margin-top: 8px");
  });

  it("should apply the correct margin bottom", () => {
    const { container } = render(<Space bottom={3} />);
    const div = container.firstChild;

    expect(div).toHaveStyle("margin-bottom: 12px");
  });

  it("should apply the correct margin right", () => {
    const { container } = render(<Space right={1.5} />);
    const div = container.firstChild;

    expect(div).toHaveStyle("margin-right: 6px");
  });

  it("should apply the correct margin left", () => {
    const { container } = render(<Space left={4} />);
    const div = container.firstChild;

    expect(div).toHaveStyle("margin-left: 16px");
  });

  it("should apply all margins correctly", () => {
    const { container } = render(
      <Space top={1} bottom={2} right={3} left={4} />
    );
    const div = container.firstChild;

    expect(div).toHaveStyle("margin-top: 4px");
    expect(div).toHaveStyle("margin-bottom: 8px");
    expect(div).toHaveStyle("margin-right: 12px");
    expect(div).toHaveStyle("margin-left: 16px");
  });

  it("should handle string values for margins", () => {
    const { container } = render(
      <Space top="1" bottom="2" right="3" left="4" />
    );
    const div = container.firstChild;

    expect(div).toHaveStyle("margin-top: 4px");
    expect(div).toHaveStyle("margin-bottom: 8px");
    expect(div).toHaveStyle("margin-right: 12px");
    expect(div).toHaveStyle("margin-left: 16px");
  });
});
