import { Grid } from "@mui/material";
import React from "react";
import BookItem from "./BookItem";

// const BookList = ({data}) => {
//     console.log("this is BookList data:", data);
  

//     return(
//         BookItem ()//( {data});
//     );
// };




const BookList = ({data}) => {
    console.log("this is BookList data:", data.books);

    // let keys = [];
    // for (let value in data.books) {
    //     keys.push(value);
    //   }
      
    // console.log("this is BookList keys data:", keys);
     
     return(
         <div>
            <Grid container>  
                    {data.books.map((book)  => (
                        <Grid item key={book._id}>
                            < BookItem
                                title={book.title}
                                author={book.author}
                                id={book._id}
                                imageurl={book.imageurl}/>
                        </Grid>                
                    ))}
            </Grid>   
         </div>
     );
 };
// const BookList = ({book}) => {
//     console.log("this is BookList data:", book);
//      return (
//          <div>
//              {data  &&  
//                  <Grid container>
//                      {                
//                          data.map((book) => {
//                          <Grid item key={book._id}>
//                              <BookItem 
//                                  title={book.title} 
//                                  author={book.author} 
//                                  id={book._id} 
//                                  imageurl={book.imageurl}/>
//                          </Grid>
//                      })}
//                  </Grid>
//              }
//          </div>
//      );
//  };
 
export default BookList;