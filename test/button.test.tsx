import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "../src/components/button";

describe("Button Component", () => {
  it("renders with text", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });

  it("calls onPress when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onPress={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalled();
  });
  it("has given props", () => {
    const { container } = render(
      <Button size="small" variant="outlined" theme="secondary">
        Click Me
      </Button>,
    );
    const button = container.firstChild as HTMLElement;
    expect(button.className).toContain("small");
    expect(button.className).toContain("outlined");
    expect(button.className).toContain("secondary");
  });
});
