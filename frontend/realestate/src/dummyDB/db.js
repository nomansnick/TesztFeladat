const categories = {
  residential: "Residential",
  commercial: "Commercial",
  industrial: "Industrial",
  buildingPlot: "Building Plot",
};

const onePerson = {
  name: "Bill Bob",
  workplace: "High-stake Estates",
  rating: "4",
  picUrl:
    "https://images.generated.photos/MU8qvYbhuAZkkki1R02b6XEEtFVpJdIDLx7J8RkNE24/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5MTQ5NTcuanBn.jpg",
};

const oneAddress = {
  country: "Hungary",
  county: "Csongrád-Csanád",
  postal: "6666",
  name: "Big",
  type: "street",
  number: "12",
};

const onePlace = {
  name: "Grand Place",
  type: categories.residential,
  nrOfBedrooms: 2,
  nrOfBathrooms: 2,
  area: 200,
  price: 16000000,
  isForSale: true,
  isNegotiable: true,
  address: oneAddress,
  person: onePerson,
  picUrl:
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
};

const otherPerson = {
  name: "Pam Hicks",
  workplace: "Go Green",
  rating: "5",
  picUrl:
    "https://images.generated.photos/Bd949f4XUyKYJqii3-R3nLwKva9jR9YP6jdyDP5ikq0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3MjgzMzcuanBn.jpg",
};

const otherAddress = {
  country: "Hungary",
  county: "Csongrád-Csanád",
  postal: "6666",
  name: "Small",
  type: "avenue",
  number: "10",
};

const otherPlace = {
  name: "Small Place",
  type: categories.residential,
  nrOfBedrooms: 1,
  nrOfBathrooms: 1,
  area: 100,
  price: 8000000,
  isForSale: true,
  isNegotiable: false,
  address: otherAddress,
  person: otherPerson,
  picUrl:
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
};

const places = [onePlace, otherPlace];

export default places;
