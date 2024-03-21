import { Link, useNavigate, useParams } from "react-router-dom";
import { LuDot } from "react-icons/lu";
import TotalPayment from "./TotalPayment";
import DeliveryDetail from "./DeliveryDetail";
import OrderProgress from "./OrderProgress";
import LogisticsDetails from "./LogisticsDetails";
import { useEffect, useState } from "react";
import BreadcrumbAdmin from "../components/BreadcrumbAdmin";
import OrderDetailsCard from "../components/OrderDetailsCard";
import OrderDetailsDataTable from "../components/OrderDetailsDataTable";
import { burgerImg, pizzaImg, spaghettiImg } from "../assets/data/images";
import { getOrderHistoryById } from "../helpers/data";


const columns = [
  {
    key: "name",
    name: "Dish",
  },
  {
    key: "price",
    name: "Price",
  },
  {
    key: "quantity",
    name: "Quantity",
  },
];

const dishesData = [
  {
    id: 1001,
    category_id: 4,
    restaurant_id: 901,
    name: "Italian Pizza",
    images: [pizzaImg],
    price: 79,
    type: "non-veg",
    tags: ["Pizza", "Hot & Spicy", "Meal", "Bread"],
    quantity: 16,
    review: {
      count: 231,
      stars: 4.5,
    },
    sale: {
      discount: 50,
      type: "percent",
    },
    is_popular: true,
  },
  {
    id: 1002,
    category_id: 2,
    restaurant_id: 902,
    name: "Veg Burger",
    price: 488,
    images: [burgerImg],
    type: "veg",
    tags: ["Burger", "Meal", "Bread"],
    quantity: 20,
    review: {
      count: 523,
      stars: 5,
    },
    sale: {
      discount: 5,
      type: "amount",
    },
    is_popular: true,
  },
  
  {
    id: 1005,
    category_id: 6,
    restaurant_id: 905,
    name: "Mix Salad",
    price: 645.2,
    images: [spaghettiImg],
    type: "non-veg",
    tags: ["Meal", "Hot & Spicy"],
    quantity: 0,
    review: {
      count: 4325,
      stars: 5,
    },
  },
 ]

const OrderDetails = () => {
  // const navigate = useNavigate();
  const { orderId } = useParams();

  const [order, setOrder] = useState();

  // useEffect(() => {
  //   (async () => {
  //     const foundOrder = await getOrderHistoryById("#" + orderId);
  //     if (!foundOrder) {
  //       navigate("/not-found");
  //     } else {
  //       setOrder(foundOrder);
  //     }
  //   })();
  // }, [orderId]);

  return (

    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin
          title="Order Details"
          subtitle="Order"
          link="/admin/orders"
        />
        <div className="rounded-lg border border-default-200">
          <div className="flex flex-wrap items-center gap-3 border-b border-default-200 p-6">
            <h4 className="text-xl font-medium text-default-900">
              Order {order && order.id.toUpperCase()}
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              <LuDot />
              <h4 className="text-sm text-default-600">September 23, 2023</h4>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <LuDot />
              <h4 className="text-sm text-default-600">3 Products</h4>
            </div>
            <a
              href="/admin/orders"
              className="ms-auto text-base font-medium text-primary"
            >
              Back to List
            </a>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              <OrderDetailsCard
                title="Billing Address"
                name="Jaylon Calzoni"
                address=" 2123 Parker st. Allentown, New Mexico 123456"
                email="jaylon.calzoni@mail.com"
                phoneNo="(123) 456-7890"
              />
              <OrderDetailsCard
                title="Shipping Address"
                name="Ryan Westervelt"
                address="2123 Parker st. Allentown, New Mexico 123456"
                email="ryanwestenvelt@mail.com"
                phoneNo="(123) 456-7890"
              />
              <TotalPayment />
              <DeliveryDetail />
              <div className="md:col-span-2 xl:col-span-3">
                <OrderProgress />

                <OrderDetailsDataTable columns={columns} rows={dishesData} />
              </div>
              <div className="md:col-span-2 xl:col-span-1">
                <LogisticsDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default OrderDetails;
