import { useState, useEffect } from 'react'
import ArmotizationFormular from '../ArmotizationFormular'

const useCalculateRepaymentSchedule = ({ amount, date, interest, repaymentCycle, durationUnit, durationType, interestDuration, interestMethod }) => {
    const [repaymentItems, setRepaymentItems] = useState([])

    useEffect(() => {
        console.log({ durationUnit, durationType, repaymentCycle, interestDuration })

        const items = ArmotizationFormular({
            amount,
            date,
            rawRepaymentCycle: repaymentCycle,
            durationUnit,
            rawDurationPeriod: durationType,
            rawInterestCycle: interestDuration,
            interestRate: interest,
            rawInterestMethod: interestMethod
        })

        setRepaymentItems(items)

    }, [amount, date, interest, repaymentCycle, durationUnit, durationType, interestDuration, interestMethod])


    console.log({ repaymentItems })

    return repaymentItems.length <= 1 ?
        {
            monthlyPayment: '',
            nextPayment: '',
            payments: repaymentItems
        }

        :

        {
            monthlyPayment: repaymentItems[1].payment,
            nextPayment: repaymentItems[1].dueDate,
            payments: repaymentItems
        }
}

export default useCalculateRepaymentSchedule