import { useSelector } from "react-redux";

const ShowContacts = () => {
    const allContacts = useSelector(state => state);
 return (
    <div>
        {allContacts.contactList.map((contact, index) => {
            return (
            <div key={index}>
                <div>
                    Name: {contact.name}
                </div>
                <div>
                    Contact No: {contact.contact}
                </div>
                <div>
                    Address: {contact.address}
                </div>
                <br />
            </div>
            );
        } )}
    </div>
 );
}

export default ShowContacts;