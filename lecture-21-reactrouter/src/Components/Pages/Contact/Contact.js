import React from 'react'

function Contact() {
  return (
    <>
          <div className="container-md">

<div className="heading-cont m-auto">
  <h1 className="display-2 text-center">
    Pricing
  </h1>

  <p className="lead text-center text-wrap ">
        Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.
  </p>
</div>

<div className="row m-auto mt-5 justify-content-center card-wrapper">

  <div className="col-sm-12 col-md-4 mb-3">
    
    <div className="card border-info m-auto" style={{maxWidth: 19+"rem"}}>
      <div className="card-header">
        <h1 className="fs-3 text-center fw-normal">Free</h1>
      </div>
      <div className="card-body">
        <h3 className="display-6 fw-semibold text-center">
          $0<small className="text-body-secondary fw-light">/mo</small>
        </h3>
        <div className="card-text">
          <ul className="list-group text-center">
            <li className="list-group-item border-0 p-1">10 users included</li>
            <li className="list-group-item border-0 p-1">2 GB of storage </li>
            <li className="list-group-item border-0 p-1"> Email support</li>
            <li className="list-group-item border-0 p-1">Help center access</li>
          </ul>
        </div>
      </div>
      <button type="button" className="btn btn-outline-primary btn-lg mx-2 mb-2">Sign up for free</button>
    </div>

  </div>

  <div className="col-sm-12 col-md-4 mb-3">

    <div className="card w-100 border-info m-auto" style={{maxWidth: 19+"rem"}}>
      <div className="card-header">
        <h1 className="fs-3 text-center fw-normal">Pro</h1>
      </div>
      <div className="card-body">
        <h3 className="display-6 fw-semibold text-center">
          $15<small className="text-body-secondary fw-light">/mo</small>
        </h3>
        <div className="card-text">
          <ul className="list-group text-center">
            <li className="list-group-item border-0 p-1">20 users included</li>
            <li className="list-group-item border-0 p-1">10 GB of storage </li>
            <li className="list-group-item border-0 p-1">Priority email support</li>
            <li className="list-group-item border-0 p-1">Help center access</li>
          </ul>
        </div>
      </div>
      <button type="button" className="btn btn-primary btn-lg mx-2 mb-2">Get started</button>
    </div>

  </div>

  <div className="col-sm-12 col-md-4 mb-3">

    <div className="card w-100 border-primary m-auto" style={{maxWidth: 19+"rem"}}>
      <div className="card-header bg-primary">
        <h1 className="fs-3 text-center fw-normal text-white">Enterprise</h1>
      </div>
      <div className="card-body">
        <h3 className="display-6 fw-semibold text-center">
          $29<small className="text-body-secondary fw-light">/mo</small>
        </h3>
        <div className="card-text">
          <ul className="list-group text-center">
            <li className="list-group-item border-0 p-1">30 users included</li>
            <li className="list-group-item border-0 p-1">15 GB of storage </li>
            <li className="list-group-item border-0 p-1">Phone and email support</li>
            <li className="list-group-item border-0 p-1">Help center access</li>
          </ul>
        </div>
      </div>
      <button type="button" className="btn btn-primary btn-lg mx-2 mb-2">Contact us </button>
    </div>

  </div>

</div>

</div>
    </>
  )
}

export default Contact
