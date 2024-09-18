'use client'
import { Box, Text } from "@mantine/core"
import Gradient from '../../page.module.css'
import classes from './Services.module.css'
import { FeaturesCards } from "../Card/Card"


export const Services=()=>{

    return(
        <>
        <Box
        className={Gradient.bg_gradient}
        style={{border:"0px solid red", width:"100%",
            padding:'1%'
        }}
        >
        <FeaturesCards/>
        </Box>
        
        </>
    )
}