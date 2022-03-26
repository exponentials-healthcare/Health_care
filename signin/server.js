const express = require('express')
const session = require('express-session');
// const path = require('path')
// const bodyParser = require('body-parser')
const mongoose = require('mongoose')
//const User = require('./model/user')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

mongoose.connect('mongodb+srv://kavya:NrNJpgGFcoutNjvQ@cluster0.j4skl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})

const app = express()
// app.use('/', express.static(path.join(__dirname, 'static')))
// app.use(bodyParser.json())

// app.post('/api/change-password', async (req, res) => {
// 	const { token, newpassword: plainTextPassword } = req.body

// 	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
// 		return res.json({ status: 'error', error: 'Invalid password' })
// 	}

// 	if (plainTextPassword.length < 5) {
// 		return res.json({
// 			status: 'error',
// 			error: 'Password too small. Should be atleast 6 characters'
// 		})
// 	}

// 	try {
// 		const user = jwt.verify(token, JWT_SECRET)

// 		const _id = user.id

// 		const password = await bcrypt.hash(plainTextPassword, 10)

// 		await User.updateOne(
// 			{ _id },
// 			{
// 				$set: { password }
// 			}
// 		)
// 		res.json({ status: 'ok' })
// 	} catch (error) {
// 		console.log(error)
// 		res.json({ status: 'error', error: ';))' })
// 	}
// })

// app.post('/api/login', async (req, res) => {
// 	const { username, password } = req.body
// 	const user = await User.findOne({ username }).lean()

// 	if (!user) {
// 		return res.json({ status: 'error', error: 'Invalid username/password' })
// 	}

// 	if (await bcrypt.compare(password, user.password)) {
// 		// the username, password combination is successful

// 		const token = jwt.sign(
// 			{
// 				id: user._id,
// 				username: user.username
// 			},
// 			JWT_SECRET
// 		)

// 		return res.json({ status: 'ok', data: token })
// 	}

// 	res.json({ status: 'error', error: 'Invalid username/password' })
// })

// app.post('/api/register', async (req, res) => {
// 	const { username,uname, password: plainTextPassword } = req.body

// 	if (!username || typeof username !== 'string') {
// 		return res.json({ status: 'error', error: 'Invalid username' })
// 	}

// 	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
// 		return res.json({ status: 'error', error: 'Invalid password' })
// 	}

// 	if (plainTextPassword.length < 5) {
// 		return res.json({
// 			status: 'error',
// 			error: 'Password too small. Should be atleast 6 characters'
// 		})
// 	}

// 	const password = await bcrypt.hash(plainTextPassword, 10)

// 	try {
// 		const response = await User.create({
// 			username,
// 			uname,
// 			password
// 		})
// 		console.log('User created successfully: ', response)
// 	} catch (error) {
// 		if (error.code === 11000) {
// 			// duplicate key
// 			return res.json({ status: 'error', error: 'Username already in use' })
// 		}
// 		throw error
// 	}

// 	res.json({ status: 'ok' })
// })
//const mongoose = require('mongoose')

// const UserSchema = new mongoose.Schema(
// 	{
// 		email: { type: String, required: true, unique: true },
//         name: { type: String, required: true},
// 		pic: { type: String, required: true }
// 	}
	
// )

// //const model = mongoose.model('UserSchema', UserSchema)


const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '428943478728-3fq7488pv2hqm3u1utdk8pnvqvlk94g7.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

app.use(session({ secret: 'secret', resave: false, saveUninitialized: true, cookie:{maxAge: 24 * 60 * 60 * 1000} }));
app.use(passport.initialize());
app.use(passport.session());
function isLoggedIn(req, res, next) {
    req.user ? next() : res.redirect('/');
}

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:5000/auth/google/callback',
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


app.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
});

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', 
    {
        successRedirect: '/protected',
        failureRedirect: '/auth/google/failure'
    })
);
const UserSchema = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true },
        name: { type: String, required: true},
		pic: { type: String, required: true }
	}
	
)
const user = mongoose.model('user', UserSchema)

app.get('/protected',isLoggedIn,(req,res)=> {
	console.log(req.user);
	
	user.create({
					email : req.user.email,
					name : req.user.displayName,
					pic : req.user.picture
				},(err,resp)=>{
					if(err){
						throw err;

					}
					else 
						console.log('User created successfully: ')
						res.json({dp : req.user.picture})
					    
				})

		
			//res.json({ status: 'ok' })

    //res.send("Auth success !")
})


app.listen(5000, () => {
	console.log('Server running at 5000')
})
