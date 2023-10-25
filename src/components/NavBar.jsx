import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <div>

            <Flex>
                <Box>
                    <img src="../assets/images/logocuervo.png" alt="logocuervo" />
                    <h3>Brand</h3>
                </Box>
                <Spacer/>
                <Spacer/>
                <Box>
                    <Menu>
                        <MenuButton>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Camisetas</MenuItem>
                            <MenuItem>Camperas</MenuItem>
                            <MenuItem>Shorts</MenuItem>
                            <MenuItem>Medias</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>

                <Spacer/>
                <Box>
                    <CartWidget />
                </Box>
            </Flex>

            
        </div>
    )
}

export default NavBar