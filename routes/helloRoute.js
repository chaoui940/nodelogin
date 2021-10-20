const helloRoute = (req,res,next) => {
  res.status(200).send('Hello world')
}

module.exports = helloRoute 