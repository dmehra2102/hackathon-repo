import React from "react";
import {Box,HStack,Flex} from "@chakra-ui/react"
export const Navbar=()=>{

    return (
        // main box of border part in navbar start
        <Box 
          border='2px solid #CBD5E0'
          w='100%'
          h='75px'
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
                  border='1px solid teal'
                  w='15%'
                  h='70px'
                 >
                   logo
                   {/* todo */}
                 </Box>
               {/* first box contain logo of website starting end */}
               {/* second box which contain some import features reauired  like product about overview for website box start */}
                 <Box
                  border='1px solid teal'
                  w='45%'
                  h='70px'
                 >
                        features

                    <HStack>
                        {/* todo */}
                    </HStack>

                 </Box>
               {/* second box which contain some import features reauired for website box end */}
               {/* third box user profile pictures and login signup start box */}
                 <Box
                   border='1px solid teal'
                   w='35%'
                   h='70px'
                 >
                    Profile pictures
                    <HStack>
                      
                    </HStack>
                </Box>
               {/* third box user profile pictures and login signup end box */}
            </Flex>
            {/* flex box inside three box which contain three components start */}
        </Box>
        // main box of border part in navbar end

    )
}