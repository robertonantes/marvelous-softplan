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
    const { asFragment } = render(<CharacterDetails data={data} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
