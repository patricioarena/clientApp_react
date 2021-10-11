import React from 'react'
import HelloWorld from '../Components/HelloWorldHook'
// import { useAuth } from "../Contexts/AuthContext"
function ProviderHome() {
    // const { currentUser, userToken } = useAuth()

    return (
        <div>
            <h1>Provider Home</h1>
            <HelloWorld name="Nombre Provider" />
            <p>fsd
                {/* { userToken && JSON.stringify(userToken)}
            { currentUser && JSON.stringify(currentUser.email)} */}
            </p>
        </div>
    )
}
export default ProviderHome