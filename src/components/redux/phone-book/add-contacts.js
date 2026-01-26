// import { useSelector } from "react-redux";
import { setContact } from "./action/contact-action";
import { useDispatch } from "react-redux";
import ShowContacts from "./show-contact";

const AddContacts = () => {

let dispatch = useDispatch();

 return (
    <div>
    <div>
        <div>
            Name: <input type="text" id="name" />
        </div>
        <div>
            Contact No: <input type="text" id="contact-no" />
        </div>
        <div>
            Address: <input type="text" id="address" />
        </div>
        <div>
            <button onClick={() => {
                let name = document.getElementById("name")?.value;
                let contactNo = document.getElementById("contact-no")?.value;
                let address = document.getElementById("address")?.value;
                console.log("Contact details ", name, " $$ ", contactNo, " $$ ", address);
                dispatch(setContact({
                    name: name,
                    contact: contactNo,
                    address: address
                }));
            }}> Submit </button>
        </div>
    </div>
    <div>
        ------------ Show Contacts ------------
        <ShowContacts />
    </div>
    </div>
 )
};

export default AddContacts;