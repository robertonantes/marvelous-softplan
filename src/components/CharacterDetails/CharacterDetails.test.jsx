import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CharacterDetails from ".";
import store from "../../store";

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
    render(
      <Provider store={store}>
        <CharacterDetails data={mockData()} />
      </Provider>
    );
    expect(screen.getByText(/character description/i)).toBeInTheDocument();
  });

  it("Renders ´no description available' when description prop is falsy", () => {
    render(
      <Provider store={store}>
        <CharacterDetails data={mockData({ description: "" })} />
      </Provider>
    );
    expect(screen.getByText(/no description available/i)).toBeInTheDocument();
  });

  it("Renders character info", () => {
    const data = mockData();
    const { asFragment } = render(
      <Provider store={store}>
        <CharacterDetails data={data} />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
