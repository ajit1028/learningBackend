import express from 'express';

const app = express();

// app.get('/',(req,res)=>{
//     res.send('server is ready');
// });

app.get('/api/jokes', (req,res)=>{
    const jokes = [
        { id: 1, title: "Programming Joke", content: "Why do programmers prefer dark mode? Because light attracts bugs!" },
        { id: 2, title: "Dad Joke", content: "Why couldn't the bicycle stand up by itself? It was two-tired!" },
        { id: 3, title: "Pun Joke", content: "I'm reading a book on anti-gravity. It's impossible to put down!" },
        { id: 4, title: "Animal Joke", content: "Why don't scientists trust atoms? Because they make up everything!" },
        { id: 5, title: "Food Joke", content: "Why did the tomato turn red? Because it saw the salad dressing!" }
      ];
      
      res.send(jokes);
      
});

const port = process.env.port || 3000;


app.listen(port, ()=>{
    console.log(`serve at http://localhost:${port}`);
}
);