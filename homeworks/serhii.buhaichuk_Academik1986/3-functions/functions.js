const oneCistern = 1000;
const OIL = 0.926;
const WATER = 1;
const MERCURY = 1.355;

const oilCount = 3;
const waterCount = 5;
const mercuryCount = 2;

let oilWeight;
let waterWeight;
let mercuryWeight;
let message;

const getWeight = (weight, liquid, count) => {
    switch (liquid) {
        case OIL:
            oilWeight = weight * liquid * count;
            break;
        case WATER:
            waterWeight = weight * liquid * count;
            break;
        case MERCURY:
            mercuryWeight = weight * liquid * count;
            break;
        default:
            message = 'Please enter liquid';
    }
    return weight * liquid * count;
}

console.log(getWeight(oneCistern, OIL, oilCount));
console.log(getWeight(oneCistern, WATER, waterCount));
console.log(getWeight(oneCistern, MERCURY, mercuryCount));

const AllWeight = () => oilWeight + waterWeight + mercuryWeight;

function getAllWeight() {
    AllWeight = oilWeight + waterWeight + mercuryWeight;
}

console.log(`All weight: ${AllWeight()}`);
