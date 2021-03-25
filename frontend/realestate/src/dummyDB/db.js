const categories = {
  residential: 'Residential',
  commercial: 'Commercial',
  industrial: 'Industrial',
  buildingPlot: 'Building Plot',
}

const onePerson = {
  id: '1',
  name: 'Bill Bob',
  workplace: 'High-stake Estates',
  rating: '4',
  picUrl:
    'https://images.generated.photos/MU8qvYbhuAZkkki1R02b6XEEtFVpJdIDLx7J8RkNE24/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5MTQ5NTcuanBn.jpg',
}

const oneAddress = {
  id: '1',
  country: 'Hungary',
  county: 'Csongrád-Csanád',
  city: 'Szeged',
  postal: '6730',
  latitude: '70.256136',
  longitude: '80.141036',
  name: 'Big',
  type: 'street',
  number: '12',
}

const onePlace = {
  id: '1',
  name: 'Grand Place',
  type: categories.residential,
  nrOfBedrooms: 2,
  nrOfBathrooms: 2,
  area: 200,
  price: 16000000,
  isForSale: true,
  isNegotiable: true,
  address: oneAddress,
  person: onePerson,
  distance: '0',
  picUrl:
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
}

const otherPerson = {
  id: '2',
  name: 'Pam Hicks',
  workplace: 'Go Green',
  rating: '5',
  picUrl:
    'https://images.generated.photos/Bd949f4XUyKYJqii3-R3nLwKva9jR9YP6jdyDP5ikq0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3MjgzMzcuanBn.jpg',
}

const otherAddress = {
  id: '2',
  country: 'Hungary',
  county: 'Csongrád-Csanád',
  city: 'Szeged',
  postal: '6730',
  latitude: '46.256116',
  longitude: '20.141016',
  name: 'Small',
  type: 'avenue',
  number: '10',
}

const otherPlace = {
  id: '2',
  name: 'Small Place',
  type: categories.residential,
  nrOfBedrooms: 1,
  nrOfBathrooms: 1,
  area: 100,
  price: 8000000,
  isForSale: true,
  isNegotiable: false,
  address: otherAddress,
  person: otherPerson,
  distance: '0',
  picUrl:
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80',
}

const thirdPerson = {
  id: '3',
  name: 'Gene Jones',
  workplace: 'Bullish Bear',
  rating: '5',
  picUrl:
    'https://images.generated.photos/2xtj4zfLgRcQmF7iKnr8w6yMqOnr3-ywFRd9R2YJezk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwMTE2OTEuanBn.jpg',
}

const thirdAddress = {
  id: '3',
  country: 'Hungary',
  county: 'Csongrád-Csanád',
  city: 'Szeged',
  postal: '6710',
  latitude: '46.256166',
  longitude: '20.141066',
  name: 'Terrace',
  type: 'lane',
  number: '22',
}

const thirdPlace = {
  id: '3',
  name: 'Heavy Duty Storage',
  type: categories.industrial,
  nrOfBedrooms: 0,
  nrOfBathrooms: 12,
  area: 10000,
  price: 80000000,
  isForSale: false,
  isNegotiable: true,
  address: thirdAddress,
  person: thirdPerson,
  distance: '0',
  picUrl: 'https://www.designingbuildings.co.uk/w/images/0/05/Battersea.jpg',
}

const fourthPerson = {
  id: '4',
  name: 'Ellen Fawkes',
  workplace: 'Integrity Housing',
  rating: '5',
  picUrl:
    'https://images.generated.photos/QI8F174vCOmEIfcAuuzDviFFin4ymse8ocgp9ZHuvTM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxNDQ5MzguanBn.jpg',
}

const fourthAddress = {
  id: '4',
  country: 'Hungary',
  county: 'Csongrád-Csanád',
  city: 'Szeged',
  postal: '6750',
  latitude: '46.256199',
  longitude: '20.141099',
  name: 'Leisure',
  type: 'street',
  number: '3',
}

const fourthPlace = {
  id: '4',
  name: 'Build your dream!',
  type: categories.buildingPlot,
  nrOfBedrooms: 0,
  nrOfBathrooms: 0,
  area: 1000,
  price: 12000000,
  isForSale: true,
  isNegotiable: true,
  address: fourthAddress,
  person: fourthPerson,
  distance: '0',
  picUrl:
    'https://yrakha.files.wordpress.com/2019/10/e637d1d9-201b-453f-9139-aca50754952c.jpg',
}

const places = [onePlace, otherPlace, thirdPlace, fourthPlace]

export default places
