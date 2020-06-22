import React from "react";
import { render, screen } from "@testing-library/react";
import CharacterList from ".";

const items = [
  {
    id: 1,
    name: "Character 1",
    thumbnail: { path: "path1", extension: "jpg" },
  },
  {
    id: 2,
    name: "Character 2",
    thumbnail: { path: "path2", extension: "jpg" },
  },
  {
    id: 3,
    name: "Character 3",
    thumbnail: { path: "path3", extension: "jpg" },
  },
];

describe("CharacterList Component", () => {
  it("Render cards of characters based on data prop", () => {
    render(<CharacterList items={items} />);
    const images = screen.queryAllByTestId("hero-image");
    items.forEach((item, index) => {
      const { thumbnail, name } = item;
      const expectedImage = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;

      expect(screen.getByText(name)).toBeInTheDocument();
      expect(images[index]).toHaveStyle(
        `background-image: url(${expectedImage})`
      );
    });
  });
});
