import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Image,
  } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import CarWidget from '../CarWidget/CarWidget';
import logo from '../../../src/assets/logo.png'
import palm from '../../../src/assets/palm.png'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <Box>
        <Image 
            src={palm}
            borderRadius='full'
            boxSize='150px'
            height={'50px'}
            width={'50px'}
        />
      </Box>
      <Flex alignItems={'center'}>
        <Stack direction={'row'} spacing={7}>
        <CarWidget />
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>

          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Avatar
                size={'sm'}
                src={logo}
              />
            </MenuButton>
            <MenuList alignItems={'center'}>
              <br />
              <Center>
                <Avatar
                  size={'2xl'}
                  src={logo}
                />
              </Center>
              <br />
              <Center>
                <p>Username</p>
              </Center>
              <br />
              <MenuDivider />
              <MenuItem>Your Servers</MenuItem>
              <MenuItem>Account Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Flex>
    </Flex>
  </Box>
</>
    )
};

export default Navbar;