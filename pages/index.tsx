import { Box, Heading, Stack, Text, Button, Flex, VStack, useColorModeValue, Image } from "@chakra-ui/react";
import Link from "next/link";

function HomePage() {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{ height: "90vh", backgroundColor: bg, color: color }}
    >
      <Box maxWidth="3xl" textAlign="center">
        <Image
          src="/roadmap-2.png"
          alt="Roadmap"
          maxWidth={{ base: "40%", md: "40%", lg: "35%" }}
          height={{ base: "auto", md: "auto", lg: "auto" }}
          objectFit="contain"
          margin="1rem auto"
        />
        <Heading fontSize="5xl" marginBottom="1rem">
          Welcome to Roadmap Crafter!
        </Heading>
        <VStack spacing={3} alignItems="center">
          <Text fontSize="2xl">Build your own interactive roadmap and track your progress.</Text>
          <Text fontSize="2xl">Share your craft and inspire the community.</Text>
        </VStack>
        <Stack direction="row" spacing={4} align="center" justify="center" marginTop="2rem">
          <Link href="/build">
            <Button size="lg" colorScheme="blue">
              Start Building
            </Button>
          </Link>
          <Link href="/roadmaps">
            <Button size="lg" variant="outline" colorScheme="blue">
              Explore Roadmaps
            </Button>
          </Link>
        </Stack>
      </Box>
    </Flex>
  );
}

export default HomePage;
