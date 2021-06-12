const Blog = require('../models/blogSchema');


//functions to each req

const blogs=(req, res) => {
    Blog.find().sort({ createdAt: -1 })
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  }



  const blogs_create=(req,res)=>{
    const blog =new Blog(req.body)
    blog.save()
    .then(result=>{
      res.redirect("/blogs")
      console.log(`objet enregistré \n ${result}`)})
    .catch(err=>{console.log(err);});
    }


    const blogs_detail=(req, res) => {
        const id = req.params.id;
       console.log(id);
        Blog.findById(id)
          .then(result => {
            res.send(result);
          })
          .catch(err => {
            console.log(err);
          });
      }


      const blogs_delete=(req, res) => {
        const id = req.params.id;
        
        Blog.findByIdAndDelete(id)
          .then(result => {
            res.json({ redirect: '/blogs' }); //we cant make a redirect directly node so we pass a json to front and he handls it with data thing
            res.send(`objet supprimé ${result}`);
          })
          .catch(err => {
            console.log(err);
          });
      }


      module.exports={
          blogs,
          blogs_create,
          blogs_detail,
          blogs_delete
      }