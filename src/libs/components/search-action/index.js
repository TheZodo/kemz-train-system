
import { ChevronDownIcon, SearchIcon, SortAscendingIcon } from '@heroicons/react/solid'
import Button from '../button'


/**
 * 
 * search bar and call to action component
 */
export default function SearchAction({ placeholder, onClick, buttonText, tailwind, className, onChange, buttonTour }) {
    return (
        <div>
            <div className={`pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between sm:flex-row-reverse ${tailwind} ${className}`}>
                <div
                    tour={buttonTour}
                >
                    <Button
                        tailwind='block sm:hidden w-full'
                        size='small'
                        onClick={onClick}
                    >{buttonText}</Button>



                    <Button
                        tailwind='hidden sm:block'
                        size='small'
                        onClick={onClick}
                    >{buttonText}</Button>
                </div>



                <div className="mt-3 sm:mt-0 sm:mr-4">
        </div>

        </div>

        </div>
    )
}

