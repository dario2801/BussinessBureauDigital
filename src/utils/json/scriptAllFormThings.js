import forHome from './ForHome.json';
import forBabies from './ForBabies.json';
import forBoys from './ForBoys.json';
import forGirls from './ForGirls.json';
import forPlay from './ForPlay.json';
const fs = require('fs');

const allItems = {};

allItems.forHome = forHome;
allItems.forHome.item = 'forHome';

allItems.forPlay = forPlay;
allItems.forPlay.item = 'forPlay';

allItems.forBabies = forBabies;
allItems.forBabies.item = 'forBabies';

allItems.forBoys = forBoys;
allItems.forBoys.item = 'forBoys';

allItems.forGirls = forGirls;
allItems.forGirls.item = 'forGirls';

fs.writeFile('AllForThings.json', JSON.stringify(allItems), () => {
    console.log('AllForThings.json creado!')
})