import React from 'react'
import './offersection.css'
import OfferPoster from '../../../Assets/Offer Poster.png'


function OfferSection() {
  return (
    <section className='my-[7rem] gird place-items-center mx-auto'>

      <div className='Offer-wrapper mx-auto py-[2.5rem] w-[92%]  bg-[#F8F8F8] rounded-xl'>

        <div className="offerBox mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-2">

          <div className="offer-Post">

              <div className='offer-Img mx-auto w-[90%] relative'>

                <img src={OfferPoster} className='block w-full h-full
                object-contain m-auto' alt="Offer Poster" />

                  <div className='Img-Off-text absolute'>
                    <h1 className='flex flex-wrap flex-col items-center justify-center'>
                      <span>From </span>
                      $49
                    </h1>
                  </div>
              </div>

          </div>

          <div className="offer-Text flex flex-col flex-wrap items-stretch justify-center ">

              <h1 className='Off-price flex flex-wrap items-center justify-start'>$49.00 <p className='opacity-45 ml-2 line-through'>$59.00</p></h1>
              
              <div className='Offer-link-wrp'>

                <a href="#" className='OfferLink'>
                  <h1>Pro2 Abstract Folded Pots</h1>
                </a>
                <p>Elegant pink origami design three-dimensional view and decoration co-exist. Great for adding a decorative touch to any room's decor. Wonderful accent piece for coffee tables or side tables.</p>
              </div>

              <div className='Off-count-warp my-3'>

                <div className='ProgressBar mx-auto bg-white overflow-hidden rounded-2xl'>
                  <span className='ProgressLine bg-[#D82552]  rounded-2xl h-[8px] w-[80%] block'></span>
                </div>
                <div className='Count-box my-6 grid grid-cols-12 gap-y-7'>

                <ul className='countdown-time col-span-12 xl:col-span-8 flex items-center justify-between'>
                  <li>
                    <p className='time-number'>123</p>
                    <p className='time-text'>Days</p>
                  </li>
                  <li>
                    <p className='time-number'>22</p>
                    <p className='time-text'>Hours</p>
                  </li>
                  <li>
                    <p className='time-number'>21</p>
                    <p className='time-text'>Minutes</p>
                  </li>
                  <li>
                    <p className='time-number'>47</p>
                    <p className='time-text'>Secondes</p>
                  </li>
                </ul>
                <div className='count-text flex items-center justify-center col-span-12 xl:col-span-4 text-center'>
                  <p className='text-[1.5rem] opacity-60'>
                    Remains until the <br />
                    end of the offer
                  </p>
                </div>
                </div>
              </div>

          </div>  {/* offerText End  */}

        </div> {/* grid End */}

      </div>

    </section>
  )
}

export default OfferSection
