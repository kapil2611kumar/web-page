import style from '../style/homepage.module.css';
import Logo from '../images/logo.jpg';
import {BsBag  } from "react-icons/bs";

const Navbar = () => {
    const link =[
        {
            name:"Home",
            target:"/home"
        },
        {
            name:"About",
            target:"/home"
        },
        {
            name:"Conatct",
            target:"/home"
        },
        {
            name:"Dilevery",
            target:"/home"
        }
    ]
    return(
        <>
        <div className={style.container}>
            <div className={style.logo}>
                <img src={Logo} alt="logo" style ={ {width: "50px",marginRight:"1rem"}}/>
                <h1>Amozan</h1>
            </div>

            <div className={style.link}>
                {
                    link.map((link,index) => {
                        return(
                            <span key={index}className={style.link}>{link.name}</span>

                        )
                    })
                }


                {/* <span className={style.link}>About</span>
                <span className={style.link}>Contact</span>
                <span className={style.link}>Delivery</span> */}
                
            </div>
            <div className="search">
                <input type="text" placeholder='search your item'/>
                <BsBag style = {{fontSize:"1.5rem",color:"black"}} />
            </div>
        </div>
        </>
    )

}


export default Navbar;