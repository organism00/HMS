import { Box, HStack } from '@chakra-ui/react';
import Sidebar from '../../../components/navigation/Sidebar';

const Overview = () => {
  return (
    <HStack>
      <Sidebar />
      <Box h='600px' pt={[32, 28, 40]} px={[6, 10, 16]}>
        Overview
      </Box>
    </HStack>
  );
};

export default Overview;
