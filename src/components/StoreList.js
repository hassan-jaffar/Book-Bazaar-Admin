import "../css/StoreList.css";
import React from "react";
import { Link } from "react-router-dom";

function StoreList() {
  var store = [
    {
      image: "https://images.pexels.com/photos/626986/pexels-photo-626986.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "ABC Book Store",
      email: "bs1@gmail.com",
      contact: "XXXX-XXXXXXX",
      address: "Lahore, Pakistan",
    },
    {
      image: "https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "MRO Book Store",
      email: "bs2@gmail.com",
      contact: "XXXX-XXXXXXX",
      address: "Karachi, Pakistan",
    },
    {
      image: "https://images.pexels.com/photos/1329550/pexels-photo-1329550.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "XYZ Book Store",
      email: "bs3@gmail.com",
      contact: "XXXX-XXXXXXX",
      address: "Islamabad, Pakistan",
    },
  ];

  var stores = store.map((store) => (
    <div className="row text-start listscard">
      <div className="col-md-3">
        <img className="listimage" src={store.image} alt="" />
      </div>

      <div className="col-md-5">
        <p className="listname">{store.name}</p>
        <p className="listtext">{store.email}</p>
      </div>

      <div className="col-md-4">
        <p className="listtext">{store.contact}</p>
        <p className="listtext">{store.address}</p>
      </div>
    </div>
  ));
  return (
    <>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <Link
                to="/"
                class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none hrtag"
              >
                <span class="fs-5 d-none d-sm-inline sidebartitle">Book Bazaar</span>
              </Link>
              <ul
                class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li class="nav-item">
                  <Link
                    to="/storelist"
                    class="nav-link align-middle px-0 sidebartag"
                  >
                    <i class="fa-solid fa-building"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Admin Profile</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/storelist"
                    class="nav-link align-middle px-0 sidebartag"
                  >
                    <i class="fa-solid fa-building"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Store List</span>
                  </Link>
                </li>
                {/* <li class="nav-item">
                  <Link
                    to="/createstore"
                    class="nav-link align-middle px-0 sidebartag"
                  >
                    <i class="fa-solid fa-building"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Create Store</span>
                  </Link>
                </li> */}
                <li class="nav-item">
                  <Link
                    to="/storerequests"
                    class="nav-link align-middle px-0 sidebartag"
                  >
                    <i class="fa-solid fa-building"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Store Requests</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/storelist"
                    class="nav-link align-middle px-0 sidebartag"
                  >
                    <i class="fa-solid fa-building"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Log Out</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="row mt-5">
                  <div className="col-md-12">
                    <div class="input-group">
                      <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                      <button type="button" class="btn btn-outline-warning">search</button>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-12 text-center">
                    <h5 className="liststitle">Store List</h5>
                    {stores}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoreList;
