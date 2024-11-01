import Logo from '@/components/icons/Logo';
import Email from '@/components/icons/Email';
import Password from '@/components/icons/Password';
import React from 'react';
import styled from 'styled-components';
import Google from '@/components/icons/Google';

// Styled Components
const Root = styled.div`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--lighter-shade);
  background: -webkit-linear-gradient(to right, #0e0c13, #3c4946);
  background: linear-gradient(to right, #0e0c13, #3c4946);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrer horizontalement */
  gap: 2rem;
  background: #E9E9E9;
  width: 100%;
  max-width: 32rem;
  padding: 2rem; /* Réduire légèrement le padding */
  border-radius: 1rem; /* Réduire le rayon de la bordure */
  border: 2px solid #1D1D1D; /* Ajouter une bordure */
`;

const WelcomeRow = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`;

const LogoLink = styled.a`
  height: 4rem;
  margin: 0 auto;
  color: #605DFF;
`;

const WelcomeHeading = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 2rem;
`;

const DescriptionText = styled.p`
  max-width: 24rem;
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  position: relative;
  padding: 0.9375rem 0 0;
  margin-bottom: 0.5rem;
`;

const InputField = styled.input`
  font-size: 1rem;
  color: #1F2346;
  padding: 0.5rem ;
  padding-right: 2rem;
  padding-bottom: 0.5rem;
  line-height: 2rem;
  width: 100;
  height: 2rem;
  outline: 0;
  border: 0;
  width: 100%;
  vertical-align: middle;
  padding-bottom: 0.7rem;
  border-bottom: 3px solid #1D1D1D;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }
`;

const InputLabel = styled.label`
  user-select: none;
`;

const FormButton = styled.button`
  background: #011224;
  color: #fff;
  white-space: nowrap;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  line-height: 3.125rem;
  outline: none;
  font-size: 1.125rem;
  letter-spacing: .025rem;
  text-decoration: none;
  cursor: pointer;
  font-weight: 800;
  min-height: 3.125rem;
  width: 100%;
  border-radius: 10rem;
  transition: all .3s ease;

  &:hover {
    
    transform: scale(1.05);
  }
`;

const SocialsRow = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  padding: 0.25rem; /* Diminution de la taille du padding */
  border-radius: 10rem;
  width: fit-content; /* Utilisation de width: fit-content pour réduire l'espace horizontal */
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1rem; /* Réduction de la taille de la police */
  color: #1F2346;
  background: #E9E9E9;
  font-weight: 700;
  margin: 0 auto; /* Centrage horizontal */
  margin-top: 2rem; /* Ajout d'un espacement en haut */
  min-height: 2.5rem; /* Réduction de la hauteur minimale */

  &:hover {
    background: #dddddd;
  }
`;

const FormActions = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  color: var(--secondary);
  gap: 1rem;
  margin-top: 0.5rem;
`;

const FormActionLink = styled.a`
  color: #1D1D1D;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const App = () => {
  return (
    <Root>
      <Form className="my-form">
        <WelcomeRow className="login-welcome-row">
          <LogoLink href={"/"}>
            <Logo />
          </LogoLink>
          <WelcomeHeading>Welcome back 👋</WelcomeHeading>
          <DescriptionText>Please enter your details!</DescriptionText>
        </WelcomeRow>

        <InputWrapper className="input__wrapper">
          <InputField
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            autoComplete="off"
            className="input__field"
          />
          <Email />
          <InputLabel htmlFor="email" className="input__label">Email:</InputLabel>
          
        </InputWrapper>

        <InputWrapper className="input__wrapper">
          <InputField
            type="password"
            id="password"
            placeholder="Your Password"
            title="Minimum 6 characters at least 1 Alphabet and 1 Number"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
            required
            autoComplete="off"
            className="input__field"
          />
          <Password />
          <InputLabel htmlFor="password" className="input__label">Password</InputLabel>
        </InputWrapper>

        <FormButton type="submit" className="my-form__button">Login</FormButton>

        <SocialsRow className="socials-row">
          <SocialLink href="#" title="Use Google">
            <Google />
            Log in with Google
          </SocialLink>
        </SocialsRow>

        <FormActions className="my-form__actions">
          <div className="my-form__row">
            <span>Don't have an account?</span>
            <FormActionLink href="#" title="Create Account">Sign Up</FormActionLink>
          </div>
        </FormActions>
      </Form>
    </Root>
  );
};

export default App;