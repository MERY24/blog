import { Grid, makeStyles,Paper } from "@material-ui/core"

const image=process.env.PUBLIC_URL+'/images/error.jpg' ; 

const useStyles=makeStyles({
    image:{
        width:'100%' ,
            height :'100vh' , 
            backgroundImage:`url(${image})` ,
            backgroundSize:'contain' ,
            // objectFit:"fill", 
            // overflow:"hidden",
            backgroundRepeat:'no-repeat' , 
            display:'flex' ,
            justifyContent:'center' , 
            alignItems :'center' ,
          alignSelf:"center",
            borderRadius:"30px",
    },
    container:{
        background: "linear-gradient(to top,rgb(38, 1, 63),transparent);",
    },
    })


const PNF = () => {
    const classes=useStyles();
    return ( 
        <Grid container justify="center" className={classes.container}>
             <Grid item xs={12} sm={10} md={8}>
  <Paper className={classes.image} elevation={5}>
      {/* {<img src={image}  alt="page not found" />} */}
  </Paper>
  where is the blank area
 </Grid>
        </Grid>
     );
}
 
export default PNF;