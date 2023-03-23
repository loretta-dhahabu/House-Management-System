import React, {useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";

function House ()
{
    const [{ data: house, error, status }, setHouse] = useState({
      data: {},
      error: "",
      status: "pending",
    });
    const { id } = useParams();

    useEffect(() => {
      fetch(`/api/apartments/${id}`).then((response) => {
        if (response.ok) {
          response.json().then((house) => {
            // console.log(house);
            setHouse({ data: house, error: "", status: "resolved" });
          });
          //   console.log(house);
        } else {
          response.json().then((err) =>
            setHouse({
              data: "not found",
              error: err.error,
              status: "rejected",
            })
          );
        }
      });
    }, [ id ] );
    

    if (status === "pending") return <h1>Loading...</h1>;
    if ( status === "rejected" ) return <h1>Error: { error.error }</h1>;
    
  return (
    <div className="restbody">
      <div className="container bg-darksalmon">
        <div className="card restcards" key={house.id}>
          <img
            src={house.image}
            className="card-img-top restimages"
            alt={house.name}
          />
          <div className="card-body">
            <h5 className="card-title text-center">{house.name}</h5>
            <p className="card-text text-center">{house.price}</p>
            <div className="house-details">
              {/* <Link
                to={`/house_rooms`}
                onClick={() => (
                  <houseroomForm rooms={house.rooms} />
                )}
              >
                <button className="addBtn ml-auto">Add room</button>
              </Link> */}
            </div>
          </div>
        </div>
        <div className="card restcards">
          <h3 className="text-center text-bold">Our Rooms</h3>

          {(Array.isArray(house.rooms) ? house.rooms : []).map((room) => {
            // console.log(formData);
            return (
              <option key={room.id} value={room.id}>
                {room.room_no}
              </option>
            );
          })}
          {/* {house.rooms.map((room) => (
            <div key={room.id}>
              <img className="roomimg" src={room.image} />
              <h5>
                room-Name: <em>{room.name}</em>
              </h5>
              <h5>Description</h5>
              <p>
                <em className="text-center">{room.description}</em>
              </p>
              <h5>Ingredients</h5>
              <p>
                <em className="">{room.ingredients}</em>
              </p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default House