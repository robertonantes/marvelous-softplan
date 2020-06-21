import React from "react";
import { render, screen } from "@testing-library/react";
import CharacterDetails from ".";

function mockData(data = {}) {
  return {
    name: "Character Name",
    description: "Character description",
    comics: {
      available: 10,
    },
    series: {
      available: 11,
    },
    stories: {
      available: 12,
    },
    events: {
      available: 13,
    },
    thumbnail: {
      path: "imagepath",
      extension: "jpg",
    },
    ...data,
  };
}

describe("CharacterDetails Component", () => {
  it("Renders description prop", () => {
    render(<CharacterDetails data={mockData()} />);
    expect(screen.getByText(/character description/i)).toBeInTheDocument();
  });

  it("Renders ´no description available' when description prop is falsy", () => {
    render(<CharacterDetails data={mockData({ description: "" })} />);
    expect(screen.getByText(/no description available/i)).toBeInTheDocument();
  });

  it("Renders character info", () => {
    const data = mockData();
    render(<CharacterDetails data={data} />);

    expect(screen.getByText(data.name)).toBeInTheDocument();
    expect(screen.getByTestId("comics")).toHaveTextContent(
      `Comics: ${data.comics.available}`
    );

    expect(screen.getByTestId("series")).toHaveTextContent(
      `Series: ${data.series.available}`
    );

    expect(screen.getByTestId("stories")).toHaveTextContent(
      `Stories: ${data.stories.available}`
    );

    expect(screen.getByTestId("events")).toHaveTextContent(
      `Events: ${data.events.available}`
    );

    const expectedImage = `${data.thumbnail.path}.${data.thumbnail.extension}`;
    expect(screen.getByTestId("character-image")).toHaveAttribute(
      "src",
      expectedImage
    );
  });
});
