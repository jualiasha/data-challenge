import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import NumberInput from "../src/components/numberInput";

describe("NumberInput Component", () => {
  it("renders with initial value", () => {
    render(<NumberInput value={50} onChange={() => {}} range={[0, 100]} />);
    expect(screen.getByDisplayValue("50")).toBeInTheDocument();
  });

  it("increments value when clicking plus button", () => {
    const onChange = vi.fn();
    render(<NumberInput value={50} onChange={onChange} range={[0, 100]} />);
    fireEvent.click(screen.getByText("+"));
    const error = screen.queryByTestId("error-message");
    expect(error).not.toBeInTheDocument();
    expect(onChange).toHaveBeenCalledWith(51);
  });

  it("decrements value when clicking minus button", () => {
    const onChange = vi.fn();
    render(<NumberInput value={50} onChange={onChange} range={[0, 100]} />);
    fireEvent.click(screen.getByText("-"));
    const error = screen.queryByTestId("error-message");
    expect(error).not.toBeInTheDocument();
    expect(onChange).toHaveBeenCalledWith(49);
  });

  it("does not decrement below min value", () => {
    const onChange = vi.fn();
    render(<NumberInput value={0} onChange={onChange} range={[0, 100]} />);
    fireEvent.click(screen.getByText("-"));
    const error = screen.getByTestId("error-message");
    expect(error).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
  });

  it("does not increment above max value", () => {
    const onChange = vi.fn();
    render(<NumberInput value={100} onChange={onChange} range={[0, 100]} />);
    fireEvent.click(screen.getByText("+"));
    const error = screen.getByTestId("error-message");
    expect(error).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
  });
});
