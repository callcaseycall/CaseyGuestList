// import { useContext } from "react";
import { useEffect, useState } from "react";

const GuestList = () => {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState();

  const callApi = async () => {
    try {
      const response = await fetch(
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt-ccall/guests"
      );
      const result = await response.json();
      console.log(result);
      setGuests(result.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <h2>Guest List</h2>
      <p>Please select a guest from the list.</p>
      <ul>
        {guests.map((guest) => (
          <li
            key={guest.id}
            onClick={() => setSelectedGuest(guest)}
            style={{
              cursor: "pointer",
              marginBottom: "8px",
              padding: "4px 8px",
              backgroundColor:
                selectedGuest?.id === guest.id ? "#D1EFE7" : "transparent",
              borderRadius: "4px",
            }}
          >
            {guest.name}
            {guest.email}
          </li>
        ))}
      </ul>
      {selectedGuest && (
        <div>
          <h3>Guest Details</h3>
          <p>Name: {selectedGuest.name}</p>
          <p>Email: {selectedGuest.email}</p>
          <p>Phone: {selectedGuest.phone}</p>
          <p>Bio: {selectedGuest.bio}</p>
          <p>Job: {selectedGuest.job}</p>
        </div>
      )}
    </div>
  );
};

export default GuestList;
