import Carde from "./Carde";
import { Grid}  from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {Link } from 'react-router-dom';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "80px",
    paddingRight:"80px",
    width:'100%',
    textAlign:'center',
    backgroundColor:' rgb(255, 231, 196)',
  },
  link:{
    textDecoration:"none",
  }
});

const CardCont=({blogs})=> {
    const classes = useStyles();
    return (
        
        <Grid
      container
      spacing={5}
      className={classes.gridContainer}
      justify="center" >
        {/*should've a map here dynamically fetch data  */}
        {blogs.map(blog => (
          
        <Grid item xs={12} sm={6} md={4} key={blog._id} >
          <Link to={`blogs/${blog._id}`} className={classes.link}>
          <Carde title={blog.title} auth={blog.author} snip={blog.snip} img={blog.image}/>
          </Link>
        </Grid>
        
         ) )}
    
        
        
    
      {/* <Grid item xs={12} sm={6} md={4}>
        <Carde title="ezio's" auth="ubisoft" snip="Stream or Download
Assassin’s Creed Origins (Original Game Soundtrack) | Music by Sarah Schachner | Label : Ubisoft Music (Ubiloud) " />
      </Grid>
    */}
    </Grid>

       
    )
}

export default CardCont
