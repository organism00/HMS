import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Icon,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import HeroImg from '../../assets/images/hero-img.png';
import HeroImg2 from '../../assets/images/hero-img-2.png';
import { IoRemoveOutline } from 'react-icons/io5';
import { BsBookmarks, BsFileEarmarkText } from 'react-icons/bs';
import { HiOutlineDocumentChartBar } from 'react-icons/hi2';
import { CiMedicalCross } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../routes/paths';

const Home = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: 'https://dummyimage.com/600x400/0000ff/fff',
      title: 'Doctor Consultation',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure illo, corporis fugit ipsam nisi harum? Veniam distinctio dolorum, quas perspiciatis sed praesentium quia quis, eveniet saepe alias necessitatibus soluta?',
    },
    {
      icon: 'https://dummyimage.com/600x400/663399/fff',
      title: 'Emergency Room(ER)',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure illo, corporis fugit ipsam nisi harum? Veniam distinctio dolorum, quas perspiciatis sed praesentium quia quis, eveniet saepe alias necessitatibus soluta?',
    },
    {
      icon: 'https://dummyimage.com/600x400/ff6600/fff',
      title: 'Surgical Services',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure illo, corporis fugit ipsam nisi harum? Veniam distinctio dolorum, quas perspiciatis sed praesentium quia quis, eveniet saepe alias necessitatibus soluta?',
    },
    {
      icon: 'https://dummyimage.com/600x400/3399ff/fff',
      title: 'Radiology Services',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure illo, corporis fugit ipsam nisi harum? Veniam distinctio dolorum, quas perspiciatis sed praesentium quia quis, eveniet saepe alias necessitatibus soluta?',
    },
    {
      icon: 'https://dummyimage.com/600x400/cc9966/fff',
      title: 'Pharmacy',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure illo, corporis fugit ipsam nisi harum? Veniam distinctio dolorum, quas perspiciatis sed praesentium quia quis, eveniet saepe alias necessitatibus soluta?',
    },
    {
      icon: 'https://dummyimage.com/600x400/cc3399/fff',
      title: 'Rehab Center',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure illo, corporis fugit ipsam nisi harum? Veniam distinctio dolorum, quas perspiciatis sed praesentium quia quis, eveniet saepe alias necessitatibus soluta?',
    },
  ];

  const howTo = [
    {
      icon: BsFileEarmarkText,
      title: 'Fill the form',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure illo, corporis fugit ipsam nisi harum?',
    },
    {
      icon: BsBookmarks,
      title: 'Book an Appointment',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure illo, corporis fugit ipsam nisi harum?',
    },
    {
      icon: CiMedicalCross,
      title: 'Check Up',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure illo, corporis fugit ipsam nisi harum?',
    },
    {
      icon: HiOutlineDocumentChartBar,
      title: 'Get Report',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure illo, corporis fugit ipsam nisi harum?',
    },
  ];
  return (
    <>
      <Box
        h='600px'
        pt={[32, 28, 40]}
        px={[6, 10, 16]}
        bgImage={HeroImg}
        bgPosition='left'
        bgSize='cover'
        bgRepeat='no-repeat'
      >
        <Text
          fontSize='48px'
          fontWeight={700}
          w={['100%', '60%', '40%']}
          lineHeight={1.2}
        >
          Making Healthcare better together
        </Text>
        <Text w={['100%', '70%', '40%']} my={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure
          illo, corporis fugit ipsam nisi harum? Veniam distinctio dolorum, quas
          perspiciatis sed praesentium quia quis, eveniet saepe alias
          necessitatibus soluta?
        </Text>
        <HStack spacing={4}>
          <Button
            py={[3, 5]}
            px={[4, 6]}
            borderRadius={2}
            bg='brand.200'
            color='white'
            colorScheme='blue'
            border='1px solid #2C82DD'
            onClick={() => navigate(AppRoutes.bookAppointment)}
          >
            Make and Appointment
          </Button>
          <Button
            py={[3, 5]}
            px={[4, 6]}
            borderRadius={2}
            bg='transparent'
            color='brand.200'
            border='1px solid #2C82DD'
          >
            Find a Doctor
          </Button>
        </HStack>
      </Box>
      <Flex justify='center' bg='brand.200' h='20px'>
        <Box h='100%' w='300px' bg='brand.300'></Box>
        <Box h='100%' w='300px' bg='brand.100'></Box>
        <Box h='100%' w='300px' bg='brand.400'></Box>
      </Flex>

      <Box h='fit-content' bg='brand.50' p={[6, 8, 16]}>
        <Center mt={32} mb={[4, 32]}>
          <Flex
            flexDirection={['column', 'column', 'row']}
            justify='center'
            align='center'
          >
            <Image
              src='https://dummyimage.com/600x400/cc9966/fff'
              w={['100%', '500px']}
              h='auto'
              borderRadius='8px'
            />
            <Box w={['100%', '100%', '40%']} ml={[0, 12]} my={[8, 8, 0]}>
              <HStack spacing={2} ml={4} mb={6} opacity={0.25}>
                <Icon as={IoRemoveOutline} />
                <Text textAlign='left' fontWeight={700}>
                  Overview
                </Text>
              </HStack>
              <Text as='i' fontSize='18px' mb={2}>
                With this unique
              </Text>
              <Text
                fontSize='28px'
                color='brand.200'
                fontWeight={700}
                lineHeight={1}
                mb={4}
              >
                Hospital Management System
              </Text>
              <Text mb={4}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                accusamus nam fugiat amet delectus, possimus perspiciatis
                impedit autem aut a esse animi eaque ullam voluptates voluptas
                officia voluptatem vitae explicabo.
              </Text>
              <UnorderedList>
                <ListItem>Family Medicine</ListItem>
                <ListItem>Inpatient Care</ListItem>
                <ListItem>Maternity Care</ListItem>
                <ListItem>Family Medicine</ListItem>
                <ListItem>Diagnosis</ListItem>
                <ListItem>Ward Facilities</ListItem>
                <ListItem>Community Health</ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Center>
        <Text
          fontSize='32px'
          fontWeight={700}
          color='brand.200'
          ml={[8, 10]}
          my={4}
        >
          Our Services
        </Text>
        <Center></Center>
        <Flex justify='center' flexWrap='wrap' gap={8}>
          {services?.map((service, index) => (
            <Box
              bg='white'
              key={index}
              p={6}
              borderRadius='8px'
              w={['100%', '42%', '30%']}
            >
              <Image src={service.icon} w='100%' h='auto' borderRadius='8px' />
              <Text fontSize='18px' textAlign='left' fontWeight={700} my={2}>
                {service.title}
              </Text>
              <Text fontSize='12px'>{service.description}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
      <Box
        h='fit-content'
        bgImage={HeroImg2}
        bgPosition='center'
        bgSize='cover'
        bgRepeat='no-repeat'
        py={[12, 20]}
      >
        <Stack
          w={['90%', '70%']}
          mx='auto'
          my='auto'
          p={8}
          bg='brand.200'
          spacing={6}
          direction={['column', 'column', 'row']}
          borderRadius='8px'
          color='brand.900'
        >
          <Box w={['100%', '100%', '50%']} my='auto'>
            <Text as='i' fontSize='18px' mb={3}>
              How We Work
            </Text>
            <Box
              w={['10%', '5%', '10%']}
              borderBottom='1px solid white'
              mb={6}
            ></Box>
            <Text fontSize='28px' fontWeight={700} lineHeight={1} mb={4}>
              Simplified Service Process
            </Text>
            <Text fontSize='12px'>
              To streamline the long wait patients have to go through to seek
              medical help, we have created an easy way for patients to book
              appointments by filling a simple form. Please note that patients
              are required to adhere to the appointment times or notify the
              hospital in advance for cancellation and rescheduling.
            </Text>
          </Box>
          <Box w={['100%', '100%', '50%']}>
            <Flex justify='center' flexWrap='wrap' gap={8}>
              {howTo?.map((item, index) => (
                <Box key={index} borderRadius='8px' w={['100%', '42%']}>
                  <Icon as={item.icon} boxSize={8} />
                  <Text
                    fontSize='14px'
                    textAlign='left'
                    fontWeight={700}
                    my={2}
                  >
                    {item.title}
                  </Text>
                  <Text fontSize='11px'>{item.description}</Text>
                </Box>
              ))}
            </Flex>
          </Box>
        </Stack>
      </Box>
      <Box h='fit-content' py={[6, 20]} color='brand.800'>
        <Flex
          w={['100%', '70%']}
          p={8}
          mx='auto'
          justify='space-between'
          flexDirection={['column', 'row']}
          align='center'
        >
          <Text w={['100%', '70%']} textAlign={['center', 'left']} my={[4, 0]}>
            Skip the wait! Schedule your appointment online with our easy-to-use
            system and get the care you need, on your schedule.
          </Text>

          <Button
            py={[3, 5]}
            px={[4, 6]}
            borderRadius={2}
            bg='brand.200'
            color='white'
            colorScheme='blue'
            onClick={() => navigate(AppRoutes.bookAppointment)}
          >
            Make an Appointment
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
