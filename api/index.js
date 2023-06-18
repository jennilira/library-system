import express from "express"
import userRoutes from "./routes/users.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", userRoutes)
app.use("/add", userRoutes)
app.use("/getcatego", userRoutes)
app.use("/getlivros", userRoutes)
app.use("/addLivros", userRoutes)
app.use("/catego", userRoutes)
app.use("/livros", userRoutes)
app.use("/turmas", userRoutes)


//rotas de base

// app.use("/cat_Livro", userRoutes)


app.listen(8800)