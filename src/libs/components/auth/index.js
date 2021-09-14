import React, { Suspense, useState } from 'react'
import { Route, Switch } from 'react-router'
import Loading from '../loading'
import { isLoggedIn } from 'libs/utils/authUtil'
const Login = React.lazy(() => import('./login'))
const Register = React.lazy(() => import('./register'))



function Auth({ logo, landingComponent, dashboardComponent, authProvider }) {

    const [isAuthenticated] = useState(isLoggedIn())


    return (
        <Switch>
            <Route path='/login'>
                <Suspense fallback={<Loading screen />} >
                    {React.cloneElement(authProvider, {
                        children:
                            <Suspense fallback={<Loading screen />} >
                                <Login logo={logo} />
                            </Suspense>

                    })}
                </Suspense>
            </Route>
            <Route path='/register'>
                <Suspense fallback={<Loading screen />} >
                    {React.cloneElement(authProvider, {
                        children:
                            <Suspense fallback={<Loading screen />} >
                                <Register logo={logo} />
                            </Suspense>

                    })}

                </Suspense>
            </Route>
           

            < Route path='/'>
                {
                    isAuthenticated ?
                        <Suspense fallback={<Loading screen />} >
                            {React.cloneElement(authProvider, {
                                children:
                                    <Suspense fallback={<Loading screen />} >
                                        {dashboardComponent}
                                    </Suspense>

                            })
                            }
                        </Suspense>



                        :
                        <Suspense fallback={<Loading screen />} >

                            {landingComponent}
                        </Suspense>


                }
            </Route>
        </Switch>
    )
}

Auth.propTypes = {

}

export default Auth

