import React from 'react'
import '@testing-library/jest-dom'
import Dashboard from '.'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import Logo from 'images/logo.png'

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
    useLocation: jest.fn().mockReturnValue({
        pathname: '/another-route',
        search: '',
        hash: '',
        state: null,
        key: '5nvxpbdafa',
    }),
}));

describe('Dual Dashboard Component', () => {

    test('bj',()=>{
        
    })
/*
    beforeAll(() => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // Deprecated
                removeListener: jest.fn(), // Deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        });
    })

    


    beforeEach(() => {

        render(
            <Dashboard
                navItems={[{
                    name: 'test',
                    icon: Logo,
                    href: ''
                }]}
                desktopLogo={Logo}
                profile={{
                    name: 'test',
                    email: 'test@gmail.com',
                    pickUrl: ''
                }}
                mobileLogo={Logo} />
        )
    })

    test('show mobile dashboard', async () => {
        // Change the viewport to 500px.
        global.innerWidth = 500;

        // Trigger the window resize event.
        global.dispatchEvent(new Event('resize'));

        expect(screen.getByTestId('mobile-dashboard')).toBeInTheDocument()
        expect(screen.queryByTestId('desktop-dashboard')).not.toBeInTheDocument()
    })

    test('show desktop dashboard', async () => {
        // Change the viewport to 500px.
        global.innerWidth = 1000;

        // Trigger the window resize event.
        global.dispatchEvent(new Event('resize'));

        expect(screen.queryByTestId('mobile-dashboard')).not.toBeInTheDocument()
        expect(screen.getByTestId('desktop-dashboard')).toBeInTheDocument()
    })
    */
})