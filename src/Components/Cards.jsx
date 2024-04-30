import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Cards = () => {
  return (

   <Card sx={{maxWidth: 345, backgroundColor:"gray"}}>
   
    <CardMedia 
   component="img"
   alt="demo picture"
   height="140"
   image="https://i.guim.co.uk/img/media/f293e1dde4a0db207ade95e131ef792eb7f0f460/107_0_1799_1080/master/1799.jpg?width=1200&quality=85&auto=format&fit=max&s=1612d65f6dd77c9a738bc074910dda7c"
   />

   <CardContent>
        <Typography gutterBottom  variant="h5" component="div">
         ABCDEF
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
     

      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    
 
</Card>

   
  )
}

export default Cards