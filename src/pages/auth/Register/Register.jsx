import {
  Button,
  VStack,
  Box,
  Text,
  HStack,
  Progress,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { AppRoutes } from '../../../routes/paths.jsx';
import { useNavigate } from 'react-router-dom';
import PatientInfo from './components/PatientInfo.jsx';
import EmergencyContactInfo from './components/EmergencyContactInfo.jsx';
import HealthHistory from './components/HealthHistory.jsx';
import InsuranceInfo from './components/InsuranceInfo.jsx';

const Register = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const steps = [
    { component: <PatientInfo />, label: 'Patient Information' },
    {
      component: <EmergencyContactInfo />,
      label: 'Emergency Contact Information',
    },
    { component: <HealthHistory />, label: 'Health History' },
    { component: <InsuranceInfo />, label: 'Insurance Information' },
  ];

  const currentStep = steps[step].component;

  const validationSchema = [
    Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      phoneNumber: Yup.string().required('Phone Number is required'),
      gender: Yup.string().required('Gender is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
      address: Yup.string().required('Address is required'),
      maritalStatus: Yup.string().required('Marital Status is required'),
      dateOfBirth: Yup.date().required('Date of Birth is required'),
    }),
    Yup.object({
      kinFirstName: Yup.string().required('First Name is required'),
      kinLastName: Yup.string().required('Last Name is required'),
      middleName: Yup.string(),
      kinRelationship: Yup.string().required('Relationship is required'),
      kinPhoneNumber: Yup.string().required('Phone Number is required'),
      kinEmail: Yup.string().required('Phone Number is required'),
      kinAddress: Yup.string().required('Address is required'),
    }),
    Yup.object({
      reasonForRegistration: Yup.string().required(
        'Reason for Registration is required'
      ),
      areYouOnAnyMedication: Yup.string().required('This field is required'),
      additionalNotes: Yup.string(),
    }),
    Yup.object({
      doYouHaveInsurance: Yup.string().required('This field is required'),
      insurancecompany: Yup.string().when('doYouHaveInsurance', {
        is: 'yes',
        then: Yup.string().required('Insurance Company is required'),
      }),
      insuranceId: Yup.string().when('doYouHaveInsurance', {
        is: 'yes',
        then: Yup.string().required('Insurance ID is required'),
      }),
      policyHolderFirstName: Yup.string().when('doYouHaveInsurance', {
        is: 'yes',
        then: Yup.string().required('Policy Holder First Name is required'),
      }),
      policyHolderLastName: Yup.string().when('doYouHaveInsurance', {
        is: 'yes',
        then: Yup.string().required('Policy Holder Last Name is required'),
      }),
    }),
  ];

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    password: '',
    confirmPassword: '',
    address: '',
    maritalStatus: '',
    dateOfBirth: '',
    kinFirstName: '',
    kinLastName: '',
    middleName: '',
    kinRelationship: '',
    kinPhoneNumber: '',
    kinEmail: '',
    kinAddress: '',
    reasonForRegistration: '',
    areYouOnAnyMedication: '',
    additionalNotes: '',
    doYouHaveInsurance: '',
    insurancecompany: '',
    insuranceId: '',
    policyHolderFirstName: '',
    policyHolderLastName: '',
  };

  const handleSubmit = (values, actions) => {
    if (step === steps.length - 1) {
      // Final step, handle form submission
      console.log('Form submitted', values);
      actions.setSubmitting(false);
    } else {
      // Move to the next step
      setStep(step + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <>
      <Box bg='brand.100' h='300px' textAlign='center'>
        <Text fontSize='3xl' fontWeight={700} pt={32}>
          Register
        </Text>
        <Text>Manage your health information and appointments in one place.</Text>
      </Box>
      <Box
        bg='white'
        w={['90%', '60%', '60%']}
        ht='fit-content'
        p={8}
        mx='auto'
        mt={-20}
        mb={20}
        borderRadius='8px'
        boxShadow='-3px 9px 57px -21px rgba(96,96,96,0.75)'
      >
        <Box p={[1, 8]} maxWidth='600px' mx='auto'>
          <Flex justify='space-between' align='center'>
            <Text fontSize={['16px', '24px']}>{steps[step].label}</Text>
            <HStack spacing={2}>
              <Progress
                value={(step + 1) * 25}
                h='5px'
                w='30px'
                borderRadius='8px'
              />
              <Text fontSize='10px' w='40px'>
                {step + 1} of {steps.length}
              </Text>
            </HStack>
          </Flex>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema[step]}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <VStack spacing={4} align='flex-start' mt={6} w='100%'>
                  {currentStep}

                  <HStack spacing={4} align='flex-end' w='100%' mt={4}>
                    {step > 0 && (
                      <Button
                        w='50%'
                        onClick={handlePrevious}
                        py={[3, 5]}
                        px={[4, 6]}
                        borderRadius={2}
                        bg='transparent'
                        color='brand.200'
                        border='1px solid #2C82DD'
                      >
                        Previous
                      </Button>
                    )}
                    <Button
                      w='50%'
                      type='submit'
                      isLoading={isSubmitting}
                      py={[3, 5]}
                      px={[4, 6]}
                      borderRadius={2}
                      bg='brand.200'
                      color='white'
                      colorScheme='blue'
                      border='1px solid #2C82DD'
                    >
                      {step === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                  </HStack>
                </VStack>
              </Form>
            )}
          </Formik>
          <Text fontSize='12px' mt={4}>
            Already have an account?{' '}
            <Text
              as='span'
              color='brand.200'
              fontWeight='bold'
              cursor='pointer'
              onClick={() => navigate(AppRoutes.login)}
            >
              Log in
            </Text>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Register;
