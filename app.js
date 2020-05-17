const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://localhost/users');
const port = process.env.PORT || 3000;
const userRouter = express.Router();
const User = require('./models/userModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

userRouter.route('/users').post((req, res) => {
        const user = new User(req.body);
        user.save();
        return res.json(user);
    })
    .get((req, res) => {
        const { query } = req;
        User.find(query, (err, users) => {
            if (err) {
                return res.send(err);
            }
            res.json(users);

        });
    });

userRouter.route('/users/:userId').get((req, res) => {
    user.findById(req.params.userId, (err, user) => {
        if (err) {
            return res.send(err);
        }
        res.json(user);
    });
});


app.use('/api', userRouter);

app.listen(port, () => {
    console.log('listinin');
});