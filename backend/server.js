import express from 'express';

const app = express();
const port = process.env.PORT || 5000
//midlewares
// app.use();

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})