// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla S",
    imgUrl: img01,
    model: "Model 3",
    price: 5000,
    speed: "200kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Tesla Model S may be a decade old but it’s still one of the best EVs on the market. A major update last year shuffled the lineup into two models, the base dual-motor with 405 miles of range and 670 horsepower, and the triple-motor, 1,020-horsepower Plaid with up to 395. The Plaid can outpace many megabuck hypercars but still offers family hatchback practicality and docile around-town daily driving just like the dual-motor. Another 2021 addition, the yoke steering wheel, is less convincing. The rival Lucid Air now offers more range and Mercedes-Benz’s EQS more luxury, but the S is still superlative.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Camry",
    imgUrl: img02,
    model: "Model-2022",
    price: 4000,
    speed: "200kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Toyota’s flagship sedan in India, the Camry Hybrid, underwent a generation change in 2019, and is currently in its eighth-gen avatar. Not only does this iteration of the Camry retain its core strengths, like a hybrid powertrain, oodles of space and comfort, and loads of equipment, Toyota has also adopted a more flamboyant design philosophy, and enhanced its driving dynamics, thus making it much more exciting than the older versions. For the Camry Hybrid‘s 2022 mid-life update, it gets minor cosmetic changes, both on the outside and inside, along with an all-new infotainment system .",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 7525,
    speed: "300kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " BMW has joined the facelift bandwagon with the X3. Being the third entry, it might have been a bit late to the party, behind the Audi Q5 facelift and the Volvo XC60 facelift, but it sure has come well prepared. This mid-life update gives the X3 a much-needed shot in the arm to stay relevant in the hugely competitive ‘midsize luxury SUV’ segment..",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 5600,
    speed: "200kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Nissan has joined the facelift bandwagon with the X3. Being the third entry, it might have been a bit late to the party, behind the Audi Q5 facelift and the Volvo XC60 facelift, but it sure has come well prepared. This mid-life update gives the X3 a much-needed shot in the arm to stay relevant in the hugely competitive ‘midsize luxury SUV’ segment..",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 7000,
    speed: "300kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Ferrari has joined the facelift bandwagon with the X3. Being the third entry, it might have been a bit late to the party, behind the Audi Q5 facelift and the Volvo XC60 facelift, but it sure has come well prepared. This mid-life update gives the X3 a much-needed shot in the arm to stay relevant in the hugely competitive ‘midsize luxury SUV’ segment..",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 8000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Mercedes has joined the facelift bandwagon with the X3. Being the third entry, it might have been a bit late to the party, behind the Audi Q5 facelift and the Volvo XC60 facelift, but it sure has come well prepared. This mid-life update gives the X3 a much-needed shot in the arm to stay relevant in the hugely competitive ‘midsize luxury SUV’ segment..",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 7000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Audi has joined the facelift bandwagon with the X3. Being the third entry, it might have been a bit late to the party, behind the Audi Q5 facelift and the Volvo XC60 facelift, but it sure has come well prepared. This mid-life update gives the X3 a much-needed shot in the arm to stay relevant in the hugely competitive ‘midsize luxury SUV’ segment..",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 8000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Rolla Royce has joined the facelift bandwagon with the X3. Being the third entry, it might have been a bit late to the party, behind the Audi Q5 facelift and the Volvo XC60 facelift, but it sure has come well prepared. This mid-life update gives the X3 a much-needed shot in the arm to stay relevant in the hugely competitive ‘midsize luxury SUV’ segment..",
  },
];

export default carData;
