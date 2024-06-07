import { Box, Container, Icon, Stack, Text } from '@chakra-ui/react';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <Box bg='brand.800'>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        color='brand.900'
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text fontSize='12px'>
          © {Year} Hospital Management Systems. All rights reserved
        </Text>

        <Stack direction={'row'} spacing={6}>
          <Icon as={FaFacebookF} boxSize={4} color='brand.900' />
          <Icon as={BsTwitterX} boxSize={4} color='brand.900' />
          <Icon as={BsInstagram} boxSize={4} color='brand.900' />
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
