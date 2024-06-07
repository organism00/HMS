import {
  Box,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../routes/paths';
import {
  MdContacts,
  MdDashboard,
  MdMonitorHeart,
  MdOutlineApartment,
  MdOutlineEqualizer,
  MdOutlineLogout,
  MdSettings,
} from 'react-icons/md';

const Sidebar = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const location = useLocation();
  const navigate = useNavigate();

  const menuLinks = [
    { name: 'Overview', path: AppRoutes.overview, icon: MdDashboard },
    { name: 'Schedule', path: AppRoutes.schedule, icon: MdContacts },
    { name: 'Patients', path: AppRoutes.patient, icon: MdMonitorHeart },
    {
      name: 'Departments',
      path: AppRoutes.department,
      icon: MdOutlineApartment,
    },
  ];

  const moreLinks = [
    { name: 'Reports', path: AppRoutes.reports, icon: MdOutlineEqualizer },
    { name: 'Settings', path: AppRoutes.settings, icon: MdSettings },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    sessionStorage.clear();
    navigate(AppRoutes.app);
  };

  return (
    <Box
      w={isDesktop ? '200px' : '60px'}
      h='90vh'
      bg='brand.900'
      px={[2, 6]}
      py={isDesktop ? 8 : 20}
    >
      {/* <Image pb={[2, 6]} src={Spectalogo} alt='logo' /> */}

      <Stack
        spacing={[28, 32]}
        fontSize='14px'
        color='brand.800'
        textAlign={['center', 'left']}
      >
        <Box py={[4, 8]}>
          <Text fontSize='10px'>MENU</Text>
          {menuLinks.map((link) => (
            <Link as={NavLink} key={link.name} to={link.path}>
              <HStack
                my={4}
                px={[2, 0]}
                _hover={{
                  transform: 'scale(1.1)',
                  transition: 'transform 0.2s',
                }}
                color={isActive(link.path) ? 'brand.200' : 'brand.800'}
              >
                <Icon as={link.icon} boxSize={isDesktop ? 4 : 6} />
                {isDesktop ? <Text>{link.name}</Text> : null}
              </HStack>
            </Link>
          ))}
        </Box>

        <Box py={[4, 8]}>
          <Text fontSize='10px' color='brand.800'>
            MORE
          </Text>
          {moreLinks.map((link) => (
            <Link as={NavLink} key={link.name} to={link.path}>
              <HStack
                my={4}
                px={[2, 0]}
                _hover={{
                  transform: 'scale(1.1)',
                  transition: 'transform 0.2s',
                }}
                color={isActive(link.path) ? 'brand.200' : 'brand.800'}
              >
                <Icon as={link.icon} boxSize={isDesktop ? 4 : 6} />
                {isDesktop ? <Text>{link.name}</Text> : null}
              </HStack>
            </Link>
          ))}
          <HStack
            my={4}
            px={[2, 0]}
            cursor='pointer'
            _hover={{
              transform: 'scale(1.1)',
              transition: 'transform 0.2s',
            }}
            onClick={handleLogout}
          >
            <Icon as={MdOutlineLogout} boxSize={isDesktop ? 4 : 6} />
            {isDesktop ? <Text>Logout</Text> : null}
          </HStack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
