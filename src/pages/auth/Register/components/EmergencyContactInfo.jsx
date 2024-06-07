import { Field, useFormikContext } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  FormErrorMessage,
  Stack,
} from '@chakra-ui/react';

const EmergencyContactInfo = () => {
  const { errors, touched } = useFormikContext();

  return (
    <VStack spacing={4} align='flex-start' w='100%'>
      <Stack direction={['column', 'row']} spacing={4} w='100%'>
        <FormControl isInvalid={errors.kinLastName && touched.kinLastName}>
          <FormLabel htmlFor='kinLastName'>Last Name</FormLabel>
          <Field as={Input} id='kinLastName' name='kinLastName' />
          <FormErrorMessage>{errors.kinLastName}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.kinFirstName && touched.kinFirstName}>
          <FormLabel htmlFor='kinFirstName'>First Name</FormLabel>
          <Field as={Input} id='kinFirstName' name='kinFirstName' />
          <FormErrorMessage>{errors.kinFirstName}</FormErrorMessage>
        </FormControl>
      </Stack>

      <Stack direction={['column', 'row']} spacing={4} w='100%'>
        <FormControl isInvalid={errors.middleName && touched.middleName}>
          <FormLabel htmlFor='middleName'>Middle Name</FormLabel>
          <Field as={Input} id='middleName' name='middleName' />
          <FormErrorMessage>{errors.middleName}</FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={errors.kinRelationship && touched.kinRelationship}
        >
          <FormLabel htmlFor='kinRelationship'>Relationship</FormLabel>
          <Field as={Select} id='kinRelationship' name='kinRelationship'>
            <option value='parent'>Parent</option>
            <option value='sibling'>Sibling</option>
            <option value='friend'>Friend</option>
            <option value='other'>Other</option>
          </Field>
          <FormErrorMessage>{errors.kinRelationship}</FormErrorMessage>
        </FormControl>
      </Stack>

      <Stack direction={['column', 'row']} spacing={4} w='100%'>
      <FormControl isInvalid={errors.kinPhoneNumber && touched.kinPhoneNumber}>
        <FormLabel htmlFor='kinPhoneNumber'>Phone Number</FormLabel>
        <Field as={Input} id='kinPhoneNumber' name='kinPhoneNumber' />
        <FormErrorMessage>{errors.kinPhoneNumber}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.kinEmail && touched.kinEmail}>
        <FormLabel htmlFor='kinEmail'>Email</FormLabel>
        <Field as={Input} id='kinEmail' name='kinEmail' />
        <FormErrorMessage>{errors.kinEmail}</FormErrorMessage>
      </FormControl>
      </Stack>

      <FormControl isInvalid={errors.kinAddress && touched.kinAddress}>
        <FormLabel htmlFor='kinAddress'>Address</FormLabel>
        <Field as={Input} id='kinAddress' name='kinAddress' />
        <FormErrorMessage>{errors.kinAddress}</FormErrorMessage>
      </FormControl>
    </VStack>
  );
};

export default EmergencyContactInfo;
