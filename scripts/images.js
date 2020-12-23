const fs = require('fs');

const imageFileNames = () => {
  const array = fs
    .readdirSync('src/resources/images')
    .filter((file) => file.endsWith('.png'))
    .map((file) => file.replace('.png', ''));

  return Array.from(new Set(array));
};

const generate = () => {
  const properties = imageFileNames()
    .map((name) => `${name}: require('./images/${name}.png')`)
    .join(',\n  ');

  const string = `const images = {
    ${properties}
};

export { images };
`;

  fs.writeFileSync('src/resources/images.js', string, 'utf8');
};

generate();
