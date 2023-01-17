module.exports = {
  getPosts
}

async function getPosts(req,res){
  const reqBody = req.body
  const reqParams = req.params

  res.send({reqBody , reqParams})
}
