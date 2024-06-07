import { Field, useFormikContext } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Stack,
  Select,
  VStack,
  FormErrorMessage,
} from '@chakra-ui/react';

const PatientInfo = () => {
  const { errors, touched } = useFormikContext();

  return (
    <VStack spacing={4} align='flex-start' w='100%'>
      <Stack direction={['column', 'row']} spacing={4} w='100%'>
        <FormControl isInvalid={errors.firstName && touched.firstName}>
          <FormLabel fontSize='14px' htmlFor='firstName'>
            First Name
          </FormLabel>
          <Field as={Input} id='firstName' name='firstName' />
          <FormErrorMessage>{errors.firstName}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.lastName && touched.lastName}>
          <FormLabel fontSize='14px' htmlFor='lastName'>
            Last Name
          </FormLabel>
          <Field as={Input} id='lastName' name='lastName' />
          <FormErrorMessage>{errors.lastName}</FormErrorMessage>
        </FormControl>
      </Stack>

      <Stack direction={['column', 'row']} spacing={4} w='100%'>
        <FormControl isInvalid={errors.email && touched.email}>
          <FormLabel fontSize='14px' htmlFor='email'>
            Email
          </FormLabel>
          <Field as={Input} id='email' name='email' type='email' />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.phoneNumber && touched.phoneNumber}>
          <FormLabel fontSize='14px' htmlFor='phoneNumber'>
            Phone Number
          </FormLabel>
          <Field as={Input} id='phoneNumber' name='phoneNumber' />
          <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
        </FormControl>
      </Stack>

      <Stack direction={['column', 'row']} spacing={4} w='100%'>
        <FormControl
          isInvalid={errors.dateOfBirth && touched.dateOfBirth}
          w='50%'
        >
          <FormLabel fontSize='14px' htmlFor='dateOfBirth'>
            Date of Birth
          </FormLabel>
          <Field as={Input} type='date' id='dateOfBirth' name='dateOfBirth' />
          <FormErrorMessage>{errors.dateOfBirth}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={errors.maritalStatus && touched.maritalStatus}
          w='50%'
        >
          <FormLabel fontSize='14px' htmlFor='maritalStatus'>
            Marital Status
          </FormLabel>
          <Field as={Select} id='maritalStatus' name='maritalStatus'>
            <option value='single'>Single</option>
            <option value='married'>Married</option>
            <option value='divorced'>Divorced</option>
            <option value='widowed'>Widowed</option>
          </Field>
          <FormErrorMessage>{errors.maritalStatus}</FormErrorMessage>
        </FormControl>
      </Stack>

      <FormControl isInvalid={errors.address && touched.address}>
        <FormLabel fontSize='14px' htmlFor='address'>
          Address
        </FormLabel>
        <Field as={Input} id='address' name='address' />
        <FormErrorMessage>{errors.address}</FormErrorMessage>
      </FormControl>

      <Stack direction={['column', 'row']} spacing={4} w='100%'>
        <FormControl isInvalid={errors.password && touched.password}>
          <FormLabel fontSize='14px' htmlFor='password'>
            Password
          </FormLabel>
          <Field as={Input} type='password' id='password' name='password' />
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={errors.confirmPassword && touched.confirmPassword}
        >
          <FormLabel fontSize='14px' htmlFor='confirmPassword'>
            Confirm Password
          </FormLabel>
          <Field
            as={Input}
            type='password'
            id='confirmPassword'
            name='confirmPassword'
          />
          <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
        </FormControl>
      </Stack>

      <FormControl isInvalid={errors.gender && touched.gender}>
        <FormLabel fontSize='14px'>Gender</FormLabel>
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
    </VStack>
  );
};

export default PatientInfo;
