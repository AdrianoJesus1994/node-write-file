const fs = require('fs');
const path = require('path');

module.exports = {
    saveData: (data) => {
        return new Promise((resolve, reject) => {
            try {
                fs.writeFile(
                    path.resolve(__dirname, 'data.json'),
                    JSON.stringify(data), 'utf8',
                    (err) => {
                        if (err)
                            reject(null);
                        resolve(true);
                    });
            } catch (error) {
                reject(error);
            }
        });
    },

    redyData: () => {
        return new Promise((resolve, reject) => {
            try {
                fs.readFile(path.resolve(__dirname, 'data.json'), (err, data) => {
                    if (!err)
                        resolve(JSON.parse(data));
                    reject(null);
                });
            } catch (error) {
                reject(error);
            }

        })

    }
}