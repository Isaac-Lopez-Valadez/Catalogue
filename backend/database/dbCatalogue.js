const mongoose=require('mongoose');

const URI ='mongodb://localhost/Catalogue';

mongoose.connect(URI,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
.then(db => console.log('Connect DB'))
.catch(err => console.log(err));

module.exports = mongoose;