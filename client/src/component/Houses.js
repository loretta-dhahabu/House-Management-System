import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Tenants from './Tenants';
import Header from "./Header";


function Houses ()
{
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    getHouses();
  }, []);

  async function getHouses() {
    let result = await fetch("/api/apartments");
    result = await result.json();
    setHouses(result);
  }

  let houseList = houses.map((house) => {
    return (
    <div className='housebody'>
      <div className="restbody" key={house.id}>
        <div className="container-fluid">
          <div className="card restcards">
            <img
              src={house.image}
              className="card-img-top restimages"
              alt={house.name}
            />
            <div className="card-body">
              <h5 className="card-title text-center">
                Card title{house.name}
              </h5>
              <p className="card-text text-center">{house.description}</p>
              <p className="card-text text-center">
                <strong>
                  <em>Price: </em>
                </strong>
                {house.price}
              </p>
              <Link
                to={`/apartments/${house.id}`}
                onClick={() => <Tenants key={house.id} />}
              >
                <button className="viewBtn">View More</button>
              </Link>
              {/* <div className="restaurant-details">
                <button
                  onClick={() => {
                    handleDelete(house.id);
                  }}
                  className="deleteBtn"
                >
                  DELETE
                </button>
                
              {/* </div>  */}
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  });
  return(
  <>
    <Header/>
    {houseList}
    </>
  )
  
}

export default Houses;