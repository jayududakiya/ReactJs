import React from "react";

import "./ClientReview.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Client1 from "./Asset/Client1.jpg";
import Client2 from "./Asset/Client2.jpg";
import Client3 from "./Asset/Client3.jpg";
import Client4 from "./Asset/Client4.jpg";
import Client5 from "./Asset/Client5.jpg";
import Client6 from "./Asset/Client6.jpg";
import Client7 from "./Asset/Client7.jpg";
import Client8 from "./Asset/Client8.webp";
import Client9 from "./Asset/Client9.jpg";

function ClientReview() {
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="heading-box d-flex flex-column justify-content-center align-items-center ">
          <h1 className="display-5">Album example</h1>
          <p className=" mt-2 fs-5 text-center fw-light lh-base text-body-secondary">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don’t simply skip over it entirely.
          </p>
          <p className="d-inline-flex gap-1 mt-2">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="button"
            >
              Main call to action
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-toggle="button"
              aria-pressed="true"
            >
              Secondary action
            </button>
          </p>
        </div>
      </header>

      <main>
        <div className="container-xl">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src={Client1} alt="..." />

                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>

                <div className="card-footer border-0 bg-white d-flex align-items-center justify-content-between">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-1"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-1"
                    >
                      Edit
                    </button>
                  </div>

                  <div className="text-body-secondary">9 mins</div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={Client2} alt="..." />

                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>

                <div className="card-footer border-0 bg-white d-flex align-items-center justify-content-between">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-1"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-1"
                    >
                      Edit
                    </button>
                  </div>

                  <div className="text-body-secondary">9 mins</div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={Client3} alt="..." />

                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>

                <div className="card-footer border-0 bg-white d-flex align-items-center justify-content-between">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-1"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-1"
                    >
                      Edit
                    </button>
                  </div>

                  <div className="text-body-secondary">9 mins</div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={Client4} alt="..." />

                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>

                <div className="card-footer border-0 bg-white d-flex align-items-center justify-content-between">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-1"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-1"
                    >
                      Edit
                    </button>
                  </div>

                  <div className="text-body-secondary">9 mins</div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={Client5} alt="..." />

                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>

                <div className="card-footer border-0 bg-white d-flex align-items-center justify-content-between">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-1"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-1"
                    >
                      Edit
                    </button>
                  </div>

                  <div className="text-body-secondary">9 mins</div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={Client6} alt="..." />

                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>

                <div className="card-footer border-0 bg-white d-flex align-items-center justify-content-between">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-1"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-1"
                    >
                      Edit
                    </button>
                  </div>

                  <div className="text-body-secondary">9 mins</div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={Client7} alt="..." />

                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>

                <div className="card-footer border-0 bg-white d-flex align-items-center justify-content-between">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-1"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-1"
                    >
                      Edit
                    </button>
                  </div>

                  <div className="text-body-secondary">9 mins</div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={Client8} alt="..." />

                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>

                <div className="card-footer border-0 bg-white d-flex align-items-center justify-content-between">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-1"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-1"
                    >
                      Edit
                    </button>
                  </div>

                  <div className="text-body-secondary">9 mins</div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={Client9} alt="..." />

                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>

                <div className="card-footer border-0 bg-white d-flex align-items-center justify-content-between">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-1"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-1"
                    >
                      Edit
                    </button>
                  </div>

                  <div className="text-body-secondary">9 mins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-100 bg-light mt-5">
        <div className="container-lg m-auto py-5">
          <div className="row">
            <div className="footer-data col-sm-12 col-md-10">
              <p className="text-md-start text-center">
                Album example is © Bootstrap, but please download and customize
                it for yourself!
              </p>
              <p className="text-md-start text-center pt-0">
                New to Bootstrap? <a href="#">Visit the homepage</a> or read our{" "}
                <a href="#">getting started guide.</a>
              </p>
            </div>

            <div className="footer-link col-sm-12 col-md-2 ms-md-auto">
              <a
                href="#"
                className="d-block p-sm-2 p-md-0 text-md-end text-center"
              >
                Back to top
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ClientReview;
