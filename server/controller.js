const db = require('../database/models/index.js');
const passport = require('./middleware/passport.js');
const Promise = require('bluebird');

const post = {};
const get = {};
const patch = {};

post.user = (req, res) => {
  // console.log("recieved post for user", req.body)
  res.status(200);
  res.end();
};

post.signup = (req, res) => {
  // db.saveUser(req.body)
  //   .then((result) => {
  //     result === false ? res.sendStatus(422) : res.sendStatus(200);
  //   })
  // db.sequelize.query(`INSERT INTO "Users" ("firstName", "lastName", "email", "username", "password") VALUES ('William', 'Ha', 'will.haha@gmail.com', 'willhaha', '123')`)
    // .then((result) => { console.log('query was successful'); });
    console.log(req.body);
    res.status(200);
    res.end();
};

post.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err || !user) {
      res.status(422).send(info);
    } else {
      user.password = undefined;
      user.salt = undefined;
      req.login(user, (error) => {
        if (error) {
          console.log('error logging in', error);
          res.status(400).send(error);
        } else {
          res.json(user);
        }
      });
    }
  })(req, res, next);
};

get.logout = (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
};

// THIS IS AN EXAMPLE OF QUERY STRING
// get.user = (req, res) => {
//   db.sequelize.query(`select * from "Users"`, { type: db.sequelize.QueryTypes.SELECT})
//   .then(users => console.log(users))
//   .catch(err => console.log('error'))
// }

module.exports.get = get;
module.exports.post = post;
module.exports.patch = patch;
