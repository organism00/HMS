import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navigation/Navbar';
import { Box, Flex, Icon } from '@chakra-ui/react';
import Footer from '../../components/navigation/Footer';
import { HiChatBubbleLeftEllipsis } from 'react-icons/hi2';
import { useState } from 'react';
import ChatPopup from './components/ChatPopup';
import { useAuth } from '../../context/AuthContext';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const { state } = useAuth();
  console.log('AuthContext State', state);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <Box position='relative'>
      <Box w='100%' position='fixed' top={0} left={0} zIndex={10}>
        <Navbar />
      </Box>

      <Box mt={[12, 20]} zIndex={0}>
        <Outlet />
      </Box>

      <Box w='100%' zIndex={10}>
        <Footer />
      </Box>
      <Flex
        bg='brand.900'
        w='60px'
        h='60px'
        justify='center'
        align='center'
        position='fixed'
        bottom={6}
        right={6}
        zIndex={10}
        borderRadius='50%'
        p={4}
        cursor='pointer'
        boxShadow='5px 5px 60px 0px rgba(133, 133, 133, 0.75)'
        onClick={toggleChat}
      >
        <Icon as={HiChatBubbleLeftEllipsis} boxSize={8} />
      </Flex>
      {isChatOpen && <ChatPopup onClose={toggleChat} />}
    </Box>
  );
};

export default App;
