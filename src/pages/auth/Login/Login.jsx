import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import PatientLogin from './components/PatientLogin';
import StaffLogin from './components/StaffLogin';

const Login = () => {
  const [loginOption, setLoginOption] = useState('patient');
  return (
    <>
      <Box bg='brand.100' h='300px' textAlign='center'>
        <Text fontSize='3xl' fontWeight={700} pt={32}>
          Welcome
        </Text>
      </Box>
      <Box
        bg='white'
        w={['90%', '60%', '35%']}
        ht='fit-content'
        p={8}
        mx='auto'
        mt={-20}
        mb={20}
        borderRadius='8px'
        boxShadow='-3px 9px 57px -21px rgba(96,96,96,0.75)'
      >
        <Text textAlign='center' mb={4}>
          Log in as a patient or staff to access your information and
          appointments.
        </Text>
        <HStack spacing={4} mb={8}>
          <Button w='50%' onClick={() => setLoginOption('patient')}>
            Patient
          </Button>
          <Button w='50%' onClick={() => setLoginOption('staff')}>
            Staff
          </Button>
        </HStack>
        {loginOption === 'patient' ? <PatientLogin /> : <StaffLogin />}
      </Box>
    </>
  );
};

export default Login;
