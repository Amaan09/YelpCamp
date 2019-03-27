var express                 = require("express"),
    app                     = express(),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    methodOverride          = require("method-override"),
    flash                   = require("connect-flash"),
    passport                = require("passport"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    Campground              = require("./models/campground.js"),
    Comment                 = require("./models/comment.js"),
    User                    = require("./models/user.js"),
    seedDB                  = require("./seeds");
    
var campgroundRoutes    = require("./routes/campground.js"),
    commentRoutes       = require("./routes/comments.js"),
    indexRoutes         = require("./routes/index.js");
    
mongoose.connect("mongodb+srv://root:1234@cluster0-olrx5.mongodb.net/yelp_camp?retryWrites=true",{useNewUrlParser: true});
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); //seeding the database

//PASSPORT CONFIGURATION

app.use(require("express-session")({
    secret: "blah blah blah",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
   res.locals.currentUser   = req.user; 
   res.locals.error         = req.flash("error");
   res.locals.success       = req.flash("success");
   next();
});

app.use("/",indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("YelpCamp Server Has Started"); 
});



