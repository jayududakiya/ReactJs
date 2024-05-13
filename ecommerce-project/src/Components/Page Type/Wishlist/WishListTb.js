import React from "react";
import "./WishListTb.css";

import { useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import { REMOVE_WISHLIST } from "../../../redux/actions/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function WishListTb() {

  const backToHome = useNavigate()

  const wishItems = useSelector(state => state.wishReducer.wishList)
  const dispatch = useDispatch()
  const Remove_list = (id) => {
    // console.log(id);
    dispatch(REMOVE_WISHLIST(id))
  }

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
                        Add To Cart
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

                    {wishItems.map((item , ind) => {
                      let {firstProductImg,productName,Price,id} = item
                      return (

                        <tr key={ind} className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap px-2 py-4">
                          <div className="flex items-center">
                            <div className="h-32 w-32 flex-shrink-0 mx-auto">
                              <img
                                className="h-full w-full block mx-auto  object-cover"
                                src={firstProductImg}
                                alt={productName + "Img"}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap">
                          <h1 className="text-base font-semibold text-center">
                            {productName}
                          </h1>
                        </td>
                        <td className="whitespace-nowrap">
                          <h1 className="text-center text-base font-medium">
                            $ {Price}
                          </h1>
                        </td>
                        <td className="whitespace-nowrap">
                          <div className="">
                            <input
                              type="number"
                              id="InputQuantity"
                              min={1}
                              defaultValue={1}
                              className="block InputQuantitys mx-auto outline-none py-4 px-3 font-semibold border border-gray-300 rounded-md text-lg"
                            />
                          </div>
                        </td>
                        <td className="whitespace-nowrap">
                        <h1 className="text-center text-base font-medium">
                          {Price}
                          </h1>
                        </td>
                        <td className="whitespace-nowrap ">
                            <div className="flex items-center justify-center">
                                <button id="addToCart-btn" className="BtnCase inline-block border h-14 w-[150px] rounded-md bg-[#D51243] text-white font-medium text-base relative">
                                    Add To Cart
                                </button>
                            </div>
                        </td>
                        <td className="whitespace-nowrap ">
                            <div className="flex items-center justify-center">
                              <button onClick={()=> Remove_list(id)}>
                                  Remove
                              </button>
                            </div>
                        </td>
                      </tr>

                      )

                    })}

                  </tbody>
                </table>
              </div>

              {!wishItems.length ? <button className="Back-HomeBtn mx-auto transition-all flex items-center justify-evenly my-2" onClick={()=> backToHome("/")}>
                            <BsArrowLeft />
                            Back To Home
              </button> : ""}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WishListTb;
