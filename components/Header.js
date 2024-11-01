import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import {useContext, useState} from "react";
import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import Logo from "./icons/Logo";
import Search from "./icons/Seach";

const StyledHeader = styled.header`
  background-color: #011224;
`;
/*const Logo = styled(Link)`
  color:#fff;
  text-decoration:none;
  position: relative;
  z-index: 3;
`;*/
const Wrapper = styled.div`
  position: relative; /* Ajouter une position relative pour le wrapper */
  display: flex;
  justify-content: space-between;
  align-items: center; /* Centrer verticalement les éléments */
  padding: 10px 0;
`;
const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #011224;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color:#aaa;
  text-decoration:none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const LogoLink = styled.a`
  height: 2rem;
  color: #605DFF;
`;
const SearchButton = styled(Search)`
  position: absolute; /* Positionner le bouton de recherche de manière absolue */
  top: 50%; /* Placer le bouton à 50% de la hauteur du wrapper */
  transform: translateY(-50%); /* Ajuster le bouton pour le centrer verticalement */
  right: 50%; /* Placer le bouton à 50% de la largeur du wrapper */
  transform: translateX(50%); /* Ajuster le bouton pour le centrer horizontalement */
  color: white;
  width: 20px;
  height: 20px;
`;
const SearchInput = styled.input`
  position: absolute; /* Positionner la zone de texte de recherche de manière absolue */
  top: 50%; /* Placer la zone de texte à 50% de la hauteur du wrapper */
  transform: translateY(-50%); /* Ajuster la zone de texte pour la centrer verticalement */
  right: 50%; /* Placer la zone de texte à 50% de la largeur du wrapper */
  transform: translateX(50%); /* Ajuster la zone de texte pour la centrer horizontalement */
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
  display: ${props => (props.isActive ? "block" : "none")}; /* Afficher ou masquer en fonction de l'état isActive */
`;

export default function Header() {
  const {cartProducts} = useContext(CartContext);
  const [mobileNavActive,setMobileNavActive] = useState(false);
  const [isActive, setIsActive] = useState(false); // État pour suivre si la zone de texte de recherche est active

  // Fonction pour basculer l'état de la zone de texte de recherche
  const toggleSearch = () => {
    setIsActive(prev => !prev);
  };
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
        <LogoLink href={'/'} title="Logo">
            <Logo />
          </LogoLink>
          <SearchButton />
          <SearchInput
          type="text"
          placeholder="Search..."
          isActive={isActive}
        />

          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/products'}>All products</NavLink>
            <NavLink href={'/account'}>Account</NavLink>
            <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}