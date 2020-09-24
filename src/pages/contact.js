import React from "react"
import { Container } from "../components"
import { MainWrapper, MainContentWrapper, ButtonWrapper, H1, Form, Input } from "../components/styles"

const ContactPage = () => {

    return (
        <Container>
            <MainWrapper>
                <MainContentWrapper>                   
                    <div style={{padding:"2rem"}}>
                        <H1>Contact</H1>
                        <Form>
                            <Input type="text" name="email" placeholder="Email" />
                            <Input type="password" name="password" placeholder="Password" />
                            <ButtonWrapper type="submit">Submit</ButtonWrapper>
                        </Form>
                    </div>
                </MainContentWrapper>
            </MainWrapper>
        </Container>
    )
}

export default ContactPage
