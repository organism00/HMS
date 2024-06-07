import { Field, useFormikContext } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Stack,
  VStack,
  FormErrorMessage,
} from '@chakra-ui/react';

const InsuranceInfo = () => {
  const { values, errors, touched } = useFormikContext();
  return (
    <VStack spacing={4} align='flex-start' w='100%'>
      <FormControl
        isInvalid={errors.doYouHaveInsurance && touched.doYouHaveInsurance}
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
        <FormErrorMessage>{errors.doYouHaveInsurance}</FormErrorMessage>
      </FormControl>

      {values.doYouHaveInsurance === 'yes' && (
        <>
          <Stack direction={['column', 'row']} spacing={4} w='100%'>
            <FormControl
              isInvalid={errors.insurancecompany && touched.insurancecompany}
            >
              <FormLabel htmlFor='insurancecompany'>
                Insurance Company
              </FormLabel>
              <Field as={Input} id='insurancecompany' name='insurancecompany' />
              <FormErrorMessage>{errors.insurancecompany}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.insuranceId && touched.insuranceId}>
              <FormLabel htmlFor='insuranceId'>Insurance ID</FormLabel>
              <Field as={Input} id='insuranceId' name='insuranceId' />
              <FormErrorMessage>{errors.insuranceId}</FormErrorMessage>
            </FormControl>
          </Stack>

          <Stack direction={['column', 'row']} spacing={4} w='100%'>
            <FormControl
              isInvalid={
                errors.policyHolderFirstName && touched.policyHolderFirstName
              }
            >
              <FormLabel htmlFor='policyHolderFirstName'>
                Policy Holder&apos;s First Name
              </FormLabel>
              <Field
                as={Input}
                id='policyHolderFirstName'
                name='policyHolderFirstName'
              />
              <FormErrorMessage>
                {errors.policyHolderFirstName}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={
                errors.policyHolderLastName && touched.policyHolderLastName
              }
            >
              <FormLabel htmlFor='policyHolderLastName'>
                Policy Holder&apos;s Last Name
              </FormLabel>
              <Field
                as={Input}
                id='policyHolderLastName'
                name='policyHolderLastName'
              />
              <FormErrorMessage>{errors.policyHolderLastName}</FormErrorMessage>
            </FormControl>
          </Stack>
        </>
      )}
    </VStack>
  );
};

export default InsuranceInfo;
