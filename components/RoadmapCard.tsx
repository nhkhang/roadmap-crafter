import { Box, Card, Image, Text, Button, Heading } from "@chakra-ui/react";
import { RoadmapModel } from "../model/roadmap";


const RoadmapCard = ({ roadmap }: { roadmap: RoadmapModel }) => {
  return (
    <Card key={roadmap.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={roadmap.image} alt={roadmap.title} />
      <Box p="6">
        <Heading size="md" marginBottom="1rem">{roadmap.title}</Heading>
        <Text marginBottom="1rem">{roadmap.description}</Text>
        <Button colorScheme="blue">View Roadmap</Button>
      </Box>
    </Card>
  );
};

export default RoadmapCard; // Make sure to export the component