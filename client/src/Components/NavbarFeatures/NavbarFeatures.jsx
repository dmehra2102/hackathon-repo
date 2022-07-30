import React from 'react'
import {Box,Flex} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import NavbarProductSelect from './NavbarProductSelect'
// const features =['Product','About','Overview']
function NavbarFeatures() {

  return (
    // features start 
    <Flex
     alignItems='center'
     justifyContent='space-around'
     px='5px'
     py='20px'
     gap={1}
    >
      {/* Home to redirect page start  */}
         <Box>
           <Link to='/'>Home</Link>
         </Box>
      {/* Home to redirect page end */}
      {/* Product box using select tags start box  */}
           <Box
            w='40%'
           >
               <NavbarProductSelect/>
           </Box>
      {/* Product box using select tags end box */}
      {/* About box means here wirtten something about start box */}
        <Box>
           <Link to='/about' >About</Link>
        </Box>
      {/* About box means here wirtten something about end box */}
      {/* Overview our product start box */}
          <Box>
             <Link to='/overview'>Overview</Link>
          </Box>
      {/* Overview our product end box */}
       
    </Flex>
  )
}

export default NavbarFeatures