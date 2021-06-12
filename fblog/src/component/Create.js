import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded'


// some css my dear, it's missing 

const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block',
    },
    container:{
         backgroundColor:"grey",
        // width:"400px",
        height:"100vh",
    },
    btn:{
borderRadius:"35px",
backgroundImage: "linear-gradient(to right,#d61900,#bd1f27,#d61900 )",
	backgroundSize: "200%",
    transition: ".5s",
    '&:hover':{
        backgroundPosition: "right",
    }, 
},

bout:{
    display:'flex',
    justifyContent:"center", 
    alignSelf:"center",  
},

    
  })




const Create=()=> {

  const hlptxt="ce champs est obligatoire";

    const classes=useStyles();
    const history = useHistory
    
  const [title, setTitle] = useState('')
  const [res, setRes] = useState('')
  const [con, setCon] = useState('')
  const [aut, setAut] = useState('')
  const [ima, setIma] = useState('')

  const [titleError, setTitleError] = useState(false)
  const [resError, setResError] = useState(false)
  const [conError, setConError] = useState(false)
  const [autError, setAutError] = useState(false)
  const [imaError, setImaError] = useState(false)
 

  
  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setResError(false)
    setConError(false)
    setAutError(false)
    setImaError(false)
    
    if (title ==='') {
      setTitleError(true)
    }
    if (res ==='') {
      setResError(true)
    }
    if (con ==='') {
      setConError(true)
    }
    if (aut ==='') {
      setAutError(true)
      }
    if (ima ==='') {
      setImaError(true)
    
    }
   
    if (title && res && con && aut && ima) {
      
      const blog = { title, res,con,aut,ima };

    fetch('http://localhost:3001/blogs', {
      method: 'POST',
      headers: { 'accept':'application/json',
      'Content-type':'application/json'},
      body: JSON.stringify(blog)
    })
    .then((result) => {
      console.log(result);
      history.push('/');

    })
    .catch(err => {
     console.log(err)
    })
    } 
  }

    
    return (
             
              <Grid container justify="center" className={classes.container} >

            <Grid item xs={10} sm={7} md={7} >                  
      <Typography
        variant="h6" 
        color="textPrimary"
        component="h2"
        gutterBottom
        justify="center"
      >
        Créer Un Nouveau Blog
      </Typography>

<form action="/blog" noValidate autoComplete="off" onSubmit={handleSubmit} >
        <TextField className={classes.field}
          label="Titre"
          color="secondary" 
          required
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
          helperText={titleError ? hlptxt :null}
        />

      <TextField className={classes.field}
         label="Resumé" 
         color="secondary"  
         required
         onChange={(e) => setRes(e.target.value)}
         error={resError}
         helperText={resError ? hlptxt :null}
       />
        <TextField className={classes.field}
          
          label="Contenu De Votre Blog"
          placeholder="Déployez Votre Créativité"
          multiline
          color="secondary" 
          required
          onChange={(e) => setCon(e.target.value)}
          error={conError}
          helperText={conError ? hlptxt :null}
        />
        <TextField className={classes.field}
         
         label="Auteur" 
         color="secondary"
         required
         onChange={(e) => setAut(e.target.value)}
         error={autError}
         helperText={autError ? hlptxt :null}
       />
        <TextField className={classes.field}
         
         label="Image URL" 
         color="secondary" 
         required
         onChange={(e) => setIma(e.target.value)}
         error={imaError}
         helperText={imaError ? hlptxt :null}
       />

       <div className="classes.bout">
        <Button type="submit" variant="contained" className={classes.btn} endIcon={< ChevronRightRoundedIcon/>}> 
        Enregistrer 
      </Button>
      </div>

        </form>
        </Grid>
        </Grid>
      

    )
}

export default Create
