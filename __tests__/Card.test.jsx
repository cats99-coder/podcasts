import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Card from "../src/components/Card";
import { useRouter } from "next/navigation";

const routerPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));
const setup = () => {
  render(
    <Card
      tittle="The Joe Budden Podcast - The Joe Budden Network"
      id="1535809341"
      alt="The Joe Budden Podcast"
      author="The Joe Budden Network"
      src="https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png"
      key={"1535809341"}
    />
  );
};
describe("Card Component", () => {
  useRouter.mockReturnValue({ query: {}, push: routerPush });
  describe("Elements", () => {
    beforeEach(() => {
      setup();
    });
    afterEach(() => {
      cleanup();
    });
    it("Title is visible", async () => {
      const title = screen.getByText(
        "The Joe Budden Podcast - The Joe Budden Network"
      );
      expect(title).toBeInTheDocument();
    });
    it("Change location when user click on title's card", async () => {
      const title = screen.getByText(
        "The Joe Budden Podcast - The Joe Budden Network"
      );
      await userEvent.click(title);
      expect(routerPush).toBeCalledWith("/podcasts/1535809341");
    });
    it("Change location when user click on author's card", async () => {
        const author = screen.getByText(
            "Author: The Joe Budden Network"
          );
          await userEvent.click(author);
          expect(routerPush).toBeCalledWith("/podcasts/1535809341");
    });
  });
});
