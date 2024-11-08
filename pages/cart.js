import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";
import Table from "@/components/Table";
import Input from '@/components/Input';


const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin-top: 40px;
    @media screen and (min-width: 768px) {
        grid-template-columns: 1.2fr .7fr; 
    }
`;

const Box = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
`;
const ProductInfoCell = styled.td`
    padding: 10px 0;
    
`;
const ProductImageBox = styled.td`
    width: 70px;
    height: 70px;
    padding: 2px;
    border: 1px solid rgba(0,0,0,.1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img{
        max-width: 90px;
        max-height: 90px;
    }
    @media screen and (min-width: 768px){
        padding: 10px;
        width: 100px;
        height: 100px;
        img{
        max-width: 130px;
        max-height: 130px;
    }
    }
`;
const QuantityLabel = styled.span`
    padding: 0 15px;
    display: block;
    @media screen and (min-width: 768px){
        display: inline-block;
        padding: 0 10px;
    }
    
`;
const CityHolder = styled.div`
    display: flex;
    gap: 5px;
    
`;

export default function CartPage() {
    const { cartProducts, addProduct, removeProduct, clearCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [country, setCountry] = useState('');
    const [isSuccess, setIsSucces] = useState(false);
    useEffect(() => {
        console.log("cartProducts:", cartProducts);
        if (cartProducts.length > 0) {
            axios.post('/api/cart', { ids: cartProducts })
                .then(response => {
                    setProducts(response.data);
                })
                .catch(error => {
                    console.error("Erreur lors de la récupération des produits du panier :", error);
                });
        } else {
            setProducts([]);
        }
    }, [cartProducts]);
    //console.log("products:", products);
    function moreOfThisProduct(id) {
        addProduct(id);
    }
    useEffect(()=>{
        if (typeof window !== 'undefined' && window.location.href.includes('success')) {
            setIsSucces(true);
            clearCart();
        }
    }, []);

    function lessOfThisProduct(id) {
        removeProduct(id);
    }
    let total = 0;
    for (const productId of cartProducts) {
        const price = products.find(p => p._id === productId)?.price || 0;
        total += price;
    }
    async function goToPayment() {
        const response = await axios.post('/api/checkout', {
            name, email, city, country, postalCode, streetAddress,
            cartProducts,
        });
        if (response.data.url) {
            window.location = response.data.url;
        }
    }

    async function goToPaymentMomo() {
        let totalAmount = 0;
        for (const productId of cartProducts) {
            const price = products.find(p => p._id === productId)?.price || 0;
            totalAmount += price;
        }
    
        const productNames = products
            .filter(product => cartProducts.includes(product._id))
            .map(product => product.title)
            .join(", ");
    
        const paymentUrl = `https://paygateglobal.com/v1/page?token=71dbb5ce-abf0-4924-9dad-e7f936633cf5` +
            `&amount=${totalAmount}` +
            `&description=${encodeURIComponent(productNames)}` +
            `&identifier=${encodeURIComponent(email)}`;
    
        
        window.location.href = paymentUrl;
    }
    if (isSuccess) {
        return (
            <>
                <Header />
                <Center>
                    <ColumnsWrapper>
                        <Bg />
                        <Box>
                            <h1>Thanks for your order !</h1>
                            <p>We will email you when your order will be sent.</p>
                        </Box>
                    </ColumnsWrapper>

                </Center>
            </>
        )
    }
    return (
        <>
            <Header />
            <Center>
                <ColumnsWrapper>
                    <Box>
                        <h2>Cart</h2>
                        {!cartProducts?.length && (
                            <div>Your cart is empty</div>
                        )}
                        {products?.length > 0 && (
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => (
                                        <tr key={product._id}> {/* Utilisation de product._id comme clé */}
                                            <ProductInfoCell>
                                                <ProductImageBox>
                                                    <img src={product.images} />

                                                </ProductImageBox>
                                                {product.title}
                                            </ProductInfoCell>
                                            <td>
                                                <Button onClick={() => lessOfThisProduct(product._id)}>
                                                    -
                                                </Button>
                                                <QuantityLabel>
                                                    {cartProducts.filter(id => id === product._id).length}
                                                </QuantityLabel>
                                                <Button
                                                    onClick={() => moreOfThisProduct(product._id)}>
                                                    +
                                                </Button>
                                            </td>
                                            <td >
                                                XOF{cartProducts.filter(id => id === product._id).length * product.price}
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>XOF{total}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        )}
                    </Box>
                    {!!cartProducts?.length && (
                        <Box>
                            <h2>Order information</h2>
                            <Input type="text"
                                placeholder="Name"
                                value={name}
                                name="name"
                                onChange={ev => setName(ev.target.value)} />
                            <Input type="text"
                                placeholder="Email"
                                value={email}
                                name="email"
                                onChange={ev => setEmail(ev.target.value)} />
                            <Input type="text"
                                placeholder="Country"
                                value={country}
                                name="country"
                                onChange={ev => setCountry(ev.target.value)} />
                            <CityHolder>
                                <Input type="text"
                                    placeholder="City"
                                    value={city}
                                    name="city"
                                    onChange={ev => setCity(ev.target.value)} />
                                <Input type="text"
                                    placeholder="Postal code"
                                    value={postalCode}
                                    name="postalCode"
                                    onChange={ev => setPostalCode(ev.target.value)} />
                            </CityHolder>
                            <Input type="text"
                                placeholder="Street Address"
                                value={streetAddress}
                                name="streetAddress"
                                onChange={ev => setStreetAddress(ev.target.value)} />

                            <Button black block
                                onClick={goToPayment}>
                                PAYMENT BY CREDIT CARD
                            </Button>
                            <p></p>
                            <Button black block
                                onClick={goToPaymentMomo}>
                                PAYMENT BY MOBILE MONEY (Tmoney / Flooz)
                            </Button>
                        </Box>
                    )}
                </ColumnsWrapper>
            </Center>
        </>
    );
}
