import React from "react";
import { render, screen } from "@testing-library/react";
import SeriesList from ".";

const data = [
  { id: 1, title: "Series 1", thumbnail: { path: "path1" } },
  { id: 2, title: "Series 2", thumbnail: { path: "path2" } },
  { id: 3, title: "Series 3", thumbnail: { path: "path3" } },
];

describe("SeriesList Component", () => {
  it("Render cards of series based on data prop", () => {
    render(<SeriesList data={data} />);
    const images = screen.queryAllByTestId("series-image");
    data.forEach((item, index) => {
      const { thumbnail } = item;
      const expectedImage = `${thumbnail.path}/portrait_medium.${thumbnail.extension}`;

      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(images[index]).toHaveAttribute("src", expectedImage);
    });
  });
});
