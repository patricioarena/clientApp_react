import React from 'react'
import { Jumbotron, Container } from "react-bootstrap"
// import { useAuth } from "../Contexts/AuthContext"
import '../App.css';

function SellerHome() {
    // const { currentUser, userToken } = useAuth()

    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <h1>Seller Home.</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron>
            <div>
                <p>
                    {/* {userToken && JSON.stringify(userToken)}
                    {currentUser && JSON.stringify(currentUser.email)} */}
                </p>
            </div>
        </>
    )
}
export default SellerHome