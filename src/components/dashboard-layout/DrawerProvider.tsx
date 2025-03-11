"use client"

import { createContext, PropsWithChildren, useState } from "react";

 export const DrawerContext = createContext({isOpen:true,handleOpen:()=>{},handleClose:()=>{}})

export default function DrawerProvider({children}:PropsWithChildren) {
    const [Open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <DrawerContext 
        value={{
            isOpen:Open,
            handleOpen,
            handleClose}}>
            {children}
        </DrawerContext>
    )
}