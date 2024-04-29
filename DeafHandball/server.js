const express = require('express');
const app = express();
const port = 3000;

// /schedule エンドポイントを定義する
app.get('/schedule', (req, res) => {
  // レスポンスを返す処理
  res.send('This is the schedule endpoint');
});

// サーバーを起動する
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});