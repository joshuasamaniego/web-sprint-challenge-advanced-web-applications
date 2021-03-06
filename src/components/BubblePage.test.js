import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Renders BubblePage without errors", async () => {
  // Finish this test
  render(<BubblePage />);
  const bubbles = screen.findByText(/bubbles/i);
  expect(await bubbles).toBeInTheDocument();
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  render(<BubblePage />);
  const color = screen.findByText(/aliceblue/i);
  expect(await color).toBeInTheDocument();
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading