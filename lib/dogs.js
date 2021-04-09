import dogs from '../dogs/dogs.json'

export async function getTwoDogs() {

  const int1 = getRndInteger(0, dogs.length);
  let int2 = getRndInteger(0, dogs.length);

  while (int2 === int1) {
    int2 = getRndInteger(0, dogs.length);
  }

  const twoDogs = [dogs[int1], dogs[int2]];
  return twoDogs;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}