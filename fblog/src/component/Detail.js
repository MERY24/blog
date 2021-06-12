import {React, useEffect} from 'react'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import { useParams ,useHistory} from "react-router-dom";
import  useFet from "./useFet";


//css!!!!! delete a blog  that should do

//{title,image,content,auth}
const Detail=()=> {
    //blog specifique
    const {_id} = useParams();
//const {data:blog,loading,error}=useFet(`http://localhost:3001/blogs${_id}`)
const history=useHistory();
    const  hdr={
      'accept':'application/json',
      'Content-type':'application/json'
  }
useEffect(()=>{
  fetch('http://localhost:3001/blogs'+_id,hdr)
  .then(res=>res.json())
  .then(data=>console.log(data))
  .catch(err=>
    console.log(err))
},[])
    
    const useStyles=makeStyles({
        // image:{
        //     width:'100%' ,
        //         height :'100vh' , 
        //        backgroundImage:`url(${})` ,
        //        backgroundSize:'cover' , 
        //         backgroundRepeat:'no-repeat' , 
        //         display:'flex' ,
        //        // flexDirection:'column' , 
        //         justifyContent:'center' , 
        //         alignItems :'center' ,
        // },
        container:{
borderRadius:"30px",
        },
        })

    const classes=useStyles();
    
  



  //supp de blog
// const handleDelete=()=>{
//   fetch('http://localhost:3001/blogs/' + blog.id, {
//     method: 'DELETE'
//   }).then(() => {
//     history.push('/');
//   }) 
//   .catch(err => {
//    console.log(err);
//   })
// }
    

return (


<div>
  hello world
</div>


//         <Grid container justify="center" className={classes.container}>
//              <Grid item xs={12} sm={10} md={8}>

//    { error && <div>{ error } je suis plus qu'une idiote je suis une andouille  </div> }
// { loading && <div>loading ...</div> }

             

// { blog && (
//   <div>

// <IconButton onClick={handleDelete}><DeleteIcon  /></IconButton>

//            <Typography
//         variant="h2" 
//         style={{color: "#E32029",fontWeight: "bold"}}
//         gutterBottom
//         justify="center"
//       >

//            {blog.title}
//      </Typography> 

// {/* one fucking img tag or nothing this how it works edi wela kheli */}
//      <Paper elevation={5}>
//        <img src={blog.image} alt="rien"/>
//      </Paper>
 
//  <Typography
//         variant="h5" 
//         style={{color: "#E32029",fontWeight: "bold"}}
//         gutterBottom
//         justify="center"
//       >
//         BY {blog.author} hello
//      </Typography> 

//      <Typography
//         variant="h6" 
//         style={{color: "#E32029"}}
//         gutterBottom
//         justify="center"
//       >
//         trying to know if this works    {blog.content}
//      </Typography> 
// </div>
//      ) }
//      </Grid>
//    </Grid>
    )
}

export default Detail
