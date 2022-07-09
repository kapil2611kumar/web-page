
import style from '../style/homepage.module.css';
import Card from './Card';

import first from '../images/first.png';
import second from '../images/second.png';
import third from '../images/third.png';

const Footer = () => {
    const data =[
        {
            name:"deo",
            price:20,
            img:first
        },
        {
            name:"Body wash",
            price:25,
            img:second
        },
        {
            name:"Shampoo",
            price:10,
            img:third
        }
    ];
    return (
        <>
        <div className={style.footer}>
           { data.map((item) => {
                return(
                    <Card name={item.name} price={item.price}
                    img ={item.img} />

                )
            })
        }
            {/* <Card/>
            <Card/>
            <Card/> */}
        </div>
        </>
    );
};

export default Footer;