import express from "express";
import bodyParser from 'body-parser';
import orm from "orm";
import {startSql, createProfile, getProfile} from "./profiles";

const app =  express();
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/profile/:id', async (req, res) => {
    const id = req.params.id;
    res.json(await getProfile(id));
});

app.post('/profile', async (req, res) => {
    const body = req.body;
    res.json(await createProfile(body));
});

app.listen(3000, async () => {
    startSql();   
    console.log('Example app listening on port 3000!')
});