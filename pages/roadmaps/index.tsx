import { Box, Heading, SimpleGrid, Card, Image, Text, Button, useBreakpointValue } from "@chakra-ui/react";
import RoadmapCard from "../../components/RoadmapCard";

function ExplorePage() {
  const roadmaps = [
    { id: 1, title: 'Roadmap 1', image: 'https://via.placeholder.com/150', description: 'This is a description of the roadmap.' },
    { id: 2, title: 'Roadmap 2', image: 'https://via.placeholder.com/150', description: 'This is a description of the roadmap.' },
  ];

  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3 });

  return (
    <Box padding="1.5rem">
      <Heading marginBottom="1.5rem">Explore Roadmaps</Heading>
      <SimpleGrid columns={columns} spacing="1.5rem">
        {roadmaps.map((roadmap) => (
          <RoadmapCard key={roadmap.id} roadmap={roadmap} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ExplorePage;