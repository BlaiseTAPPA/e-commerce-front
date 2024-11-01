import styled, {keyframes} from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import HeartIcon from "./icons/HeartIcon";

const ProductWrapper = styled.div`

`;

const WhiteBox = styled(Link)`
    position: relative;
    background-color: #fff;
    padding: 20px;
    height: 120px;
    //width: 250px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img{
        max-width: 100%;
        max-height: 160px;
    }
`;

const Title = styled(Link) `
    font-weight: 650;
    font-size: .9rem;
    color: inherit;
    text-decoration: none;
    margin: 0;
`;

const ProductInfoBox = styled.div`
    margin-top: 5px;
`;

const PriceRow = styled.div`
    display: flex;  
    align-items: center;
    justify-content: space-between;
    margin-top: 2px;
`;
const Price = styled.div`
    font-size: 1rem;
    font-weight: 900; /* Ajout de la propriété pour mettre en gras */
    text-align: right;
    @media screen and (max-width: 768px){
        font-size: 1.2rem;
        font-weight: bold; /* Vous pouvez également définir le gras ici pour les écrans plus petits */
        text-align: left;
    }
`;

const HeartIconWrapper = styled.div`
    width: 20px; /* Ajustez la taille de l'icône de cœur ici */
    height: 20px; /* Ajustez la taille de l'icône de cœur ici */
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;

export default function ProductBox({ _id, title, description, price, images }) {
    const url = '/product/'+_id;
    const {addProduct, addToFavorites} = useContext(CartContext); // Ajout de addToFavorites
    const [isHovered, setIsHovered] = useState(false);
    return (
        <ProductWrapper>
            <WhiteBox href={url}>
                    <img src={images} />
                <HeartIconWrapper 
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <HeartIcon 
                        onClick={() => addToFavorites(_id)} 
                        style={{ color: isHovered ? "red" : "transparent" }} 
                    />
                </HeartIconWrapper>
            </WhiteBox>
            <ProductInfoBox>
                <Title href={url}>{title}</Title>
                <PriceRow>
                    <Price>
                        XOF {price}
                    </Price>
                    <Button onClick={() => addProduct(_id)} primary outline>
                        Add to cart 
                    </Button>

                </PriceRow>
            </ProductInfoBox>
        </ProductWrapper>
    );
}







/*                <FavoriteButton onClick={handleFavoriteClick}>
                    <HeartIcon/>
                </FavoriteButton>*/

    /*const [isFavorited, setFavorited] = useState(false);
    const handleFavoriteClick = () => {
        setFavorited(!isFavorited);*/

/*const FavoriteButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    //background: transparent;
    //border-color: none;
    //font-size: 1.5rem;
    cursor: pointer;
`;*/

