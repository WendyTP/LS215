/*
Question: write a function that current the given array as below criteria:
   - The band countries are wrong: all the bands should have 'Canada' as the country.
   - The band name should have all words capitalized.
   - Remove all dots from the band names.
Think abstraction:
`- map the given array and return the corrected version of array
  - correction 1 - country value
  - correction 3 - remove dots  -- str.replace(/\./g, '');
  - correction 2 - capitalize names : turn string to array of words, transform each word with first letter uppercase; return new transformed string
*/

function processBands(data) {
  return data.map(band => {
    let correctCountry = 'Canada'
    let correctBandName = capitalizeBandName(removeDotsInBandName(band.name))

    return {
      name: correctBandName,
      country: correctCountry,
      active: band['active'],
    }
  })
}

function removeDotsInBandName(name) {
  return name.replace(/\./g, '');
}

function capitalizeBandName(name) {
  splitName = name.split(' ')
  return splitName.map(word => capitalizeWord(word)).join(' ')
}

function capitalizeWord(word) {
 return word[0].toUpperCase() + word.slice(1);
}



let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

console.log(processBands(bands))
console.log(bands)



