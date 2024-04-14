import React from 'react';
import {
    Flex,
    Box,
    Link,
    Image,
} from '@chakra-ui/react';
import Logo from './image/logo.png';

function NavBar() {
    return (
        <Flex p={4} color="black" justifyContent="space-between" alignItems="center">
            <Flex>
                <Box p="2" ml="10">
                    <Link href="#" _hover={{ textDecoration: 'none' }}>Home</Link>
                </Box>
                <Box p="2" ml="10">
                    <Link href="#" _hover={{ textDecoration: 'none' }}>About</Link>
                </Box>
                <Box p="2" ml="10">
                    <Link href="#" _hover={{ textDecoration: 'none' }}>Services</Link>
                </Box>
            </Flex>
            <Box p="2">
                <Link href="#" _hover={{ textDecoration: 'none' }}>
                    <Image src={Logo} alt="Logo" boxSize="40px" />
                </Link>
            </Box>
            <Flex>
                <Box p="2" ml="10">
                    <Link href="#" _hover={{ textDecoration: 'none' }}>Portfolio</Link>
                </Box>
                <Box p="1" ml="10" bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' borderRadius="md" boxShadow="md">
                    <Link href="#" _hover={{ textDecoration: 'none', bg: 'orange.500' }} p={2} display="block">
                        INQUIRE
                    </Link>
                </Box>
            </Flex>
        </Flex>
    );
}

export default NavBar;
