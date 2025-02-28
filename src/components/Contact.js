const Contact =()=>{

    return(
        <div>
            <p className="font-bold text-xl p-4 m-4">
                Contact us
            </p>
            <p className="font-bold text-xl p-4 m-4">
                if anything is required
            </p>
            <input type="text" className="border-2 border-black rounded-md m-6 px-2" placeholder="name" ></input>
            <input type="text" className="border-2 border-black rounded-md m-6 px-2" placeholder="message" ></input>
            <button className="border-2 border-black bg-neutral-300 px-2 rounded-md">Submit</button>
        </div>
    )


}
export default Contact;