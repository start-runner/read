export default (encoding = 'utf-8') => (input) => {
  return function read(log) {
    const makethen = require('makethen');
    const readFile = makethen(require('graceful-fs').readFile);

    return Promise.all(
      input.map((file) => {
        return readFile(file, encoding).then((data) => {
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
