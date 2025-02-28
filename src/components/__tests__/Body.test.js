// Import necessary modules
import Body from "../Body";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "./mocks/resListmock.json";
import { BrowserRouter } from "react-router-dom";


// Mock the useOnlineStatus hook to always return true
// jest.mock("../utils/useOnlineStatus", () => jest.fn(() => true));

// Mock the fetch API to return the mock data
global.fetch = jest.fn(() => {
   
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    });
});

// Clear mocks before each test to avoid cross-test contamination
beforeEach(() => {
    jest.clearAllMocks();
});

test("it displays data after fetching", async () => {
    // Wrap render in act to handle async operations
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });

    // Debugging output to inspect the rendered DOM structure

});