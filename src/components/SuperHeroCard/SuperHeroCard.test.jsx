import React from "react";
import { render, screen } from "@testing-library/react";
import SuperHeroCard from ".";

const data = {
  image: "image-path",
  name: "Hero name",
};

describe("SuperHeroCard Component", () => {
  it("Renders card info", () => {
    const { asFragment } = render(
      <SuperHeroCard image={data.image} name={data.name} />
    );

    expect(screen.getByTestId("hero-image")).toHaveStyle(
      `background-image: url(image-path)`
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
