module.exports = {
    multipleToObject: (mongooses) => {
        return mongooses.map(e => e.toObject());
    },
    toObject: (course) => {
        return course.toObject();
    }
}
