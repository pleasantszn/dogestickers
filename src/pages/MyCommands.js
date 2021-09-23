import { Box, Heading, Text } from "@chakra-ui/react"
import BuckCard from "../components/BuckCard/BuckCard"

const MyCommands = ({ myCommands }) => {
    return (
        <Box mt="4">
            <Text>
                <Heading>Hey Pleasant-Tech, </Heading>This are your stored buck commands 
            </Text>
            <Box mt='8' backgroundColor="#242c37" colorScheme="grey.100" p='6' d="flex" flexDirection="column">
                <BuckCard />
                <BuckCard />
                <BuckCard />
                <BuckCard />
                <BuckCard />
                <BuckCard />
                <BuckCard />
            </Box>
        </Box>
    )
}

export default MyCommands