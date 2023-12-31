const express = require("express");
const app = express();
const db = require('./models'); 
const userRoutes=require('./routes/user')
const taskRoutes=require('./routes/task')
const profilRoutes=require('./routes/profil')
const cors = require('cors');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/',userRoutes);
app.use('/',taskRoutes);
app.use('/',profilRoutes);
app.use(cors());

db.sequelize.sync().then(() => {
    app.listen(3000, () => console.log("Server listening on port 3000"));
});
