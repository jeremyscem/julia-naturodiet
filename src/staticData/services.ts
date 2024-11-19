import { ServicesType } from "utils/types/homePagetypes";


export const services:ServicesType[] = [{
    "isPrincipal": true,
    "name": "Home",
    "title": "Home",
    "description": "Home",
    "imageUrl": "/services/principalService.png",
    "url": "/"
},{
    "isPrincipal": false,
    "name": "About",
    "title": "About",
    "description": "About",
    "imageUrl": "/services/service1.png",
    "url": "/about"
},{
    "isPrincipal": false,
    "name": "Contact",
    "title": "Contact",
    "description": "Contact",
    "imageUrl": "/services/service2.png",
    "url": "/contact"
}]