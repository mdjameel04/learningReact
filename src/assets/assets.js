import menu_icon from './bar-Icon.svg';
import close_Icon from './close-Icon.svg'
import logo from './restraunt-logo.png'
import logo1 from './main-logo.png'
import knife_logo from './knife-img.png'
import google_logo from './google.logo.svg'
import manager from './jameel.jpg'
import staff from './team-members.png'
export const assets ={
    menu_icon,
    close_Icon,
    logo,
    logo1,
    knife_logo,
    google_logo,
    manager,
    staff
}


export const NavItems = [
    {name: "Home", path : '/'},
    {name: "About", path : '/About'},
    {name: "Service", path : '/Service'},
    {name: "Contact", path : '/Contact'},
];

export const reviews =[
    {name: "rahul" , rating: 5 , comment : "Amazing stay! Rooms were very clean."},
    {name: "Swamy", rating: 4.5, comment: "Good service and friendly staff"},
    {name: "Advaith", rating: 4.5, comment: "a peacefull place to stay"},
    {name: "venu", rating: 5, comment: "Best hotel exprience I've had in years"} 
];

export const services= [
    {icon: "🛏️", 
        title: "Luxury Rooms",
        desc: " Spacious, clean and well-furnshied rooms with modren amenities" 
    },

    {icon: "🍽️",
        title: " Fine Dinning",
        desc: "Multi-Cuisine",
    },
    {
        icon: "💆",
        title: "Spa & Wellness",
        desc: "Relax with our professional spa, massage and wellness services.",
    },
      {
    icon: "📶",
    title: "Free Wi-Fi",
    desc: "High-speed internet available in every room and lobby.",
  },
  {
    icon: "🎉",
    title: "Event Halls",
    desc: "Spacious banquet and meeting halls for weddings, parties & conferences.",
  },
];

export const packages= [
    {name:"bussiness Packaage", Price: "₹4,999/night", features: ["Executive Room", "Breakfast Included", "Conference Room Access"]},
  { name: "Family Package", price: "₹6,999/night", features: ["Family Suite", "Meals Included", "Kids Play Area"] },
  { name: "Honeymoon Package", price: "₹8,999/night", features: ["Luxury Suite", "Candlelight Dinner", "Spa Session for Couple"] },

]