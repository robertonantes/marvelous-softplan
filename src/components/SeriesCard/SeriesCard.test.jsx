import React from "react";
import { render, screen } from "@testing-library/react";

import SeriesCard from "./";

describe("SeriesCard Component", () => {
  it("Renders data based on prop", () => {
    render(<SeriesCard title="Series Card" image="image-path" />);
    expect(screen.getByText(/series card/i)).toBeInTheDocument();
    expect(screen.getByTestId("series-image")).toHaveAttribute(
      "src",
      "image-path"
    );
  });
});
