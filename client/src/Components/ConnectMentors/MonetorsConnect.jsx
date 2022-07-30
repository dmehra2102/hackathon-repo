import React, { useState } from 'react'
import{Box,Button,Input,Flex,Text} from "@chakra-ui/react"
function MonetorsConnect() {
    const[link,setLink] = useState("");
  return (
    <Box
    //  border='1px solid gray'
     w='70%'
     h='100px'
     px='10px'
     py='8px'
     borderRadius='10px'
     boxShadow='md' p='' rounded='md' bg='white'
    >
        <Text>Live Connect Mentors</Text>
        <Flex
          justify='space-around'
          px='10px'
          py='5px'
          gap={3}
          align='center'
        >
            <Text>Meeting Id </Text>
            <Input placeholder='Enter invite meeting url' w='60%' onChange={(e)=> setLink(e.target.value)}/>
            <Button colorScheme='teal' color='white'><a href={link}>Video Connect</a></Button>

        </Flex>

    </Box>
  )
}

export default MonetorsConnect