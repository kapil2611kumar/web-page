import Coffee from '../images/coffee.png';
import style from '../style/homepage.module.css'; 

const Banner = () => {
    const data =[
        {
            heading:"1.5M",
            detail:"Lorem ipsum dolor sit,amet consectetur adipisicing elit. Saepe ullam commodi obcaecati.",
        },
        {
            heading:"2M",
            detail:"Lorem ipsum dolor sit,amet consectetur adipisicing elit. Saepe ullam commodi obcaecati.",
        }
    ];
    return(
        <div className={style.banner}>
            <div className={style.coollection}>
                <h1> Trendy Colection</h1>
                <p>Lorem ipsum dolor sit,
                 amet consectetur adipisicing elit. Saepe ullam commodi obcaecati.
                  </p>
            </div>
            <div className={style.imgbox}>
                <img src={Coffee} alt="trendy" />
            </div>
            <div className={style.number}>
            {
                data.map((item,index) => {
                    return(
                        <div key = {index}>
                <h2 className="num">{item.heading}</h2>
                <p>{item.detail}</p>
                </div>

                    )

                })
            }
                

                {/* <h2 className="num">1.5M</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> */}
            </div>
            
        </div>
    );
};

export default Banner;