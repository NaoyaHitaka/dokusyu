const sqlite3 = require('sqlite3').verbose();

// データベースに接続
const db = new sqlite3.Database('schedule.db');

// テーブルの作成
// db.serialize(() => {
  //db.run("CREATE TABLE IF NOT EXISTS schedule (id INTEGER PRIMARY KEY, date TEXT, time TEXT, category TEXT, location TEXT, note TEXT)");
//});
// データの挿入
//const insertQuery = "INSERT INTO schedule (date, time, category, location, note) VALUES (?, ?, ?, ?, ?)";
//const scheduleData = ['2024-04-29', '16:00~21:00', '大会', 'あきる野市秋川体育館', '東京都リーグ4部'];

db.run(insertQuery, scheduleData, function(err) {
  if (err) {
    return console.error('Error inserting schedule:', err.message);
  }
  console.log('Schedule inserted successfully');
});

// データベース接続を閉じる
db.close();
