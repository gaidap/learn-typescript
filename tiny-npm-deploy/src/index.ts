#!/usr/bin/env node
import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello my friend.');
});

app.listen(3005, () => {
  console.log('Listening on port 3005');
});
