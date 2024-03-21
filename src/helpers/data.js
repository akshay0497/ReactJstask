// import { sleep } from "@/utils";
import { orderHistoryData } from '../assets/data/other';
import {sleep} from '../utils/promise'

export const getOrderHistoryById = async (id) => {
  // You can fetch data from your server here
  await sleep(200);
  return orderHistoryData.find((order) => order.id == id);
};
