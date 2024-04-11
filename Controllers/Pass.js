import { ObjectId } from "mongodb";
import { client } from "../dbConfig.js";


//to get all user details
export function getAllData(){
    return client.db("Password-Reset").collection("data").find({}).toArray();
}
//to add a user to the database
export function addUser(user){
    return client.db("Password-Reset").collection("data").insertOne(user);
}
//to check user is there in the database
export function checkUser(user){
    return client.db("Password-Reset").collection("data").findOne({user});
}
//to login user using user and password
export function loginUser(user,password){
    return client.db("Password-Reset").collection("data").findOne({user,password});
}
//to add a random string into the database for a particular user
export function addString(id,string){
    return client.db("Password-Reset").collection("data").findOneAndUpdate({_id:new ObjectId(id)},{$set:{string}});
}
//finding user using that random string added in the database
export function findingUser(string){
    return client.db("Password-Reset").collection("data").findOne({string});
}
//changing password in the database
export function resettingPassword(id,password){
    return client.db("Password-Reset").collection("data").findOneAndUpdate({_id:new ObjectId(id)},{$set:{password:password}});
}
//deleting the random string after changing the password
export function deletingString(id){
    return client.db("Password-Reset").collection("data").findOneAndUpdate({_id:new ObjectId(id)},{$set:{string:"empty"}});
}