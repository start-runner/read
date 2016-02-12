export default (/* options */) => (input) => {
    return function read(log) {
        const pify = require('pify');
        const readFile = pify(require('graceful-fs').readFile);

        return Promise.all(
            input.map(file => {
                return readFile(file, 'utf-8').then(data => {
                    log(file);

                    return {
                        path: file,
                        data,
                        map: null
                    };
                });
            })
        );
    };
};
