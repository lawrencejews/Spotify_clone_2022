import { Box, Text, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import GradientLayout from "../components/gradientLayout";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {
  return (
    <GradientLayout
      roundImage
      color="red"
      subtitle="profile"
      title="Lawrence Lubwama"
      description="15 public playlists"
      image="https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
    >
      <Box color="white" paddingX="20px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">Only visible to you</Text>
          <Flex>
            {artists.map((artist) => (
              <Box paddingX="10px" width="20%">
                <Box bg="gray.800" borderRadius="4px" padding="15px">
                  <Image
                    src="https://placekitten.com/300/300"
                    borderRadius="100%"
                  />
                  <Box marginTop="20px">
                    <Text fontSize="large">{artist.name}</Text>
                    <Text fontSize="x-small">Artist</Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </GradientLayout>
  );
};
// Serverside authentication for verified users
export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists },
  };
};

export default Home;
