import React, { Suspense, useState } from 'react'
import { Route, Switch } from 'react-router'
import Loading from '../loading'
import { isLoggedIn } from 'libs/utils/authUtil'

import Login from './login'
import Register from './register'


function Auth({ logo, landingComponent, dashboardComponent, authProvider = <div/> }) {

    const [isAuthenticated] = useState(isLoggedIn())


    return (
        <Switch>
            <Route path='/login'>
                <Suspense fallback={<Loading screen />} >
                    {React.cloneElement(authProvider, {
                        children:
                                <Login logo={logo} />

                    })}
                </Suspense>
            </Route>
            <Route path='/register'>
                <Suspense fallback={<Loading screen />} >
                    {React.cloneElement(authProvider, {
                        children:
                                <Register logo={logo} />

                    })}

                </Suspense>
            </Route>
           

            < Route path='/'>
                {
                    isAuthenticated ?
                        <Suspense fallback={<Loading screen />} >
                            {React.cloneElement(authProvider, {
                                children:
                                        dashboardComponent

                            })
                            }
                        </Suspense>



                        :
                        landingComponent


                }
            </Route>
        </Switch>
    )
}

Auth.propTypes = {

}

export default Auth

