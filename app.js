const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const port = process.env.PORT || 4000;

// Routes
const productRoutes = require("./routes/product");


// Connect to the database
mongoose.connect("mongodb://localhost/venten", { useNewUrlParser: true, useUnifiedTopology: true });
// mongodb+srv://node-shop:<password>@venten-vpqyt.mongodb.net/test?retryWrites=true&w=majority
// mongoose.connect(`mongodb+srv://node-shop:${process.env.MONGO_ATLAS_PW}@venten-vpqyt.mongodb.net/test?retryWrites=true&w=majority,`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
mongoose.Promise = global.Promise;
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Route Initialization
app.use("/product", productRoutes);


app.listen(port, () => console.log(`server running on port ${port}`));