import React from 'react'
import {Select} from "@chakra-ui/react"
function NavbarProductSelect() {
  return (
    <Select placeholder='Product' textAlign='center' >
        <option value="eng" border='none'  _hover='teal'>Engineering</option>
        <option value="med" border='none'  >Medical</option>
        <option value="art" border='none'  >Arts</option>
        <option value="sci" border='none'  >Science</option>
    </Select>
  )
}

export default NavbarProductSelect