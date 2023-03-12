import mongoose from 'mongoose';
import {addBook, getAllBooks} from "../../api-helper/controlers/books-controller"
import {ConnectToDatabase} from "../../api-helper/utils";
export default async function handler(req, res) {


  await ConnectToDatabase();

  if (req.method === "GET"){
    getAllBooks(req,res);
  }

  if (req.method === "POST"){
    addBook(req,res);
  }
}
