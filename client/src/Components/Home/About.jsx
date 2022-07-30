import React from 'react'
import {Box,Flex,Text} from "@chakra-ui/react"
function About() {
  return (
    <Box
    //   border='1px solid #CBD5E0'
      w='70%'
      h='200px'
      borderRadius='20px'
      boxShadow='md' p='' rounded='md' bg='white'
      bgColor='teal.300'
      opacity='0.3'
    >
        <Text color='whiteAlpha.900'>About Us</Text>
        <Flex
         align='center'
         justify='space-around'


        >
          <Text color='white'>
           {/* EDU solutions-tech company and the creator of India's most loved school learning app. Launched in 2015, BYJU'S offers highly personalised and effective learning programs for classes 1 - 12 (K-12), and aspirants of competitive exams like JEE, IAS etc. With 50 million registered students and 3.5 million paid subscriptions, BYJU'S has become one of the most preferred education platforms across the globe. */}
          </Text>
        </Flex>

    </Box>
  )
}

export default About