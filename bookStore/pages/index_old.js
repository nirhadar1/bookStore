//import { getFeaturedBooks } from "../api-helper/frontend/utils";
// import BookList from "../components/BookList";

//  function Home() {
//     //let books2 = getFeaturedBooks();

//     let books2 = [];
//     books2 = getData();
//     console.log("This is Home books data:",books2);
    
//     return <BookList data = {books2}/>;
// }


// const getFeaturedBooks = async () => {
//   //const books = await getAllBooks();
//   //
//   const res = await fetch('http://localhost:3000/api/books');
//   if(res.status !== 200) {
//       return new Error("Internal Server Error");
//   }
//   const books = await res.data?.books;

//   //return data;
//   console.log("in getFeaturedBooks", books);
//   if(books?.length == 0) {
//       return [];
//   }

//   // const featuredBooks = books.filter((book) => book.featured === true);
//   // console.log("in getFeaturedBooks2 ", featuredBooks);
//   // return featuredBooks;

//   return books;
// };



// const   getData = async () => {
//   let response = [];
//   let data = [];
//   //await fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
//   await fetch('http://localhost:3000/api/books').then(function (response) {
// 	// The API call was successful!
// 	return response.json();
// }).then(function (data) {
// 	// This is the JSON from our response
// 	console.log("test data:", data);  
// })
  
//   console.log("res.json:", data);
//   return data;
// };


// // async function getData() {
// //   let response = [];
// //   let data = [];
// //   //await fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
// //   await fetch('http://localhost:3000/api/books').then(function (response) {
// // 	// The API call was successful!
// // 	return response.json();
// // }).then(function (data) {
// // 	// This is the JSON from our response
// // 	console.log("test data:", data);  
// // })
  
// //   console.log("res.json:", data);
// //   return data;
// // };

// // async function getData() {
// //   const res = await fetch('http://localhost:3000/api/books');
// //   // The return value is *not* serialized
// //   // You can return Date, Map, Set, etc.

// //   // Recommendation: handle errors
// //   if (!res.ok) {
// //     // This will activate the closest `error.js` Error Boundary
// //     throw new Error('Failed to fetch data');
// //   }

// //   console.log("res.json:", res);
// //   return res;
// // }


function Home({}) {
  books = getFeaturedBooks();
  return <BookList data = {books}/>;
}


// function Home({}) {
//   //console.log(books);
//   return <div>Home</div> ;
// }
export default Home;

export const getStatProps = async () => {
    const books = await getFeaturedBooks();

    console.log("props book", books);
    return {      
      props: {
        books,
      },
    };
};
