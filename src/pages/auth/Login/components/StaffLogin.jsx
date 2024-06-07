import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AppRoutes } from '../../../../routes/paths';
import ForgotPasswordModal from './ForgotPasswordModal';

const StaffLogin = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialValues = {
    emailOrId: '',
    password: '',
    otp: '',
  };

  const validationSchema = Yup.object({
    emailOrId: Yup.string().required('Email or ID is required'),
    password: Yup.string().required('Password is required'),
    otp: Yup.string().required('OTP is required'),
  });

  const handleSubmit = (values) => {
    console.log('Form data', values);
  };

  return (
    <>
      <ForgotPasswordModal isOpen={isOpen} onClose={onClose} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Box spacing={4} align='flex-start' w='100%'>
              <FormControl
                isInvalid={errors.emailOrId && touched.emailOrId}
                my={4}
              >
                <FormLabel htmlFor='emailOrId'>Email or ID</FormLabel>
                <Field as={Input} id='emailOrId' name='emailOrId' />
                <FormErrorMessage>{errors.emailOrId}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={errors.password && touched.password}
                my={4}
              >
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Field
                  as={Input}
                  type='password'
                  id='password'
                  name='password'
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.otp && touched.otp}>
                <FormLabel htmlFor='otp'>OTP</FormLabel>
                <Field as={Input} id='otp' name='otp' />
                <FormErrorMessage>{errors.otp}</FormErrorMessage>
              </FormControl>

              <Text
                textAlign='right'
                fontSize='12px'
                mt={2}
                onClick={onOpen}
                cursor='pointer'
              >
                Forgot Password
              </Text>

              <Button
                w='100%'
                type='submit'
                mt={6}
                py={[3, 5]}
                px={[4, 6]}
                borderRadius={2}
                bg='brand.200'
                color='white'
                colorScheme='blue'
                border='1px solid #2C82DD'
              >
                Login
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
      <Text textAlign='center' fontSize='12px' mt={4}>
        Don&apos;t have an account?{' '}
        <Text
          as='span'
          color='brand.200'
          fontWeight='bold'
          cursor='pointer'
          onClick={() => navigate(AppRoutes.register)}
        >
          Register
        </Text>
      </Text>
    </>
  );
};

export default StaffLogin;
