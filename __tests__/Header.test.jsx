import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../src/components/Header";
import { useRouter } from 'next/navigation'


jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))

describe("Header Component", () => {
  useRouter.mockReturnValue({ query: {}})
  it("Header is visible", async () => {
    render(<Header />);
    const title = await screen.findByRole("heading");
    expect(title).toBeInTheDocument()
  });
});
