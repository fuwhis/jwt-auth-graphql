import { Card as MCard } from '@mui/material'
import { ReactNode } from 'react'

interface CardProps {
    children: ReactNode
    sx: string
}

const Card = ({
    children
}: CardProps) => {
    return (
        <MCard>
            {children}
        </MCard>
    )
}

export default Card