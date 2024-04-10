import React from "react";

// add using module
import Custom from "../Style/Custom.module.css";

const PTags = () => {
  return (
    <>
      <p className={Custom.p}>
        1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque
        qui tempore corrupti consequatur totam ullam, at, dolore aspernatur quo
        quae iusto facere dolor eius laudantium, unde nostrum laboriosam aut?
      </p>
      <p className={Custom.p2}>
        2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque
        qui tempore corrupti consequatur totam ullam, at, dolore aspernatur quo
        quae iusto facere dolor eius laudantium, unde nostrum laboriosam aut?
      </p>
      <p className={Custom.p3}>
        3.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque
        qui tempore corrupti consequatur totam ullam, at, dolore aspernatur quo
        quae iusto facere dolor eius laudantium, unde nostrum laboriosam aut?
      </p>
      <p>
        4.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque
        qui tempore corrupti consequatur totam ullam, at, dolore aspernatur quo
        quae iusto facere dolor eius laudantium, unde nostrum laboriosam aut?
      </p>
      <p className={Custom.pera}>
        5.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque
        qui tempore corrupti consequatur totam ullam, at, dolore aspernatur quo
        quae iusto facere dolor eius laudantium, unde nostrum laboriosam aut?
      </p>
    </>
  );
}

const OrderList = () => {
  return (
    <ol className={Custom.List}>
      <li>item</li>
      <li>item</li>
      <li>item</li>
    </ol>
  );
}

export { PTags , OrderList };
