import React from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Text,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
            Subscribe to Anime Edit's
          </Heading>
          <HStack borderBottom={'2px solid white'}>
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme="green"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack w={'full'}
         borderLeft={['none', '1px solid white']}
         borderRight={['none', '1px solid white']}
        >

            <Heading textTransform={'uppercase'} textAlign={'center'}>
                ANIME HUB
            </Heading>
            <Text> ALL right received </Text>
        </VStack>

        <VStack w={'full'}
         borderLeft={['none', '1px solid white']}
         borderRight={['none', '1px solid white']}
        >

            <Heading size={'md'} textTransform={'uppercase'}>
                Social Media
            </Heading>
            <Button variant={'link'} colorScheme={'green'}>
                <a href="https://instagram.com/_.sky_14"> Instagram </a>
            </Button>

            <Button variant={'link'} colorScheme={'green'}>
                <a href="https://youtube.com/@nishchaynish">Youtube </a>
            </Button>

            <Button variant={'link'} colorScheme={'green'}>
                <a href="https://facebook.com/Nishant Chauahn">Facebook</a>
            </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
