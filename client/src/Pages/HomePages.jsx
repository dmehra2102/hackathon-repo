import { Box,Flex } from "@chakra-ui/react";
import React from "react";
import {Outlet} from "react-router-dom"
export const HomePages=()=>{

    return (
        <Box
         marginTop='10px'
         border='1px solid red'
         w='100%'
         px='20px'
         py='15px'
        >
            HomePages
            {/* all components import here start  */}
            <Flex
              direction='column'
              justify='space-around'
              align='center'
              gap={4}
            >
              <Outlet/>
            </Flex>
            {/* all components import here end  */}
        </Box>
    )
}