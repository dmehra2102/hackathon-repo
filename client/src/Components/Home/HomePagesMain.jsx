import React from "react";
import {Box,Flex,Heading,Highlight,Image,Text,Button} from "@chakra-ui/react"
 const subTitle=['Connect Mentors']
export const HomePageMain=()=>{

    return (
        // mentors details  mentors connected box  
        <Box
        //   border='1px solid teal'
          w='70%'
          h='400px'
          px='10px'
          py='15px'
          borderRadius='15px'
          boxShadow='md' p='6' rounded='md' bg='white'
        >
            <Heading fontSize='16px' fontWeight='medium'>
             {subTitle.map((item)=>(
                 <Highlight
                 key={item.length}
                 query="Connect Mentors"
                 styles={{ px: '2', py: '1', rounded: 'md', bg: 'teal.100' }}
                >
                  {item}
                </Highlight>
                ))}
            
            </Heading>
         <Flex
          direction='row'
          justify='space-around'
          align='center'
          gap={3}
          py='15px'
         >
            <Image  h='300px' src='https://static.uacdn.net/web-cms/dailyliveclasses_0c0023950f_c187155ee3.svg?q=75&w=1000&fm=webp' borderRadius='10px' />
             <Box>
                <Flex
                 direction='column'
                 justify='space-around'
                 align='center'
                 gap={3}

                >
                    <Heading fontSize='20px' fontWeight='medium'color='gray.400' >Live Connect Mentors</Heading>
                    <Text textAlign='justify'>Connect with mentors, ask questions, answer live polls, and get your doubts cleared - During the Live connect </Text>
                    <Button>Connect</Button>
                </Flex>
               
             </Box>
         </Flex>
        </Box>
    )
}