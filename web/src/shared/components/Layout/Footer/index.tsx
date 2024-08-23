import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';

import Container from '@/shared/components/Container';

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="black" color="white" py={2}>
      <Container>
        <Flex justify="space-between" align="center">
          <Image
            src="/logo-white.svg"
            alt="Logo"
            boxSize="80px"
            objectFit="contain"
          />

          <Text fontSize="sm" textAlign="center" color={"white"}>
            &copy; {new Date().getFullYear()} CineApp. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Box >
  );
};

export default Footer;
