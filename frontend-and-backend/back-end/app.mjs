import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res) => {
    const json = {
        name: 'John Doe',
        age: 30,
        city: 'New York'
    };
    console.log(json)
    return res.json(json)
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})