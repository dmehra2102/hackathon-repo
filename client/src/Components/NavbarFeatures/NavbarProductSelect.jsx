import React from 'react'
import {Menu,MenuButton,MenuList,MenuItem} from "@chakra-ui/react"
import {Link} from "react-router-dom"

function NavbarProductSelect() {
  return (
    <Menu isLazy >
    <MenuButton>Mentors</MenuButton>
    <MenuList px='30px' py='5px' align='center'marginLeft='-90px' w='100px'>
      <MenuItem >
        <Link to='technicalMentors' _hover='teal'>Techical Mentors</Link>
      </MenuItem>
      <MenuItem>
        <Link to='scienceMentos'>
          Science Mentors
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to='mathmentors'>
          Math Mentors
        </Link>
      </MenuItem>
    </MenuList>
  </Menu>
  )
}

export default NavbarProductSelect