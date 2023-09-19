import { Popover as MPopover, PopoverProps as MPopoverProps } from '@mui/material'
import { ReactNode } from 'react'

type PopoverProps = {
    open: boolean
    onClosePopover: () => void
    popoverProps?: MPopoverProps
    children: ReactNode
    id: string
}

const Popover = ({ open, onClosePopover, popoverProps = {} as MPopoverProps, children, id }: PopoverProps) => {
    const {
        open: _open,
        anchorOrigin = {
            vertical: 'bottom',
            horizontal: 'center'
        },
        transformOrigin = {
            vertical: 'top',
            horizontal: 'center'
        },
        ...rest
    } = popoverProps
    return (
        <MPopover
            id={id}
            disableRestoreFocus
            onClose={onClosePopover}
            open={open}
            sx={{
                '.MuiPaper-root': {
                    borderRadius: 1.5,
                    backgroundColor: 'inherit'
                }
            }}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
            {...rest}
        >
            {children}
        </MPopover>
    )
}

export default Popover
