import axios from "axios";
import BookList from "../../components/BookList"


export const getAllBooks = async () => {
    const res = await axios.get("http://localhost:3000/api/books");    
    if(res.status !== 200) {
        return new Error("Internal Server Error");
    }
    const data = await res.data?.books;

    return data;
};


export const getFeaturedBooks = async () => {
    
    const books = await getAllBooks();
    
	if(books.length == 0) {
        return [];
    }

    const featuredBooks = books.filter((book) => book.featured === true);
    console.log("in getFeaturedBooks", featuredBooks);
    return featuredBooks;
};



// export const getFeaturedBooks = async () => {
//     //let data = [];
//     //const books = await getAllBooks();
//     //const res = await fetch('http://localhost:3000/api/books');
//     await fetch('http://localhost:3000/api/books').then(function (response) {
// 	// The API call was successful!
// 	return response.json();
// }).then(function (data) {
// 	// This is the JSON from our response
// 	console.log("test data from utils:", data);  
//     return data;
// })
  
 // console.log("res.json:", data);
  //return data;


    // if(res.status !== 200) {
    //     return new Error("Internal Server Error");
    // }
    // const books = await res.data?.books;

    // //return data;
    // console.log("in getFeaturedBooks", books);
    // if(books?.length == 0) {
    //     return [];
    //}

    // const featuredBooks = books.filter((book) => book.featured === true);
    // console.log("in getFeaturedBooks2 ", featuredBooks);
    // return featuredBooks;

    //return books;
//};