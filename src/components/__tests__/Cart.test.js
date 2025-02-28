import { fireEvent, render, screen  } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantMenu"
import Mock_data from "./mocks/resMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Cart from "../Cart"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> Promise.resolve(Mock_data),
    });
})


it("should load restaurant menu component", async ()=>{
    await act(async()=>{
        render(

            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </Provider>
            </BrowserRouter>
        )
    })  

    const accordianHeader = screen.getByText("Sweets (62)");
    fireEvent.click(accordianHeader);

    const items = screen.getAllByTestId("menuItems");
    expect(items.length).toBe(62);

    const addBtn = screen.getAllByRole("button",{name:"add+"})

    fireEvent.click(addBtn[0]);

    const cartItems = screen.getByText("Cart (1) items");
    expect(cartItems).toBeInTheDocument();

    fireEvent.click(addBtn[1]);
    expect(screen.getByText("Cart (2) items")).toBeInTheDocument();
    
    const cart = screen.getByText("Cart (2) items");


    fireEvent.click(cart);
    const clear = screen.getByText("clear cart");
    expect(clear).toBeInTheDocument();

})