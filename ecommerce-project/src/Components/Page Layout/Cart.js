import React , { useRef, useState } from 'react'

import './Cart.css'

import WishListImg1 from "../../Assets/Products Img/product17.jpg";
import WishListImg2 from "../../Assets/Products Img/product9.jpg";


const wishItems = [
  {
    img: WishListImg1,
    itemName: "Frederick Valdez",
    itemPrice: 90,
  },
  {
    img: WishListImg2,
    itemName: "Carolyn Goodwin",
    itemPrice: 50,
  },
];


function Cart() {
  let [total , setTotal] = useState([])
  const QuantityCount = useRef(null)
  return (
    <div className="sm:container mx-auto">
      <section className="mx-auto w-full py-20">

        <div className="mt-6 flex flex-col">

          <div className="overflow-x-auto ">

            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">

              <div className="overflow-hidden border border-gray-200 ">

                <table className="min-w-full divide-y divide-gray-200">

                  <thead>
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-lg capitalize font-medium"
                      >
                        <span>Images</span>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-lg capitalize font-medium"
                      >
                        Courses
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-lg capitalize font-medium"
                      >
                        Unit Price
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-lg capitalize font-medium"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-lg capitalize font-medium"
                      >
                        Total
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-lg capitalize font-medium"
                      >
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {wishItems.map((WItem, ind) => {
                                        
                        function QuantityCountPrice () {
                            const QInput = QuantityCount.current;
                            let QValue =  QInput.value;
                            let Total = QValue * WItem.itemPrice;
                            setTotal(total = Total)
                        }

                      return (
                        <tr key={ind} className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap px-2 py-4">
                          <div className="flex items-center">
                            <div className="h-32 w-32 flex-shrink-0 mx-auto">
                              <img
                                className="h-full w-full block mx-auto  object-cover"
                                src={WItem.img}
                                alt={WItem.itemName + "Img"}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap">
                          <h1 className="text-base font-semibold text-center">
                            {WItem.itemName}
                          </h1>
                        </td>
                        <td className="whitespace-nowrap">
                          <h1 className="text-center text-base font-medium">
                            $ {WItem.itemPrice}
                          </h1>
                        </td>
                        <td className="whitespace-nowrap">
                          <div className="">
                            <input
                              type="number"
                              id="InputQuantity"
                              min={1}
                              defaultValue={1}
                              ref={QuantityCount}
                              onChange={QuantityCountPrice}
                              className="block InputQuantitys mx-auto outline-none py-4 px-3 font-semibold border border-gray-300 rounded-md text-lg"
                            />
                          </div>
                        </td>
                        <td className="whitespace-nowrap">
                        <h1 className="text-center text-base font-medium">
                            $ {(total == null) ? WItem.itemPrice : total}
                          </h1>
                        </td>
                        <td className="whitespace-nowrap ">
                            <div className="flex items-center justify-center">
                                <a href="/">
                                    Remove
                                </a>
                            </div>
                        </td>
                      </tr>
                      )
                    })}
                  </tbody>

                </table>


              </div>

            </div>

          </div>
          {/* End For Table Div */}
          <div className='sm:container mx-auto pt-8'>
            <ul className='flex flex-col md:flex-row items-stretch justify-between gap-y-3'>
              <li className='flex flex-col sm:flex-row items-stretch justify-start gap-x-3 gap-y-3'>
                <input type="text" name="" id="" placeholder='Coupon code' className='text-black text-xl py-2.5 pl-2  rounded-md outline-none border ' />
                <button id='Coupon-BTN' className='BtnCase text-white bg-[#D51243] text-lg font-semibold px-2.5 rounded-md py-2.5 '>
                  Apply Coupon
                </button>
              </li>
              <li className='flex items-stretch justify-start'>
                <button id='Coupon-BTN' className='BtnCase text-white bg-[#D51243] text-lg font-semibold px-4 rounded-md py-2.5 '>
                  Update cart
                </button>
              </li>
            </ul>
            <div className='CartTotals pt-5 grid grid-cols-12 '>
              <ul className='col-span-12 md:col-start-8 md:col-end-[-1]'>
                <li>
                    <h1 className='font-normal text-2xl py-4'>Cart Totals</h1>
                </li>
                <li className='border '>
                  <p className='flex items-center justify-between text-base py-3.5 px-4' ><span>Subtotal</span> <span>$ 70.00</span></p>
                </li>
                <li className='border'>
                  <p className='flex items-center justify-between text-base py-3.5 px-4' ><span>Total</span> <span>$ 70.00</span></p>
                </li>
                <li className='mt-4'>
                <button id='Coupon-BTN' className='BtnCase text-white bg-[#D51243] text-lg font-semibold px-4 rounded-md py-2.5 '>
                  Proceed to Checkout 
                </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart
