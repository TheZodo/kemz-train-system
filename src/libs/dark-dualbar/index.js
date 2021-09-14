import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import DarkTopbar from 'libs/components/dark-topbar'
import DarkSidebar from 'libs/components/dark-sidebar'

/**
 * combination of dark topbar and dark sidebar
 */
function DarkDualBar(props) {

    const checkIsMobile = () => {
        const match = window.matchMedia(`(max-width: 768px)`);
        return match.matches
    }


    const [isMobile, setIsMobile] = useState(checkIsMobile)



    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsMobile(checkIsMobile());
        })
    }, [])

    //console.log({ navItems: props.navItems })

    return (
        isMobile ?
            <DarkTopbar
                data-testid='mobile-dashboard'
                {...props} logo={props.mobileLogo} />
            :
            <DarkSidebar
                data-testid='desktop-dashboard'
                {...props} logo={props.desktopLogo} />
    )
}

/**
 * 
 * @param {*} props 
 * @returns 
 */
DarkDualBar.propTypes = {
    mobileLogo: PropTypes.object.isRequired,
    desktopLogo: PropTypes.object.isRequired,
    profile: PropTypes.shape({
        picUrl: PropTypes.string,
        email: PropTypes.string,
        name: PropTypes.string,
    }),
    navItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.object,
        href: PropTypes.string,
    })).isRequired
}

/**
 * 
 * @param {*} props 
 * @returns 
 */
export default DarkDualBar

