import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("App top-level", () => {
  it("renders site title", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/Atmospheric Accountability Court/i)).toBeInTheDocument();
  });
});