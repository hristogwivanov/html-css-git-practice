const posts = require("..//data/posts.json");
const { post } = require("../routes/post.routes.js");
const util = require('../utils/general.js');

const filename = "./data/posts.json";

console.log("posts", posts);

function getPosts(){
    return new Promise((resolve, reject) => {
        if(!posts.length) {
            reject({
                message: "No posts found!",
                status: 204,
            })
        }

        resolve(posts);
    })
}

function getPost(id){
    return new Promise((resolve, reject) => {
        util.findByIdInArray(posts, id)
            .then((post) => resolve(post))
            .catch((err) => reject(err));
    })
}

function addPost(newPost) {
    return new Promise((resolve, reject) => {
        newPost = { id: util.generateNewId(posts), ...newPost};
        posts.push(newPost);
        util.writeJSONStorage(filename, posts);
        resolve({
            message: `The post was created with id ${newPost.id}`,
            cuntant: newPost,
            status: 201
        }))
}

module.exports = {
    getPosts,
};