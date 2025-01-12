import kitchen from "../assets/images/kitchen.png";
import living from "../assets/images/living.png";
import bedroom from "../assets/images/bedroom.png";
import sdb from "../assets/images/sdb.png";
import garage from "../assets/images/garage.png";

const roomData = [
  {
    id: 1,
    name: "Cuisine",
    img: kitchen,
    class: "kitchenCard",
  },
  {
    id: 2,
    name: "Salon",
    img: living,
    class: "livingCard",
  },
  {
    id: 3,
    name: "Chambre",
    img: bedroom,
    class: "bedroomCard",
  },
  {
    id: 4,
    name: "Salle de bain",
    img: sdb,
    class: "bathroomCard",
  },
  {
    id: 5,
    name: "Garage",
    img: garage,
    class: "garageCard",
  },
];

export default roomData;
