import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import * as services from "../../common/services";
import store from "../../store";
import Home from ".";

const data = [
  {
    id: 1,
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
  },
];

describe("Home Container", () => {
  it("Display loading skeleton on mount", async () => {
    jest.spyOn(services, "fetchCharacters").mockImplementationOnce(() => {
      return { data: data };
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Route path="/" exact>
            <Home />
          </Route>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId("home-skeleton")).toBeInTheDocument();
    expect(screen.queryByTestId("home-list")).not.toBeInTheDocument();
    expect(services.fetchCharacters).toHaveBeenCalledWith({
      limit: 20,
      orderBy: "-modified",
    });

    await waitForElementToBeRemoved(() => screen.getByTestId("home-skeleton"));
  });

  it("Display characters list", async () => {
    jest.spyOn(services, "fetchCharacters").mockImplementationOnce(() => {
      return { data: data };
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Route path="/" exact>
            <Home />
          </Route>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.queryByTestId("home-list")).toBeInTheDocument();
  });
});
