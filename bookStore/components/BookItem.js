import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button} from "@mui/material";



const BookItem = ({title, id, author, imageurl}) => {   
//const BookItem = () => {       
    console.log("in BookItem", title);
    return (       
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>     
    );
};

// const BookItem = ({title, id, author, imageurl}) => {   
//     return (       
//         <Card sx={{ maxWidth: 345 }}>
//             <CardActionArea>
//                 <img src={imageurl} alt={title}/>
//                 <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                     {title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                    {author}
//                 </Typography>
//                 </CardContent>
//             </CardActionArea>
//             <CardActions>
//                 <Button size="small" color="primary">
//                 Share
//                 </Button>
//             </CardActions>
//         </Card>      
//     );
// };

export default BookItem;