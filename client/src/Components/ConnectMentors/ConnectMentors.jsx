import React,{useRef} from "react";
import {Button,
    Modal,ModalOverlay,
    ModalContent,ModalHeader
    ,ModalCloseButton,
    ModalBody,
    useDisclosure,
    Input,
    Box,
    Flex,
    Avatar ,
    Text
} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import { useState } from "react";
export const ConnectMentors=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const [message,setMessage] =useState('')
    const[messageReciver,setMessageReciver]=useState([])
    const handleChangeMessage=(e)=>{
         setMessage(e.target.value)
    }
    const handleMessageReciver=()=>{
        // console.log("message",message)
        const payload={
            text:message
        }
        setMessageReciver([...messageReciver,payload])
        setMessage(" ")
    }
    // console.log("Reciver",message)
    // console.log("Reciver",messageReciver)
  
    return (
        <>
         <Button onClick={onOpen} colorScheme='teal' color='white'>Connect Now</Button>
         <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            isCentered={true}
            size='xl'
           
         >
         <ModalOverlay />
         <ModalContent h='560px' >
          <ModalHeader>Chat With Mentors </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={4}>
              <Box
                // border='1px solid teal'
                w='100%'
                h='480px'
                borderRadius='20px'
                bg='teal.50'
                // justifyItems='center'
              >
                {/* flex box viewer and sender box  start*/}
                <Flex
                  direction='column'
                  justify='space-around'
                  align='center'
                  px='5px'
                  py='5px'
                  gap={1}
                >
                    {/* viewer box start and sender and viewer profile and message start */}
                      <Box
                        border='1px solid #CBD5E0'
                        w='100%'
                        h='400px'
                        px='10px'
                        py='5px'
                        borderRadius='20px'
                      >
                       <Flex
                         direction='row'
                         align='center'
                         justify='space-around'
                          gap={2}
                       >
                        {/* incomning message user name and profile start */}
                        <Box>
                          <Flex
                            direction='column'
                            px='5px'
                            py='2px'

                          >
                             <Avatar size='sm' marginLeft='-45px' src='https://bit.ly/broken-link' />
                             <Text px='5px' py='8px' fontSize='14px'  color='whiteAlpha.900' borderRadius='5px' textAlign='center' marginLeft='5px' bgColor='gray.300'>hello </Text>
                          </Flex>
                        </Box>
                        {/* incomning message user name and profile start */}
                        {/* sending message user name and profile  */}
                        <Box>
                        <Flex
                            direction='column'
                            px='5px'
                            py='2px'
                            gap={2}
                        >
                            {/* <Avatar marginLeft='-65px' src='https://bit.ly/broken-link' /> */}
                            {messageReciver?.length>0&& messageReciver.map((message,index)=>(
                               <Text key={index} px='5px' py='8px' color='whiteAlpha.900' fontSize='14px' borderRadius='5px' textAlign='center' marginLeft='5px' bgColor='teal.200'>{message.text}</Text>
                            ))}
                            
                        </Flex>
                        </Box>
                       </Flex>
                      </Box>
                    {/* viewer box start and sender and viewer profile and message end */}
                    {/* Text area and send user start */}
                      <Box
                         border='1px solid #CBD5E0'
                         w='100%'
                         h='70px'
                         px='10px'
                         py='12px'
                         borderRadius='20px'
                        >
                         <Flex
                          justify='space-around'
                          align='center'
                          gap={2}
                          px='5px'
                          py='2px'
                         >
                          <Input value={message} onChange={handleChangeMessage} placeholder='write message'/>
                          <Button colorScheme='teal'
                           onClick={handleMessageReciver}
                          >Send</Button>
                          <Button colorScheme='teal'><Link to='/mentor'>Connect</Link></Button>
                         </Flex>
                      </Box>
                    {/* Text area and send user end */}
                    
                </Flex>
                {/* flex box viewer and sender box  start*/}
              </Box>
          </ModalBody>
         </ModalContent>
         </Modal>
        </>
    )
}