import { useEffect, useState } from "react"
import { useMutation } from '@apollo/react-hooks'
import ConfirmDelete from 'libs/components/dialog'
import ErrorAlert from 'libs/components/signin/components/alert/error'


/**
 * handles deleting server data such as loans and borrowers
 */
const useDeleteHandler = ({ dialogText, query, refetchQueries, onCompleted, id }) => {
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)


    const [deleteMutate, { loading, error }] = useMutation(query, {
        onError: e => {
            setShowConfirmDelete(false)
            console.log(e)
        },
        onCompleted,
        refetchQueries
    })

    const errorAlert = <ErrorAlert
        isShown={error}
        tailwind='my-4'
    />

    const deleteDialog = <ConfirmDelete
        confirmText='Delete'
        text={dialogText}
        isShown={showConfirmDelete}
        onCloseComplete={() => setShowConfirmDelete(false)}
        onConfirm={() => {
            setShowConfirmDelete(false)
            deleteMutate({ variables: { id } })
        }}
    />

    /**
     * 
     */
    const dangerZoneOnClick = () => {
        setShowConfirmDelete(true)
    }

    return { dangerZoneOnClick, deleteDialog, loading, errorAlert }
}

export default useDeleteHandler