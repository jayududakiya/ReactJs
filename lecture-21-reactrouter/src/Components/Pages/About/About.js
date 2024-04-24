import React from "react";
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import indianFootball from './Asset/indian-football-time.webp'
import indianArmy from './Asset/indian-army.png'

function About() {
  return (
    <>
      <main>
        <div className="container-md m-auto">
          <div className="card-wrapper row align-items-center justify-content-center m-auto mb-5">
            <div className="col-md-6">
              <div className="card mb-3 mx-auto" style={{maxWidth:540+"px"}}>
                <div className="row g-0">
                  <div className="col-md-7">
                    <div className="card-body">
                      <h6 className="fw-bolder fs-6 t-color">World</h6>

                      <h5 className="card-title fs-2 text-family">Featured post</h5>
                      <p className="text-secondary">Nov 12</p>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <p className="card-text d-flex align-items-center">
                        <a href="#">Continue reading </a> 
                      </p>
                    </div>
                  </div>

                  <div className="col-md-5 d-none d-md-block ms-auto">
                    <img
                      src={indianArmy}
                      className="img-fluid rounded-end"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card mb-3 mx-auto" style={{maxWidth:540+"px"}}>
                <div className="row g-0">
                  <div className="col-md-7 ">
                    <div className="card-body">
                      <h6 className="fw-bolder fs-6">Design</h6>

                      <h5 className="card-title fs-2 text-family">Post title</h5>
                      <p className="text-secondary">Nov 11</p>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <p className="card-text d-flex align-items-center">
                        <a href="#">Continue reading </a> 
                      </p>
                    </div>
                  </div>

                  <div className="col-md-5 d-none d-md-block ms-auto">
                    <img
                      src={indianFootball}
                      className="img-fluid rounded-end"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-contain row m-auto px-0 py-3">
            <div className="col-12 col-md-8">
              <div className="blog-body">
                <h1 className="fs-2 text-family fst-italic">From the Firehose</h1>

                <hr />

                <h1 className="text-family display-4">Sample blog post</h1>
                <p>
                  January 1, 2021 by <a href="#">Mark</a>
                </p>

                <p>
                  This blog post shows a few different types of content that's
                  supported and styled with Bootstrap. Basic typography, lists,
                  tables, images, code, and more are all supported as expected.
                </p>

                <hr />
                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>

                <h2 className="text-family fs-1">Blockquotes</h2>

                <p>This is an example blockquote in action:</p>

                <p>Quoted text goes here.</p>

                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>

                <h2 className="text-family fs-1">Example lists</h2>
                <p>
                  This is some additional paragraph placeholder content. It's a
                  slightly shorter version of the other highly repetitive body
                  text used throughout. This is an example unordered list:
                </p>

                <ul>
                  <li>First list item</li>
                  <li>Second list item with a longer description</li>
                  <li>Third list item to close it out</li>
                </ul>

                <p className="m-0 p-2">And this is an ordered list:</p>

                <ol className="list-group list-group-numbered">
                  <li className="list-group-item border-0">First list item</li>
                  <li className="list-group-item border-0">
                    Second list item with a longer description
                  </li>
                  <li className="list-group-item border-0">
                    Third list item to close it ou
                  </li>
                </ol>

                <p className=" m-0 p-2">And this is a definition list:</p>

                <ol className="list-group">
                  <li className="list-group-item border-0 d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        HyperText Markup Language 
                      </div>
                      The language used to describe and define the content of a
                      Web page
                    </div>
                  </li>
                  <li className="list-group-item border-0 d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Cascading Style Sheets</div>
                      Used to describe the appearance of Web content
                    </div>
                  </li>
                  <li className="list-group-item border-0 d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">JavaScript</div>
                      The programming language used to build advanced Web sites
                      and applications
                    </div>
                  </li>
                </ol>

                <h1 className="text-family fw-bold display-6">
                  Inline HTML elements
                </h1>

                <p>
                  HTML defines a long list of available inline tags, a complete
                  list of which can be found on the
                  <a href="#"> Mozilla Developer Network.</a>
                </p>

                <ul>
                  <li>
                    <strong>To bold text</strong>, use
                    <code>&lt;strong&gt;</code>.
                  </li>

                  <li>
                    <em>To italicize text</em>, use <code>&lt;em&gt;</code>.
                  </li>

                  <li>
                    Abbreviations, like
                    <abbr title="HyperText Markup Language">HTML</abbr> should
                    use <code>&lt;abbr&gt;</code>, with an optional
                    <code>title</code> attribute for the full phrase.
                  </li>

                  <li>
                    Citations, like <cite>— Mark Otto</cite>, should use
                    <code>&lt;cite&gt;</code>.
                  </li>

                  <li>
                    <del>Deleted</del> text should use <code>&lt;del&gt;</code>
                    and <ins>inserted</ins> text should use
                    <code>&lt;ins&gt;</code>.
                  </li>

                  <li>
                    Superscript <sup>text</sup> uses <code>&lt;sup&gt;</code>
                    and subscript <sub>text</sub> uses <code>&lt;sub&gt;</code>.
                  </li>
                </ul>

                <p>
                  Most of these elements are styled by browsers with few
                  modifications on our part.
                </p>

                <h2 className="text-family fs-1 ">Heading</h2>

                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>

                <h2 className="text-family fs-1">Sub-heading</h2>

                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>

                <p className="font-monospace">Example code block</p>

                <p>
                  This is some additional paragraph placeholder content. It's a
                  slightly shorter version of the other highly repetitive body
                  text used throughout.
                </p>

                <h1 className="text-family display-3">Another blog post</h1>

                <p className="text-secondary">
                  December 23, 2020 by <a href="#"> Jacob</a>
                </p>

                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>

                <p>
                  Longer quote goes here, maybe with some
                  <span className="fw-bolder"> emphasized text</span> in the middle
                  of it.
                </p>

                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4 ">
              <aside className="position-sticky top-0 end-0">
                <div className="about-box text-body-emphasis bg-body-secondary rounded p-4 mt-2 w-100 ">
                  <h2 className="text-family fst-italic fs-3">About</h2>
                  <p className="lead lh-base fs-6">
                    Customize this section to tell your visitors a little bit
                    about your publication, writers, content, or something else
                    entirely. Totally up to you.
                  </p>
                </div>
              </aside>
            </div>
          </div>

          <div className="row second-contain m-auto">
            <div className="col-12 col-md-8">
              <h2 className="text-family fs-1">Example table</h2>
              <p>And don't forget about tables in these posts:</p>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Upvotes</th>
                    <th scope="col">Downvotes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alice</td>
                    <td>10</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>Bob</td>
                    <td>4</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Charlie</td>
                    <td>7</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>Totals</td>
                    <td>21</td>
                    <td>23</td>
                  </tr>
                </tbody>
              </table>

              <p>
                This is some additional paragraph placeholder content. It's a
                slightly shorter version of the other highly repetitive body
                text used throughout.
              </p>

              <h1 className="text-family display-4">New feature</h1>
              <p className="text-secondary">
                December 14, 2020 by <a href="#">Chris</a>
              </p>

              <p>
                This is some additional paragraph placeholder content. It has
                been written to fill the available space and show how a longer
                snippet of text affects the surrounding content. We'll repeat it
                often to keep the demonstration flowing, so be on the lookout
                for this exact same string of text.
              </p>

              <ul className="ms-5">
                <li>First list item</li>
                <li>Second list item with a longer description</li>
                <li>Third list item to close it out</li>
              </ul>

              <p className="mb-5">
                This is some additional paragraph placeholder content. It's a
                slightly shorter version of the other highly repetitive body
                text used throughout.
              </p>

              <p className="button-group mb-5">
                <button
                  type="button"
                  className="btn  btn-outline-primary rounded-pill "
                >
                  Order
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-pill"
                >
                  Newer
                </button>
              </p>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-4">
                <h4 className="fst-italic">Archives</h4>

                <ol className="list-unstyled mb-0">
                  <li>
                    <a href="#">March 2021</a>
                  </li>
                  <li>
                    <a href="#">February 2021</a>
                  </li>
                  <li>
                    <a href="#">January 2021</a>
                  </li>
                  <li>
                    <a href="#">December 2020</a>
                  </li>
                  <li>
                    <a href="#">November 2020</a>
                  </li>
                  <li>
                    <a href="#">October 2020</a>
                  </li>
                  <li>
                    <a href="#">September 2020</a>
                  </li>
                  <li>
                    <a href="#">August 2020</a>
                  </li>
                  <li>
                    <a href="#">July 2020</a>
                  </li>
                  <li>
                    <a href="#">June 2020</a>
                  </li>
                  <li>
                    <a href="#">May 2020</a>
                  </li>
                  <li>
                    <a href="#">April 2020</a>
                  </li>
                </ol>
              </div>

              <div className="p-4">
                <h4 className="fst-italic">Elsewhere</h4>

                <ol className="list-unstyled">
                  <li>
                    <a href="#">GitHub</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
