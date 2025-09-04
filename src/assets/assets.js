import menu_icon from './bar-Icon.svg';
import close_Icon from './close-Icon.svg'
import logo from './restraunt-logo.png'
import logo1 from './main-logo.png'
import knife_logo from './knife-img.png'
import google_logo from './google.logo.svg'
import manager from './jameel.jpg'
export const assets ={
    menu_icon,
    close_Icon,
    logo,
    logo1,
    knife_logo,
    google_logo,
    manager
}


export const NavItems = [
    {name: "Home", path : '/'},
    {name: "About", path : '/About'},
    {name: "Services", path : '/Services'},
    {name: "Contact", path : '/Contact'},
];

export const reviews =[
    {name: "rahul" , rating: 5 , comment : "Amazing stay! Rooms were very clean."},
    {name: "Swamy", rating: 4.5, comment: "Good service and friendly staff"},
    {name: "Advaith", rating: 4.5, comment: "a peacefull place to stay"},
    {name: "venu", rating: 5, comment: "Best hotel exprience I've had in years"} 
]