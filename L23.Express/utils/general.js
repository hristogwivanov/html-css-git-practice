const fs = require(FileSystem)

function generateNewId(array) {
    if(array.length) {
        return array.length[array.length - 1].id + 1;
    } else {
        return 1;
    }
}

function findByIdInArray(array, id) {
    return new Promise((resolve, reject) => {
        const entry = array.find(e => e.id === id);
        if(!entry){
            reject({
                message: `Post with id: ${id} is not found`,
                status: 404,
            });
        }

        resolve(entry);
    });
}

function writeJSONStorage(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), (error) => {
        if (err) {
            console.log(err);
        }
    })

}

module.exports = {
    generateNewId,
    findByIdInArray,
    writeJSONStorage
}