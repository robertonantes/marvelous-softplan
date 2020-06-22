import React from "react";
import { Route, MemoryRouter } from "react-router-dom";

import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import * as services from "../../common/services";
import Character from ".";

const details = {
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
};

const series = [
  { id: 1, title: "Series 1", thumbnail: { path: "path1" } },
  { id: 2, title: "Series 2", thumbnail: { path: "path2" } },
  { id: 3, title: "Series 3", thumbnail: { path: "path3" } },
];

describe("Character Container", () => {
  it("Display loading skeleton on mount", async () => {
    jest.spyOn(services, "fetchCharacterDetails").mockImplementationOnce(() => {
      return { data: [details] };
    });

    jest.spyOn(services, "fetchCharacterSeries").mockImplementationOnce(() => {
      return { data: series };
    });

    render(
      <MemoryRouter initialEntries={["/character/123"]}>
        <Route path="/character/:id" exact>
          <Character />
        </Route>
      </MemoryRouter>
    );

    expect(screen.getByTestId("character-skeleton")).toBeInTheDocument();
    expect(screen.queryByTestId("character-details")).not.toBeInTheDocument();
    expect(services.fetchCharacterDetails).toHaveBeenCalledWith(
      "123",
      expect.any(Object)
    );

    await waitForElementToBeRemoved(() =>
      screen.getByTestId("character-skeleton")
    );
  });

  it("Display character details and series list", async () => {
    jest.spyOn(services, "fetchCharacterDetails").mockImplementationOnce(() => {
      return { data: [details] };
    });

    jest.spyOn(services, "fetchCharacterSeries").mockImplementationOnce(() => {
      return { data: series };
    });

    render(
      <MemoryRouter initialEntries={["/character/123"]}>
        <Route path="/character/:id" exact>
          <Character />
        </Route>
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(() =>
      screen.getByTestId("character-skeleton")
    );

    expect(screen.queryByTestId("character-details")).toBeInTheDocument();
    expect(screen.queryByTestId("series-list")).toBeInTheDocument();
  });
});
