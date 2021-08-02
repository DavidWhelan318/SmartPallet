const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
const db = require('../repository/SmartPallet');
const User = db.User;

passport.use(new LocalStrategy(
   function(username, password, done) {
       User.findOne({
           attributes: ['id', 'role', 'password'],
           where: {
               username: username
           }
       }).then(user => {
           if(!user)
               return done(null, false);
           if(!bcrypt.compareSync(password, user.password))
               return done(null, false);
           user = user.toJSON();
           delete user.password;
           return done(null, user);
       }).catch(err => {
            return done(err);
       });
   }
));

var opts = {
    secretOrKey: process.env.SECRETKEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

passport.use(new JwtStrategy(opts , function (jwt_payload, done) {
    User.findByPk(jwt_payload.id, {attributes: ['id', 'role']})
            .then(user => {
                if(!user)
                    return done(null, false);
                return done(null, user);
            }).catch(err => {
                return done(err);
            });
}));