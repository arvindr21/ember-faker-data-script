var faker = require('faker');

var aid = 0,
    pid = 0;

module.exports = function() {
    var data = {
        users: [],
        albums: [],
        photos: []
    }


    // create 10 users
    for (var i = 0; i < 10; i++) {
        var albumIds = [];

        var r = Math.ceil(Math.random() * 10) + pid;
        r = r < 3 + pid ? 3 + pid : r;
        r = r > 20 + pid ? 20 + pid : r;

        for (var j = pid; j < r; j++) {
            var photoIds = [];

            var s = Math.ceil(Math.random() * 10);
            s = s < 3 ? 3 : s;
            s = s > 20 ? 20 : s;

            for (var k = 0; k < s; k++) {
                photoIds.push(pid);

                data.photos.push({
                    id: pid++,
                    albumId: aid,
                    photo: faker.image.imageUrl(),
                    tags : faker.lorem.words(),
                    description: faker.lorem.sentence()
                });

            }

            albumIds.push(aid);

            data.albums.push({
                id: aid++,
                userId: i,
                name: faker.lorem.words().join(' '),
                description: faker.lorem.paragraph(),
                photos: photoIds
            });
        }

        data.users.push({
            id: i,
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            company : faker.company.companyName(),
            avatar: faker.image.avatar(),
            albums: albumIds
        });

    }
    return data
}
