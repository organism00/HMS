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
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../routes/paths';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const isAuthenticated = sessionStorage.getItem('isAuthenticated');

  const name = 'Ehizojie Ihayere';

  const profileSection = (
    <HStack spacing={[2, 4]} borderRadius='8px'>
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
          <Link to={AppRoutes.login}>
            <Button
              py={[3, 5]}
              px={[4, 6]}
              borderRadius={2}
              bg='transparent'
              color='brand.200'
              border='1px solid #2C82DD'
            >
              Login
            </Button>
          </Link>
          <Link to={AppRoutes.bookAppointment}>
            <Button
              py={[3, 5]}
              px={[4, 6]}
              borderRadius={2}
              bg='brand.200'
              color='white'
              colorScheme='blue'
              border='1px solid #2C82DD'
            >
              Appointment
            </Button>
          </Link>
        </HStack>
      )}
    </HStack>
  );

  return (
    <>
      <Flex
        w={'100%'}
        px={12}
        py={[8, 6]}
        bg='brand.900'
        alignItems={'center'}
        justifyContent={'space-between'}
        boxShadow='0 4px 6px rgba(96, 96, 96, 0.1)'
      >
        <Link to={AppRoutes.home}>
          <Image src={Logo} alt='logo' w={'100px'} h='auto' />
        </Link>
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
        <Box
          pb={4}
          display={{ md: 'none' }}
          pl={4}
          bg={isDesktop ? null : 'brand.900'}
        >
          {profileSection}
        </Box>
      ) : null}
    </>
  );
};

export default Navbar;
