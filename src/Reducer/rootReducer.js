import Image1 from '../pics/home pics/home1.jpg'
import Image2 from '../pics/home pics/home2.jpg'
import Image3 from '../pics/home pics/home3.jpg'
import Image4 from '../pics/home pics/home4.jpg'
import Image5 from '../pics/home pics/home5.jpg'
import Image6 from '../pics/home pics/home6.jpg'
import Image7 from '../pics/home pics/home7.jpg'
import Image8 from '../pics/home pics/home8.jpg'
import Image9 from '../pics/home pics/home9.jpg'
import Image10 from '../pics/home pics/home10.jpg'
import Image11 from '../pics/home pics/home11.jpeg'
import Image12 from '../pics/home pics/home12.jpg'
import Image13 from '../pics/home pics/home13.jpeg'
import Image14 from '../pics/home pics/home14.jpeg'
import Image15 from '../pics/home pics/home15.jpeg'
import Image16 from '../pics/home pics/home16.jpeg'
import Image17 from '../pics/home pics/home17.jpg'
import Image18 from '../pics/home pics/home18.jpeg'
import Image19 from '../pics/home pics/home19.jpeg'
import Image20 from '../pics/home pics/home20.jpeg'
import Image21 from '../pics/shoes pics/shoes1.jpeg'
import Image22 from '../pics/pics sales page pics/sales1.jpeg'

const initState = {
    data : [
        {
            id: 1,
            name: 'TMI BROWN VIBRAM',
            category: 'slipper',
            price: '10,000',
            image: Image1,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
        },
        {
            id: 2,
            name: 'TMI LEATHER SLIPPERS',
            category: 'slipper',
            price: '7000',
            image: Image2,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 3,
            name: 'ENUGUIGA SIMPLE SLIPPERS',
            category: 'slipper',
            price: '5000',
            image: Image3,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 4,
            name: 'CHELSEA BOOT',
            category: 'shoe',
            price: '15,000',
            image: Image4,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 5,
            name: 'TMI LEATHER SLIDES',
            category: 'slipper',
            price: '7000',
            image: Image5,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 6,
            name: 'ENUGUIGA FEMALE SANDAL',
            category: 'sandal',
            price: '5,500',
            image: Image6,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 7,
            name: 'ENUGUIGA UNISEX SLIDES',
            category: 'slipper',
            price: '4,500',
            image: Image7,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 8,
            name: 'BLUE LOAFERS',
            category: 'shoe',
            price: '13,000',
            image: Image8,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id:9,
            name: 'BROWN LOAFERS',
            category: 'shoe',
            price: '13,500',
            image: Image9,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 10,
            name: 'ENUGUIGA FEMALE SLIDES',
            category: 'slipper',
            price: '4,500',
            image: Image10,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 11,
            name: 'FASHIONABLE LEATHER SLIPPERS',
            category: 'slipper',
            price: '7000',
            image: Image11,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 12,
            name: 'FEMALE LEATHER SLIPPERS',
            category: 'slipper',
            price: '8000',
            image: Image12,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 13,
            name: 'BROWN GLADIATOR SANDAL',
            category: 'sandal',
            price: '6,500',
            image: Image13,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 14,
            name: 'GLADIATOR SANDAL',
            category: 'sandal',
            price: '6,500',
            image: Image14,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 15,
            name: 'BLACK HONDMADE SANDAL',
            category: 'sandal',
            price: '7000',
            image: Image15,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 16,
            name: 'SINGLE MONK STRAP',
            category: 'shoe',
            price: '14,000',
            image: Image16,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id:17,
            name: 'LEATHER BIRKENSTOCK',
            category: 'slipper',
            price: '6,500',
            image: Image17,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id:18,
            name: 'MEN BLACK LEATHER SLIPPERS',
            category: 'slipper',
            price: '6,500',
            image: Image18,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id:19,
            name: 'SIMPLE LEATHER SANDAL',
            category: 'sandal',
            price: '7000',
            image: Image19,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id:20,
            name: 'BROWN BUSINESS SANDAL',
            category: 'sandal',
            price: '10,000',
            image: Image20,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 21,
            name: 'BROWN SUEDE CHELSEA BOOT',
            category: 'shoe',
            price: '14,500',
            image: Image21,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
    ],
     info : [
    
        {
            id: 1,
            name: 'BLACK DOUBLE MONK STRAP',
            category: 'sales',
            price: '13,500',
            image: Image22, 
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },    
        {
            id: 2,
            name: 'BROWN SUEDE CHELSEA BOOT',
            category: 'shoe',
            price: '14,500',
            image: Image21,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 3,
            name: 'BROWN BUSINESS SANDAL',
            category: 'sandal',
            price: '10,000',
            image: Image20,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 4,
            name: 'SIMPLE LEATHER SANDAL',
            category: 'sandal',
            price: '7000',
            image: Image19,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id : 5,
            name: 'MEN BLACK LEATHER SLIPPERS',
            category: 'slipper',
            price: '6,500',
            image: Image18,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 6,
            name: 'LEATHER BIRKENSTOCK',
            category: 'slipper',
            price: '6,500',
            image: Image17,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 7,
            name: 'SINGLE MONK STRAP',
            category: 'shoe',
            price: '14,000',
            image: Image16,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 8,
            name: 'BLACK HONDMADE SANDAL',
            category: 'sandal',
            price: '7000',
            image: Image15,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 9,
            name: 'GLADIATOR SANDAL',
            category: 'sandal',
            price: '6,500',
            image: Image14,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 10,
            name: 'BROWN GLADIATOR SANDAL',
            category: 'sandal',
            price: '6,500',
            image: Image13,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 11,
            name: 'FEMALE LEATHER SLIPPERS',
            category: 'slipper',
            price: '8000',
            image: Image12,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 12,
            name: 'FASHIONABLE LEATHER SLIPPERS',
            category: 'slipper',
            price: '7000',
            image: Image11,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 13,
            name: 'ENUGUIGA FEMALE SLIDES',
            category: 'slipper',
            price: '4,500',
            image: Image10,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 14,
            name: 'BROWN LOAFERS',
            category: 'shoe',
            price: '13,500',
            image: Image9,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id: 15,
            name: 'BLUE LOAFERS',
            category: 'shoe',
            price: '13,000',
            image: Image8,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
        {
            id:16,
            name: 'ENUGUIGA UNISEX SLIDES',
            category: 'slipper',
            price: '4,500',
            image: Image7,
            size: [{id: 1, num:20},{id: 2,num:22},{id:3, num:25},{id:4, num:27},{id:4, num:30}],
            desc: `This is made with genuine and high quality leather to ensure durability and foot-friendliness. 
                    \n
                    We have it available in various sizes and can be built to your preference.
                `
    
        },
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}
 export default rootReducer;