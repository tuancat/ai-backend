import app from "./app";

console.log("hello world");


const PORT: number = 7000;



app.listen(PORT, () =>{

    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
