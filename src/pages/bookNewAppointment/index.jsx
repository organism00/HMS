import {
  Box,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  RadioGroup,
  Radio,
  Stack,
  Select,
  HStack,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const BookAppointment = () => {
  const navigate = useNavigate();

  const timeSlots = [
    '08:30 AM',
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '01:00 PM',
    '01:30 PM',
    '02:00 PM',
    '02:30 PM',
    '03:00 PM',
    '03:30 PM',
    '04:00 PM',
  ];

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    address: '',
    reasonForAppointment: '',
    doYouHaveInsurance: '',
    insurancecompany: '',
    insuranceId: '',
    dateOfAppointment: '',
    availableTimes: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    gender: Yup.string().required('Gender is required'),
    address: Yup.string().required('Address is required'),
    reasonForAppointment: Yup.string().required(
      'Reason for Appointment is required'
    ),
    doYouHaveInsurance: Yup.string().required('This field is required'),
    insurancecompany: Yup.string().when('doYouHaveInsurance', {
      is: 'yes',
      then: Yup.string().required('Insurance Company is required'),
    }),
    insuranceId: Yup.string().when('doYouHaveInsurance', {
      is: 'yes',
      then: Yup.string().required('Insurance ID is required'),
    }),
    dateOfAppointment: Yup.date().required('Date of Appointment is required'),
    availableTimes: Yup.string().required('Available Time is required'),
  });

  const handleSubmit = (values) => {
    console.log('Form data', values);
  };
  return (
    <>
      <Box bg='brand.100' h='300px'>
        <Text fontSize='3xl' textAlign='center' pt={32}>
          Book Appointment
        </Text>
      </Box>
      <Box
        bg='white'
        w={['90%', '70%', '50%']}
        ht='fit-content'
        p={[8, 10, 16]}
        mx='auto'
        mt={[-12, -20]}
        mb={20}
        borderRadius='8px'
        boxShadow='-3px 9px 57px -21px rgba(96,96,96,0.75)'
      >
        <Text textAlign='center' mb={6}>
          Get the Care You Need, When You Need It. Schedule your appointment
          online in a few clicks, skip the waiting room and find a time that
          works for you.
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values }) => (
            <Form>
              <VStack spacing={4} align='flex-start'>
                <Stack direction={['column', 'row']} spacing={4} w='100%'>
                  <FormControl
                    isInvalid={errors.firstName && touched.firstName}
                  >
                    <FormLabel htmlFor='firstName'>First Name</FormLabel>
                    <Field as={Input} id='firstName' name='firstName' />
                    <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.lastName && touched.lastName}>
                    <FormLabel htmlFor='lastName'>Last Name</FormLabel>
                    <Field as={Input} id='lastName' name='lastName' />
                    <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                  </FormControl>
                </Stack>

                <Stack direction={['column', 'row']} spacing={4} w='100%'>
                  <FormControl isInvalid={errors.email && touched.email}>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Field as={Input} id='email' name='email' type='email' />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={errors.phoneNumber && touched.phoneNumber}
                  >
                    <FormLabel htmlFor='phoneNumber'>Phone Number</FormLabel>
                    <Field as={Input} id='phoneNumber' name='phoneNumber' />
                    <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
                  </FormControl>
                </Stack>

                <Stack direction={['column', 'row']} spacing={4} w='100%'>
                  <FormControl isInvalid={errors.gender && touched.gender}>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup name='gender'>
                      <Stack direction='row'>
                        <Field as={Radio} name='gender' value='male'>
                          Male
                        </Field>
                        <Field as={Radio} name='gender' value='female'>
                          Female
                        </Field>
                      </Stack>
                    </RadioGroup>
                    <FormErrorMessage>{errors.gender}</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={
                      errors.doYouHaveInsurance && touched.doYouHaveInsurance
                    }
                  >
                    <FormLabel>Do you have insurance?</FormLabel>
                    <RadioGroup name='doYouHaveInsurance'>
                      <Stack direction='row'>
                        <Field as={Radio} name='doYouHaveInsurance' value='yes'>
                          Yes
                        </Field>
                        <Field as={Radio} name='doYouHaveInsurance' value='no'>
                          No
                        </Field>
                      </Stack>
                    </RadioGroup>
                    <FormErrorMessage>
                      {errors.doYouHaveInsurance}
                    </FormErrorMessage>
                  </FormControl>
                </Stack>

                {values.doYouHaveInsurance === 'yes' && (
                  <Stack direction={['column', 'row']} spacing={4} w='100%'>
                    <FormControl
                      isInvalid={
                        errors.insurancecompany && touched.insurancecompany
                      }
                    >
                      <FormLabel htmlFor='insurancecompany'>
                        Insurance Company
                      </FormLabel>
                      <Field
                        as={Input}
                        id='insurancecompany'
                        name='insurancecompany'
                      />
                      <FormErrorMessage>
                        {errors.insurancecompany}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl
                      isInvalid={errors.insuranceId && touched.insuranceId}
                    >
                      <FormLabel htmlFor='insuranceId'>Insurance ID</FormLabel>
                      <Field as={Input} id='insuranceId' name='insuranceId' />
                      <FormErrorMessage>{errors.insuranceId}</FormErrorMessage>
                    </FormControl>
                  </Stack>
                )}

                <FormControl isInvalid={errors.address && touched.address}>
                  <FormLabel htmlFor='address'>Address</FormLabel>
                  <Field as={Input} id='address' name='address' />
                  <FormErrorMessage>{errors.address}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={
                    errors.reasonForAppointment && touched.reasonForAppointment
                  }
                >
                  <FormLabel htmlFor='reasonForAppointment'>
                    Reason for Appointment
                  </FormLabel>
                  <Field
                    as={Input}
                    id='reasonForAppointment'
                    name='reasonForAppointment'
                  />
                  <FormErrorMessage>
                    {errors.reasonForAppointment}
                  </FormErrorMessage>
                </FormControl>

                <Stack direction={['column', 'row']} spacing={4} w='100%'>
                  <FormControl
                    isInvalid={
                      errors.dateOfAppointment && touched.dateOfAppointment
                    }
                  >
                    <FormLabel htmlFor='dateOfAppointment'>
                      Date of Appointment
                    </FormLabel>
                    <Field
                      as={Input}
                      type='date'
                      id='dateOfAppointment'
                      name='dateOfAppointment'
                    />
                    <FormErrorMessage>
                      {errors.dateOfAppointment}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={errors.availableTimes && touched.availableTimes}
                  >
                    <FormLabel htmlFor='availableTimes'>
                      Available Times
                    </FormLabel>
                    <Field
                      as={Select}
                      id='availableTimes'
                      name='availableTimes'
                      placeholder='Select time'
                    >
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </Field>
                    <FormErrorMessage>{errors.availableTimes}</FormErrorMessage>
                  </FormControl>
                </Stack>

                <HStack w='100%' spacing={4}>
                  <Button
                    type='submit'
                    w='50%'
                    mt={6}
                    py={[3, 5]}
                    px={[4, 6]}
                    borderRadius={2}
                    bg='brand.200'
                    color='white'
                    colorScheme='blue'
                    border='1px solid #2C82DD'
                  >
                    Book Appointment
                  </Button>
                  <Button
                    w='50%'
                    mt={6}
                    py={[3, 5]}
                    px={[4, 6]}
                    borderRadius={2}
                    bg='transparent'
                    color='brand.200'
                    border='1px solid #2C82DD'
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </Button>
                </HStack>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default BookAppointment;
