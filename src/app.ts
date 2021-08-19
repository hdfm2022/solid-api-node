import express from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);
app.use((err: Error, req, res, next) => {
    const errmessage = err.message;
    if (err instanceof SyntaxError && 'body' in err) {
        return res.status(400).send({ status: 400, message: errmessage }); // Bad request
    }
    next();
});

export { app } 