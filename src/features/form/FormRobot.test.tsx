import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../app/store";
import { Form } from "../../pages/Form/Form";

test("When rendering home, the title should be displayed", () => {
  render(
    <MemoryRouter>
      <React.StrictMode>
        <Provider store={store}>
          <Form />
        </Provider>
      </React.StrictMode>
    </MemoryRouter>
  );

  const formElement = screen.getByRole("form");
  expect(formElement).toBeInTheDocument();
  const button = screen.getByRole("button");
  onclick(button);
  expect(button).toBeInTheDocument();
});
