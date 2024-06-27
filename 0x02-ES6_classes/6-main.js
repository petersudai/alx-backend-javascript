import SkyHighBuilding from './6-sky_high.js';

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft); // 140
console.log(building.floors); // 60
console.log(building.evacuationWarningMessage());
