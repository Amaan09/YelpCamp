var mongoose = require("mongoose");
var Campground = require("./models/campground.js");
var Comment = require("./models/comment.js");

var data = [
        {
            name : "WestBeach",
            image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec rutrum ante. Suspendisse porta scelerisque consequat. Nam eu venenatis ante. Nunc scelerisque tortor ac tellus iaculis, eu posuere sapien malesuada. Duis congue, purus sit amet dignissim efficitur, erat elit euismod sapien, et pulvinar leo sem in arcu. Donec et volutpat urna, in tristique ipsum. Suspendisse sit amet risus faucibus, sagittis augue quis, cursus velit. Sed vitae neque rhoncus, laoreet nisl nec, varius lacus. Donec convallis purus diam, rutrum iaculis enim mattis mollis. Aliquam hendrerit vel quam a rutrum."   
        },
        {
            name : "VioletBush",
            image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec rutrum ante. Suspendisse porta scelerisque consequat. Nam eu venenatis ante. Nunc scelerisque tortor ac tellus iaculis, eu posuere sapien malesuada. Duis congue, purus sit amet dignissim efficitur, erat elit euismod sapien, et pulvinar leo sem in arcu. Donec et volutpat urna, in tristique ipsum. Suspendisse sit amet risus faucibus, sagittis augue quis, cursus velit. Sed vitae neque rhoncus, laoreet nisl nec, varius lacus. Donec convallis purus diam, rutrum iaculis enim mattis mollis. Aliquam hendrerit vel quam a rutrum."   
        },
        {
            name : "GeorgePool",
            image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec rutrum ante. Suspendisse porta scelerisque consequat. Nam eu venenatis ante. Nunc scelerisque tortor ac tellus iaculis, eu posuere sapien malesuada. Duis congue, purus sit amet dignissim efficitur, erat elit euismod sapien, et pulvinar leo sem in arcu. Donec et volutpat urna, in tristique ipsum. Suspendisse sit amet risus faucibus, sagittis augue quis, cursus velit. Sed vitae neque rhoncus, laoreet nisl nec, varius lacus. Donec convallis purus diam, rutrum iaculis enim mattis mollis. Aliquam hendrerit vel quam a rutrum."   
        }
    ];
function seedDB(){
    Campground.remove({},function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed all the Campgrounds!");
        // data.forEach(function(seed){
        //   Campground.create(seed,function(err,campground){
        //       if(err){
        //           console.log(err);
        //       }
        //       else{
        //           console.log("Added a New Campground!");
        //           Comment.create({
        //             text: "This is a beautiful place!!",
        //             author: "Jhon Brown"
        //           },function(err,comment){
        //               if(err){
        //                   console.log(err);
        //               }else{
        //                   campground.comments.push(comment);
        //                   campground.save();
        //                   console.log("comments Created!!");
        //               }
        //           });
        //         }
        //     }); 
        // });
    });
}



module.exports = seedDB;