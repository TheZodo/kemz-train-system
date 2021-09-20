import React from 'react'
import PropTypes from 'prop-types'
import Card from 'libs/components/card'
import Button from 'libs/components/button'
import Text from 'libs/components/text'

function DangerZone({ options, tailwind, className }) {
    return (
        <div className={tailwind + ' ' + className}>
            <Card
                header={{ heading: "Danger Zone" }}
            >
                <div className='p-12'>
                    <div className='border border-red-200 rounded-md w-full'>
                        {options.map((option, index) => (
                            <div key={index} className={'flex p-8 justify-between items-center ' + ((index != options.length - 1) ? 'border-b border-gray-200' : '')}>
                                <div>
                                    <Text color tailwind='text-gray-800 font-medium'>{option.title}</Text>
                                    <Text type='text-small'>{option.content}</Text>
                                </div>

                                <Button
                                    onClick={option.onClick}
                                    size='small'
                                    tailwind='text-red-500 hover:bg-red-600 hover:text-gray-100'
                                    variant='outline'>{option.btnText}</Button>
                            </div>
                        ))}
                    </div>
                </div>

            </Card>
            <div className='h-6' />
        </div>
    )
}

DangerZone.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
        btnText: PropTypes.string,
        onClick: PropTypes.func
    }))
}

export default DangerZone

