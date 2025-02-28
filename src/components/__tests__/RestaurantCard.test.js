import "@testing-library/jest-dom"
import RestaurantCard,{isOpen} from "../RestaurantCard"
import { render,screen } from "@testing-library/react"
import Mock_data from "./mocks/resCardMock.json"

it("should render restaurant card with the mock data",()=>{
    
    const RestaurantCardPromoted = isOpen(RestaurantCard);
    

    
    render(Mock_data.isOpen?<RestaurantCardPromoted data={Mock_data}></RestaurantCardPromoted>:<RestaurantCard data={Mock_data}></RestaurantCard>)
    
    const resName = screen.getByText("OPEN")

    expect(resName).toBeInTheDocument();
        

});