import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  IoClose,
  IoInformationCircleOutline,
  IoMenu,
  IoNotificationsOutline,
} from 'react-icons/io5';
import Logo from '../../assets/images/hms-logo.png';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const isAuthenticated = sessionStorage.getItem('isAuthenticated');

  const name = 'Ehizojie Ihayere';

  const profileSection = (
    <HStack spacing={4}>
      <Icon
        as={IoNotificationsOutline}
        boxSize={7}
        color='brand.200'
        cursor='pointer'
      />
      <Icon
        mr={2}
        as={IoInformationCircleOutline}
        boxSize={7}
        color='brand.200'
        cursor='pointer'
      />
      {isAuthenticated ? (
        <HStack spacing={4}>
          <Box textAlign='right' cursor='pointer'>
            <Text fontSize='14px' color='brand.500'>
              {name}
            </Text>
            <Text fontSize='12px' color='brand.100'>
              Manage Profile
            </Text>
          </Box>
          <Avatar
            size={'md'}
            bg='gray.100'
            name={name}
            src={'https://bit.ly/broken-link'}
          />
        </HStack>
      ) : (
        <HStack spacing={4}>
          <Button
            py={5}
            px={6}
            borderRadius={2}
            bg='transparent'
            color='brand.200'
            border='2px solid #2C82DD'
          >
            Login
          </Button>
          <Button
            py={5}
            px={6}
            borderRadius={2}
            bg='brand.200'
            color='white'
            colorScheme='blue'
            border='2px solid #2C82DD'
          >
            Book Appointment
          </Button>
        </HStack>
      )}
    </HStack>
  );

  return (
    <>
      <Flex
        w={'100%'}
        px={12}
        py={8}
        bg='brand.900'
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Image src={Logo} alt='logo' w={'100px'} h='auto' />
        <Icon
          size={'md'}
          as={isOpen ? IoClose : IoMenu}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        {isDesktop && profileSection}
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }} pl={8}>
          {profileSection}
        </Box>
      ) : null}
    </>
  );
};

export default Navbar;
