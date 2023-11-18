const express = require("express");
const app = express();
const routes  = require('./routes/routes.js')

app.use(express.json());
app.use(routes.reqs)

function Server(PORT) {


  app.get('/', routes.getFoods)
  app.post('/add-food', routes.addFood)
  app.post('/update-food', routes.editFood)
  app.delete('/delete-food', routes.removeFood)



  app.listen(PORT, (err) => {
    let serv_string = "server running at the port:  "+ PORT
    err ? console.err(err) : console.log(serv_string);
  });
}


module.exports = {Server}
