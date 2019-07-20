import dataN from "./cars.json";

for (let b of dataN) {
  b.ind = dataN.indexOf(b);
  b.name = b.brand;
  b.css = "linear-gradient(135deg, white 0%, white 100%)";
  b.height = 200;
}

export default dataN;

// [
//     {
//       css: 'linear-gradient(135deg, #e50914 0%, #000000 100%)',
//       height: 200
//       //add image:
//     },
//     {
//       name: 'Dodge',
//       description: '#f5f7fa → #c3cfe2',
//       css: 'linear-gradient(135deg, #e50914 0%, #e50914 100%)',
//       height: 200,
//       image: Dodge
//     },
//     {
//       name: 'VW',
//       description: '#e0c3fc → #8ec5fc',
//       css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
//       height: 400,
//     },
//     {
//       name: 'Ripe Malinka',
//       description: '#f093fb → #f5576c',
//       css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
//       height: 400
//     },
// [
//     {
//       css: 'linear-gradient(135deg, #e50914 0%, #000000 100%)',
//       height: 200
//       //add image:
//     },
//     {
//       name: 'Dodge',
//       description: '#f5f7fa → #c3cfe2',
//       css: 'linear-gradient(135deg, #e50914 0%, #e50914 100%)',
//       height: 200,
//       image: Dodge
//     },
//     {
//       name: 'VW',
//       description: '#e0c3fc → #8ec5fc',
//       css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
//       height: 400,
//     },
//     {
//       name: 'Ripe Malinka',
//       description: '#f093fb → #f5576c',
//       css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
//       height: 400
//     },
// [
//     {
//       css: 'linear-gradient(135deg, #e50914 0%, #000000 100%)',
//       height: 200
//       //add image:
//     },
//     {
//       name: 'Dodge',
//       description: '#f5f7fa → #c3cfe2',
//       css: 'linear-gradient(135deg, #e50914 0%, #e50914 100%)',
//       height: 200,
//       image: Dodge
//     },
//     {
//       name: 'VW',
//       description: '#e0c3fc → #8ec5fc',
//       css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
//       height: 400,
//     },
//     {
//       name: 'Ripe Malinka',
//       description: '#f093fb → #f5576c',
//       css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
//       height: 400
//     },
//     {
//       name: 'Perfect White',
//       description: '#fdfbfb → #ebedee',
//       css: 'linear-gradient(135deg, #E3FDF5 0%, #FFE6FA 100%)',
//       height: 400
//     },
//     {
//       name: 'Near Moon',
//       description: '#5ee7df → #b490ca',
//       css: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
//       height: 400
//     },
//     {
//       name: 'Wild Apple',
//       description: '#d299c2 → #fef9d7',
//       css: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
//       height: 200
//     },
//     {
//       name: 'Ladoga Bottom',
//       description: '#ebc0fd → #d9ded8',
//       css: 'linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)',
//       height: 400
//     },
//     {
//       name: 'Sunny Morning',
//       description: '#f6d365 → #fda085',
//       css: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
//       height: 200
//     },
//     {
//       name: 'Lemon Gate',
//       description: '#96fbc4 → #f9f586',
//       css: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)',
//       height: 400
//     },
//     {
//       name: 'Salt Mountain',
//       description: ' #FFFEFF → #D7FFFE',
//       css: 'linear-gradient(135deg, #FFFEFF 0%, #D7FFFE 100%)',
//       height: 200
//     },
//     {
//       name: 'New York',
//       description: ' #fff1eb → #ace0f9',
//       css: 'linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)',
//       height: 400
//     },
//     {
//       name: 'Soft Grass',
//       description: ' #c1dfc4 → #deecdd',
//       css: 'linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)',
//       height: 400
//     },
//     {
//       name: 'Japan Blush',
//       description: ' #ddd6f3 → #faaca8',
//       css: 'linear-gradient(135deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)',
//       height: 200
//     }
//   ]
