import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../src/components/Header";

describe("Header component", () => {
  it("Header is visible", async () => {
    render(<Header />);
    const tittle = await screen.findByText("Podcaster");
    expect(tittle).toContainHTML('<h1 class="tittle">Podcaster</h1>')
  });
});
