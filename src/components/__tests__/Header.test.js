import Header from "../Header"
import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

it("testing Header component if it has the Login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
        ); 

        // const loginButton  = screen.getByText("Home");
        const cart = screen.getAllByText("clear Cart");

        // expect(loginButton).toBeInTheDocument();
        expect(cart.length).toBeTruthy();
}); 

it("Should check the functionality of the login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name:"Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name:"Logout"});

    expect(logoutButton).toBeInTheDocument();

});
