import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as DeleteSVG } from 'images/trash.svg'
import IconButton from 'libs/components/iconbutton'
import Text from 'libs/components/text'
import Wrapper from 'libs/components/wrapper'
import DataText from 'components/data-text'
import { GET_TRAINS } from '..'
import useDeleteHandler from 'components/hooks/useDeleteHandler'




function Item({ fName,lName,phone,email , _id, onEdit, onDelete, isGray, loading}) {

   

    return (
        <div>

            <Wrapper isGray={isGray}
                tailwind={`grid grid-cols-5  py-4 px-2 lg:px-6 items-center juustify-center `}>
                <DataText
                >  {fName}</DataText>
                <DataText
                    tailwind=' mr-8'     > {lName} </DataText>
                <DataText

                    tailwind=''>  {phone}</DataText>
 <DataText
tailwind=' '>  {email}</DataText>


                {!loading &&

                    <div className='flex justify-center items-center  '>

{/**
                        <IconButton
                            tailwind='mx-1 lg:mx-4 text-gray-400'
                            color
                            hasBackground={false}
                            onClick={() => onEdit(_id)}
                            src={<EditSVG />}></IconButton>
 */}

                        <IconButton
                            tailwind='mx-1 lg:mx-4  text-gray-400'
                            color
                            hasBackground={false}
                            onClick={() => onDelete(_id)}
                            src={<DeleteSVG />}></IconButton>
                    </div>
                }
            </Wrapper>
        </div>
    )
}

Item.propTypes = {
    dueDate: PropTypes.string,
    principal: PropTypes.string,
    payment: PropTypes.string,
    interest: PropTypes.string,
    balance: PropTypes.string,



}

export default Item

