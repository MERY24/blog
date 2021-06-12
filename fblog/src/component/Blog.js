import './Blog.css';
import  useFet from "./useFet";
import CardCont from './CardCont'
import Typography from '@material-ui/core/Typography'


const Blog=()=>{
  //naming data blog 
  const {data:blogs,loading,error}=useFet('http://localhost:3001/blogs')
  
return(

<div>
{error && <div>{ error } la classe je crains a mort </div>}
{ loading && <div>loading ...</div> }
<Typography
        variant="h3" 
        color="textPrimary"
        component="h2"
        gutterBottom
        justify="center"
      >
        BigNova pour éguiser vos talents 
      </Typography>
      { blogs && <CardCont blogs={blogs} /> }
</div>
);

}
 
export default Blog;


