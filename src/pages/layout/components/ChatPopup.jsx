import { useState } from 'react';
import { Box, Input, Button, VStack, Icon, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

const ChatPopup = ({ onClose }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log('User message:', message);
    setMessage('');
  };

  return (
    <Box
      position='fixed'
      bottom='90px'
      right='6px'
      w={['80%', '400px']}
      bg='white'
      boxShadow='0 4px 12px rgba(0, 0, 0, 0.1)'
      borderRadius='md'
      p={6}
      zIndex={20}
    >
      <Box position='absolute' right={4} top={2}>
        <Icon as={MdClose} onClick={onClose} cursor='pointer' />
      </Box>
      <Text fontSize='14px' my={4}>
        Hello there, please ask your question
      </Text>
      <VStack spacing={4}>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Type your question...'
        />
        <Button
          w='100%'
          py={[3, 5]}
          px={[4, 6]}
          borderRadius={2}
          bg='brand.200'
          color='white'
          colorScheme='blue'
          border='1px solid #2C82DD'
          onClick={handleSend}
        >
          Get Help
        </Button>
      </VStack>
    </Box>
  );
};

ChatPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ChatPopup;
