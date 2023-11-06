import express from "express";
import bp from "body-parser";
import serverless from "serverless-http";

const app = express();


const PORT = process.env.PORT || 4443;

const base = [
    {name: "Shoxruz", surname: "Abduraxmonov"},
    {name: "Beel", surname: "Gils"}
]

app.use(bp.json());

app.get("/", (req, res) => {
    res.json(base);
});

export const handler = serverless(app);

app.post("/push", (req, res) => {
    base.push(req.body)
    res.send("yangi malumot qo`shildi")
})
// app.listen(PORT, () => {
//     console.log("open localhost " + PORT);
// })
