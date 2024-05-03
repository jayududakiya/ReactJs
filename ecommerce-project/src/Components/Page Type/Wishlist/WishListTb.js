import React, { useRef, useState } from "react";
import "./WishListTb.css";

import WishListImg1 from "../../../Assets/Products Img/product17.jpg";
import WishListImg2 from "../../../Assets/Products Img/product9.jpg";


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

function WishListTb() {
    let [total , setTotal] = useState(null)
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
                                <button className="addToCart-btn inline-block border h-14 w-[150px] rounded-md bg-[#D51243] text-white font-medium text-base relative">
                                    Add To Cart
                                </button>
                            </div>
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
        </div>
      </section>
    </div>
  );
}

export default WishListTb;
