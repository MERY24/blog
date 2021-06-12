import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    maxHeight:400,
    borderRadius: "40px 25px" ,
    transform: 'translateY(5%)',
    '&:hover':{
        animation:'animateCard 0.3s linear' ,

        transform:'translateY(3%) scale(1.1)' ,
    } ,
    
  },
  media: {
    height: "200px",
  },
  '@global':{"@keyframes animateCard":{
    '0%' :{ transform:'translateY(5%) scale(1)' ,} ,
    
}}
});
/*rgb(255, 219, 177)*/

const Carde=({title,snip,auth,img})=> {
    const classes = useStyles();
    return (
        <div>
           <Card className={classes.root} elevation={4}>
      <CardActionArea>
        <CardMedia
          className={classes.media} //down here {img}
          image={img}
          title={title}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2"style={{color: "#E32029",fontWeight: "bold"}}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color: "#E32029"}}>
            {snip}
          </Typography>
          <Typography  variant="body2" component="p" style={{color: "#E32029",marginBottom:"10px",fontWeight: "bold"}}>
           By {auth}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card> 
        </div>
    )
}

export default Carde
