import React, { useState, useEffect } from 'react';
import Card from '../card';
import PropTypes from 'prop-types'

const DescriptionList = ({ heading, subHeading, children: childrenParams, invert, mobileFlat, horizontal, tailwind }) => {
    const [filteredChildren, setFilteredChildren] = useState([])

    let children = childrenParams

    if (typeof childrenParams.length === 'undefined') {
        children = [childrenParams]
    }


    const extractChildren = (children) => {
        let rChildren = []
        let iterations = 0

        const extract = (child) => {
            iterations++
            let foundChildren = false

            child && child.props.children && child.props.children.map(child => {
                foundChildren = true
                extract(child)
            })

            if (!foundChildren && child) {
                rChildren.push(child)
            }

        }


        extract(children)

        return rChildren
    }

    useEffect(() => {
        console.log('description list useEffect')

        const fChildren = []
        children.map(child => {
            if (child && child.props.customContent) {
                fChildren.push(child)
            } else {
                const extractedChildren = extractChildren(child)
                const validExtractedChildren = extractedChildren.filter(child => {
                    if (child && child.props.content) {
                        return true
                    } else {
                        return false
                    }
                })
                fChildren.push(...validExtractedChildren)
            }
        })

        setFilteredChildren(fChildren)

    }, [children])




    return (
        <div className={`w-full ${tailwind} `}>

            <Card
                shadow
                rounded
                tailwind={`w-full shadow-sm md:shadow-md md:rounded-lg ${!mobileFlat && 'rounded-lg'}`}
                header={{
                    heading: heading,
                    subHeading: subHeading
                }}
            >


                {
                    filteredChildren.map((child, index) => {
                        let tailwind
                        if (index === (children.length - 1)) {
                            tailwind = 'rounded-b-lg'
                        }
                        let isEven = (index % 2 === 0)

                        if (invert) { isEven = !isEven }
                        return React.cloneElement(child, {
                            tailwind: tailwind,
                            isEven: isEven,
                            horizontal
                        })
                    })
                }
            </Card>

        </div>
    );
};

DescriptionList.defaultProps = {
    /**determines whether the even and odd background colors should  be inverted */
    invert: false,
    /**determines whether to remove the rounded in the mobile view */
    mobileFlat: true,
    horizontal: false,
}

DescriptionList.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,

}

export default DescriptionList;