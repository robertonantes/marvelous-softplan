import React from "react";
import { render } from "@testing-library/react";
import ResultItem from ".";

const data = {
  image: "image-path",
  name: "Result name",
};

describe("ResultItem Component", () => {
  it("Renders result info", () => {
    const { asFragment } = render(
      <ResultItem image={data.image} name={data.name} title="prop" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
