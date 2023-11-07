import React from 'react';
import CartWidget from './CartWidget';
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Image, Circle, Text } from '@chakra-ui/react';

const NavBar = () => {
    return (
        <div>

            <Flex>
                <Box ml={8} mt={2} mb={2} >
                    <Image
                        borderRadius='full'
                        boxSize='45px'
                        src="./src/assets/images/logocuervo.png" alt="logocuervo"
                    />
                </Box>
                <Spacer />
                <Box mt={5} >
                    <Menu>
                        <MenuButton>
                            <Text fontSize='2xl'>
                                Categorias
                            </Text>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Camisetas</MenuItem>
                            <MenuItem>Camperas</MenuItem>
                            <MenuItem>Shorts</MenuItem>
                            <MenuItem>Medias</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Circle size='45px' bg='black' color='white' mr={8} mt={2}>
                    <CartWidget />
                </Circle>
            </Flex>


        </div>
    )
}

export default NavBar