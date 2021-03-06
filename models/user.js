var mongoose = require('mongoose');
var bcrypt =require('bcrypt');
mongoose.connect('mongodb://localhost/nodeauth');
var db = mongoose.connection;

//User Schema 
var UserSchema = mongoose.Schema({
	username:{
    type: String,
    index: true

	},
	password:{
		type:String,
		require:true,
		bcrypt:true
	},
	email:{
		type: String
	},
	name:{
		type:String
	},
	profileimage:{
		type: String
	}
  

});

var user = module.exports = mongoose.model('user', UserSchema);
module.exports.createUser = function(newUser, callback){
	bcrypt.hash(bewUser.password, 10, function(err,hash){
		if(err)throw err;
		// set hashed password
		newUser.password = hash;
        // create User
		newUser.save(callback);
	});
	

}
