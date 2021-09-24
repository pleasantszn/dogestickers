import { Box, Heading, Text } from "@chakra-ui/react"
import BuckFeedCard from "../components/BuckFeedCard/BuckFeedCard"
const Feeds = ({ myCommands }) => {
    return (
        <Box mt="4">
            <Text>
                <Heading>Your Feed </Heading>
            </Text>
            <Box mt='8' backgroundColor="#242c37" colorScheme="grey.100" p='6' d="flex" flexDirection="column">
                <BuckFeedCard
                />
                <BuckFeedCard
                />
                <BuckFeedCard
                />
                <BuckFeedCard
                />
                <BuckFeedCard
                />
                <BuckFeedCard
                />
                <BuckFeedCard
                />
            </Box>
        </Box>
    )
}

export default Feeds