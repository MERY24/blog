const express=require('express');
const blogController = require('../controllers/blogControl');

const router=express.Router();


// lists all blogs from newest
 
router.get('/', blogController.blogs);

//registring a new obj works like hell 

router.post('/',blogController.blogs_create);

//finds a specific blog passed in url param

router.get('/:id',blogController.blogs_detail );

// deletes a specific blog passed in url param
  
router.delete('/:id',blogController.blogs_delete);




/***********************************************************************/
//first try hard coded ,useless now 

// router.get('/blog', (req, res) => {
//     const blog = new Blog({
//       title: 'new 1',
//       snip: 'blog',
//       content: 'merde alorsg' ,
//       author:"not me ofc",
//       image:"oh no"
//     })
  
//     blog.save()
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       console.log(err);
//     });
    
//   });

  
 // finding a specific blog hard coded, not needed 

//   router.get('/singleblog', (req, res) => {
//     Blog.findById('60bc604f45264435a821495e')
//       .then(result => {
//         res.send(result);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });

/***********************************************************************/



  
module.exports=router;