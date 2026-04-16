import React from "react";
import AllCompo from "../components/AllCompo";
import Footer from "../components/Footer";
import { CartProvider } from "react-use-cart";
import { useContext } from "react";
import { apiValue } from "../Data/AllData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "react-use-cart";


function Page() {
  const data = useContext(apiValue);
  const {addItem} = useCart();
  const [search,setSearch] = useState(0);
  const getValue = (event)=>{
    setSearch(event.target.value);
  }
  return (
    <div>
      <AllCompo />
      <div className="section properties">
        <div className="container">
          <div className="row properties-box">
            <div className="col-md-10 m-auto"> 
                <form> 
                    <input onChange={getValue} className="form-control  mb-5" placeholder="Search"></input>
                </form>
            </div>
            {data.map((item) => {
              return search===0? (
                <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv">
                  <div className="item">
                    <a href="property-details.html">
                      <img src={item.images[0]} alt="" />
                    </a><span className="category">{item.brand}</span>
                    <h6>$2.264.000</h6>
                    <h4>
                      <a href="property-details.html">
                        {item.title}
                      </a>
                    </h4>
                    <ul>
                      <li>
                        ID: <span>{item.id}</span>
                      </li>
                      <li>
                        category: <span>{item.category}</span>
                      </li>
                      <li>
                        Rating: <span>{item.rating} of 5</span>
                      </li>
                      
                    </ul>
                    <div className="main-button">
                      <Link to={`/singleProduct/${item.id}`}>Details</Link>
                      <button className="btn btn-dark d-block w-100 mt-3" onClick={()=>addItem(item)}>Add To Cart</button>
                    </div>
                  </div>
                </div>

              ):item.id === search?(
                   <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv">
                  <div className="item">
                    <a href="property-details.html">
                      <img src={item.images[0]} alt="" />
                    </a><span className="category">{item.brand}</span>
                    <h6>$2.264.000</h6>
                    <h4>
                      <a href="property-details.html">
                        {item.title}
                      </a>
                    </h4>
                    <ul>
                      <li>
                        ID: <span>{item.id}</span>
                      </li>
                      <li>
                        category: <span>{item.category}</span>
                      </li>
                      <li>
                        Rating: <span>{item.rating} of 5</span>
                      </li>
                      
                    </ul>
                    <div className="main-button">
                      <Link to={`/singleProduct/${item.id}`}>Details</Link>
                    </div>
                  </div>
                </div>

              ):item.title.toLowerCase().includes(search.toLowerCase())?(
                   <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv">
                  <div className="item">
                    <a href="property-details.html">
                      <img src={item.images[0]} alt="" />
                    </a><span className="category">{item.brand}</span>
                    <h6>$2.264.000</h6>
                    <h4>
                      <a href="property-details.html">
                        {item.title}
                      </a>
                    </h4>
                    <ul>
                      <li>
                        ID: <span>{item.id}</span>
                      </li>
                      <li>
                        category: <span>{item.category}</span>
                      </li>
                      <li>
                        Rating: <span>{item.rating} of 5</span>
                      </li>
                      
                    </ul>
                    <div className="main-button">
                      <Link to={`/singleProduct/${item.id}`}>Details</Link>
                    </div>
                  </div>
                </div>
            ):null
            })}

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function AllProduct() {
  return (
    <CartProvider>
      <Page />
    </CartProvider>
  );
}

export default AllProduct;
