import React from "react"
import { Container } from "../components"
import styled from "styled-components"
import { Link } from "gatsby"

const ContactPage = () => {

  return (
    <Container>
      <MainWrapper>
        <div style={{ padding: "2rem" }}>
          <H1>Contact</H1>
          <Form>
            <Input type="text" name="name" placeholder="Name" />
            <Input type="email" name="email" placeholder="Email" />
            <ButtonWrapper type="submit">Submit</ButtonWrapper>
          </Form>
        </div>
      </MainWrapper>
    </Container>
  )
}

export default ContactPage

/* used this styling for the about contact and singlePost page */
const MainWrapper = styled.main`
  display:grid;
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  height:300px;
  display: grid;
  margin:${props => props.theme.spacings.xSmall};

  img,h1,p{
    padding:${props => props.theme.spacings.xSmall};
  }

  h2{
    text-align:center;
  }
 
  div {
    background-color:${props => props.theme.colors.white};
  }
  
  @media ${props => props.theme.breakpoints.tablet} {
    justify-content: center;
    align-items:start;
    grid-column: 2 / span 6;
  }  

  @media ${props => props.theme.breakpoints.desktop} {
    grid-column: 2 / span 10;
  }  
`

const ButtonWrapper = styled(props => <Link {...props} />)`
    padding:0.2rem;
    margin-top: 1rem;
    border-radius: 0.2rem;
    color: ${props => props.theme.colors.greyDark};
    font-weight: ${props => props.theme.weights.xLarge};
    border: 1px solid ${props => props.theme.colors.orange};
    cursor: pointer;
    text-decoration: none;
    
    :hover,
    :focus{
        color: ${props => props.theme.colors.orange};

    }
`
const H1 = styled.h1`
    color: ${props => props.theme.colors.black};
    text-align: ${props => props.textAlign ? props.textAlign.left : 0};
    margin: ${props => props.margin ? props.theme.spacings.xxSmall : 0};
`

/* styling the contact form */
const Input = styled.input`
  height: ${props => props.theme.heights.large};
  border: 1px solid ${props => props.theme.colors.greyLight1};
  padding: ${props => props.theme.spacings.xSmall};
  margin:${props => props.theme.spacings.xxSmall};
  background-color: #fff;
  width:100%;
 
  @media ${props => props.theme.breakpoints.tablet} {
    width:30rem;
  }
`;

const Form = styled.form` 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${props => props.theme.spacings.xSmall};

  @media ${props => props.theme.breakpoints.tablet} {
      display: inline-flex;
      form {
        width:30rem;
      }
  }
`;