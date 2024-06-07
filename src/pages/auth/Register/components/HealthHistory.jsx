import { Field, useFormikContext } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Stack,
  Textarea,
  VStack,
  FormErrorMessage,
} from '@chakra-ui/react';

const HealthHistory = () => {
  const { errors, touched } = useFormikContext();

  return (
    <VStack spacing={4} align='flex-start' w='100%'>
      <Stack direction={['column', 'row']} spacing={[4, 8]} w='100%'>
        <FormControl
          isInvalid={
            errors.reasonForRegistration && touched.reasonForRegistration
          }
        >
          <FormLabel htmlFor='reasonForRegistration'>
            Reason for Registration
          </FormLabel>
          <Field
            as={Input}
            id='reasonForRegistration'
            name='reasonForRegistration'
          />
          <FormErrorMessage>{errors.reasonForRegistration}</FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={
            errors.areYouOnAnyMedication && touched.areYouOnAnyMedication
          }
        >
          <FormLabel>Are you on any medication?</FormLabel>
          <RadioGroup name='areYouOnAnyMedication'>
            <Stack direction='row'>
              <Field as={Radio} name='areYouOnAnyMedication' value='yes'>
                Yes
              </Field>
              <Field as={Radio} name='areYouOnAnyMedication' value='no'>
                No
              </Field>
            </Stack>
          </RadioGroup>
          <FormErrorMessage>{errors.areYouOnAnyMedication}</FormErrorMessage>
        </FormControl>
      </Stack>

      <FormControl
        isInvalid={errors.additionalNotes && touched.additionalNotes}
      >
        <FormLabel htmlFor='additionalNotes'>Additional Notes</FormLabel>
        <Field as={Textarea} id='additionalNotes' name='additionalNotes' />
        <FormErrorMessage>{errors.additionalNotes}</FormErrorMessage>
      </FormControl>
    </VStack>
  );
};

export default HealthHistory;
