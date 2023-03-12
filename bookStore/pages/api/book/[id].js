import {updateBook, deleteBook, getBookFromId} from "../../../api-helper/controlers/books-controller";
import {ConnectToDatabase} from  "../../../api-helper/utils";

export default async function handler(req, res) {
    await ConnectToDatabase();

    if(req.method === "PUT"){
        return updateBook(req, res);
    } 
    else if (req.method === "DELETE"){
        return deleteBook(req, res);
    }
    else if (req.method === "GET"){
        return getBookFromId(req, res);
    }
}