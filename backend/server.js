import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());
app.use('/home', (req, res) => {
    fetch('https://api.finage.co.uk/last/crypto/btcusd?apikey=API_KEY94NIXTIC8TA82XFRU7LCCBDAN8A4F6C3')
        .then(data => {
          console.log(data);
          res.send("Ok");
        })
})

app.listen(3000, () => {
    console.log("App listening on port 3000")
});

// export default app;