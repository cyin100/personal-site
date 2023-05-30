const fallbackImage = require('../images/Conner1.jpg');
const fileExtensions = ['jpg', 'png', 'gif'];
const imageNames = ['voluntarius', 'voluntariuslogo', 'humanbenchmark', 'humanbenchmarklogo', 'gameplan', 'gameplanlogo',
                    'undertale', 'undertalelogo', 'personalsite',
                    'roche', 'rochelogo', 'acm', 'acmlogo', 'intel', 'intellogo', 'acf', 'acflogo', 'xcamp', 'xcamplogo',
                    'tc', 'tclogo', 'stemboost', 'stemboostlogo',
                  ];


const images = imageNames.reduce((result, name) => {
  let image = fallbackImage;
  for (const extension of fileExtensions) {
    try {
      image = require(`../images/${name}.${extension}`);
      break;
    } catch (error) {
      console.error(`Error loading image: ${name}.${extension}`);
    }
  }
  return { ...result, [name]: image};
}, {});

export default images;