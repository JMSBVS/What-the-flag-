import { React } from "react";
import { Heading, Flex, Text, VStack, Icon, IconButton } from '@chakra-ui/react'
import { RepeatIcon } from '@chakra-ui/icons'




export default function Endgame(props) {

    const handleClick = () => window.location.reload();

    if (!props.seconds) {
        return (
            <VStack
                position="fixed"
                alignSelf="center"
                background="white"
                opacity="0.9"
                color="black"
                borderRadius='md'
                shadow="md"
                h="80%"
                w="80%"
                maxW="400px"
            >
                <Flex
                    flexDirection="column"
                    textAlign="center"
                    mt="40%"
                >
                    <Heading
                        mb="30px"
                    >
                        Game Over!
                    </Heading>
                    <Text
                        mb="30px"
                    >
                        {props.score > 0 ? "Well Done!" : "Hard Luck!"}
                    </Text>
                    <Text
                        mb="30px"
                    >
                        You guessed {props.score} correctly
                    </Text>
                    <Text
                        mb="30px"
                    >
                        Play again?
                    </Text>
                    <IconButton
                        aria-label='Refresh'
                        icon={<RepeatIcon />}
                        onClick={handleClick}
                    />
                </Flex>

            </VStack>
        )
    }
}