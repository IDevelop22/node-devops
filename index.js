const express = require("express");
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT, REDIS_URL, REDIS_PORT, SESSION_SECRET } = require("./config/config");
const cors = require("cors");

const session = require("express-session");
const redis = require("redis")
const RedisStore = require("connect-redis")(session)
let redisClient = redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT
})

const app = express();
const postRouter = require("./routes/postRoutes");
const authRouter = require("./routes/authRoutes");

mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
        .then(()=> console.log("succesfully connected to db"))
        .catch((e)=>console.log(e));
app.use(cors());
app.enable("trust proxy");
app.use(session({
    store: new RedisStore({client: redisClient}),
    secret: SESSION_SECRET,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 60000
    }
}))
app.use(express.json())
app.get("/api/v1",(req,res)=>{
    res.send("<h2>Hi There!!!</h2>");
    console.log("Got something!");
})
app.use("/api/v1/posts",postRouter)
app.use("/api/v1/users",authRouter);

const port = process.env.PORT || 3000;
 app.listen(port,()=>console.log(`listening on Port : ${port}`));
