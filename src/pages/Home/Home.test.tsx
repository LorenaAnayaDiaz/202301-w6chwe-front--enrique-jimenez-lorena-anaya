import React from "react";
import { Home } from "./Home";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";

test("When rendering home, the title should be displayed", () => {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <Home />
      </Provider>
    </React.StrictMode>
  );
  const title = screen.getByText("Check out the robots!");
  expect(title).toBeInTheDocument();
});
