const express = require('express');
const  router  = require('./routes/routes');
 const cors = require('cors')
const app = express();


require('./db/db');
app.use(express.json());
app.use(cors())
app.use("/api/tasks",router)
app.listen('5000', console.log(`Server is running on the port 5000`))