import React from "react";
import {Box,HStack,Flex,Center,Button,Heading} from "@chakra-ui/react"
import NavbarFeatures from "../NavbarFeatures/NavbarFeatures";
export const Navbar=()=>{

    return (
        // main box of border part in navbar start
        <Box 
          border='1px solid #CBD5E0'
          borderRadius='5px'
          w='100%'
          h='70px'
        >
            {/* flex box inside three box which contain three components start */}
            <Flex
              align='center'
              justify='space-around'
            //   px='10px'
            //   py='5px'
              gap={5}
            >
               {/* first box contain logo of website starting box */}
                 <Box
                //   border='1px solid teal'
                  w='25%'
                  h='65px'
                  px='10px'
                  py='15px'
                 >
                   <Heading as='em' 
                   textAlign='center' 
                   fontWeight='medium'
                    fontSize='28px' color='#81E6D9'
                   
                   >EDU Solutions</Heading>
                 </Box>
               {/* first box contain logo of website starting end */}
               {/* second box which contain some import features reauired  like product about overview for website box start */}
                 <Box
                //   border='1px solid teal'
                  w='50%'
                  h='65px'
                 >
                  <NavbarFeatures/>
                 </Box>
               {/* second box which contain some import features reauired for website box end */}
               {/* third box user profile pictures and login signup start box */}
                 <Box
                //    border='1px solid teal'
                   w='20%'
                   h='65px'
                   px='20px'
                   py='15px'
                 >
                    {/* Profile pictures */}
                    <Flex
                        align='center'
                        justify='space-around'
                    >
                    <HStack>
                        <Center 
                        >
                              <Button colorScheme='teal'>SignUp</Button>
                        </Center>
                    </HStack>
                    </Flex>
                </Box>
               {/* third box user profile pictures and login signup end box */}
            </Flex>
            {/* flex box inside three box which contain three components start */}
        </Box>
        // main box of border part in navbar end

    )
}