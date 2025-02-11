import React from "react";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import DisplayText from "./DisplayText";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("Test DisplayText", () => {
  const userFullName = "John Tester";

  const getUserFullnameMock = (
    username: string
  ): [Promise<string>, jest.Mock<Promise<string>, [string]>] => {
    const promise = new Promise<string>((res, rej) => {
      res(userFullName);
    });
    const getUserFullname = jest.fn(
      async (username: string): Promise<string> => {
        return promise;
      }
    );
    return [promise, getUserFullname];
  };

  it("renders without crachsing", () => {
    const username = "testuser";
    const [promise, getUserFullname] = getUserFullnameMock(username);

    const { baseElement } = render(
      <DisplayText getUserFullname={getUserFullname} />
    );
    console.log(baseElement.innerHTML);
    expect(baseElement).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const username = "testuser";
    const [promise, getUserFullname] = getUserFullnameMock(username);

    const { baseElement } = render(
      <DisplayText getUserFullname={getUserFullname} />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("receives input text", () => {
    const username = "testuser";
    const [promise, getUserFullname] = getUserFullnameMock(username);

    const { getByTestId } = render(
      <DisplayText getUserFullname={getUserFullname} />
    );
    const input = getByTestId("user-input");

    fireEvent.change(input, {
      target: {
        value: username,
      },
    });

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(username);
  });

  it("shows welcome message", async () => {
    const username = "testuser";
    const [promise, getUserFullname] = getUserFullnameMock(username);

    const msg = `welcome to React testing, ${userFullName}`;
    const { getByTestId } = render(
      <DisplayText getUserFullname={getUserFullname} />
    );
    const input = getByTestId("user-input");

    const label = getByTestId("final-msg");
    fireEvent.change(input, {
      target: {
        value: username,
      },
    });

    const btn = getByTestId("input-submit");
    fireEvent.click(btn);
    expect(label).toBeInTheDocument();
    await waitFor(() => expect(label.innerHTML).toBe(msg));
  });
});
