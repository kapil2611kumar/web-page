import style from '../style/homepage.module.css';

const Card = ({name,price,img}) => {
    return (
        <div className={style.card}>
            <div className={style.info}>
                <h3> {name}</h3>
                <h4>{price}</h4>
                <button className={style.btn}>Shop Now</button>
            </div>
            <img src={img} alt="product" style ={{width:"150px",height:"120px"}} />
            
        </div>

    );
};

export default Card;