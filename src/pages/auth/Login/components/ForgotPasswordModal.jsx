import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  VStack,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const initialValues = {
    emailOrId: '',
  };

  const validationSchema = Yup.object({
    emailOrId: Yup.string().required('Email or ID is required'),
  });

  const handleSubmit = (values) => {
    console.log('Form data', values);
    // Implement your forgot password logic here
    onClose();
  };

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent p={8}>
          <ModalHeader>Forgot Password?</ModalHeader>
          <ModalCloseButton />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <ModalBody pb={6}>
                  <VStack spacing={4} align='flex-start'>
                    <FormControl
                      isInvalid={errors.emailOrId && touched.emailOrId}
                    >
                      <FormLabel htmlFor='emailOrId'>Email or ID</FormLabel>
                      <Field as={Input} id='emailOrId' name='emailOrId' />
                      <FormErrorMessage>{errors.emailOrId}</FormErrorMessage>
                    </FormControl>
                  </VStack>
                </ModalBody>

                <ModalFooter>
                  <Button
                    w='100%'
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
                    Proceed
                  </Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </>
  );
};

ForgotPasswordModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ForgotPasswordModal;
