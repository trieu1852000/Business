import React from 'react';
import { Box, Text, Button, VStack, HStack, Image } from '@chakra-ui/react';
import Background from './image/background1.jpg';
import Sample from './image/sample1.jpg'
import { useInView } from 'react-intersection-observer';
function Home() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });

    // Conditional styles based on inView status
    const imageBoxStyle = {
        transition: 'transform 0.8s ease-out',
        transform: inView ? 'translateX(0)' : 'translateX(-100vw)',
    };
    return (
        <Box
            w="100vw"
            h="auto" // Changed to 'auto' to allow for content below the viewport height
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            {/* Background image container */}
            <Box
                bgImage={`url(${Background})`}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                w="100%"
                h="100vh" // Set the height of the image container to be full screen
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <VStack spacing={4} textAlign="center">
                    {/* Title text */}
                    <Text
                        color="white"
                        fontSize="6xl"
                        fontWeight="bold"
                        textShadow="2px 2px 20px rgba(0, 0, 0, 0.3)"
                    >
                        Howdy Studio
                    </Text>
                    {/* Subtitle text */}
                    <Text
                        color="white"
                        fontSize="xl"
                        fontWeight="semibold"
                        textShadow="1px 1px 10px rgba(0, 0, 0, 0.3)"
                    >
                        Social Media Marketing & Brand & Web Design
                    </Text>
                    {/* Get Started button */}
                    <Button
                        size="lg"
                        colorScheme="blue"
                        variant="solid"
                    >
                        Get Started
                    </Button>
                </VStack>
            </Box>
            {/* Information section */}
            <HStack
                spacing={10} // This adds space between the image and text
                w="100%"
                p={10}
                align="center" // This aligns items vertically in the center
                ref={ref}
            >
                {/* Box for the image */}
                <Box
                    w="40%" // Adjust the width as needed
                    h="auto"
                    sx={{
                        transition: 'transform 0.8s ease-out',
                        transform: inView ? 'translateX(0)' : 'translateX(-100%)', // 'translateX(-100%)' is more generic and works better with different layouts
                      }}
                >
                    <Image
                        src={Sample}
                        alt="Sample image"
                        fit="cover"
                        w="100%"
                        h="100%"
                    />
                </Box>

                {/* Box for the text */}
                <VStack
                    w="60%" // Adjust the width as needed
                    textAlign="left" // Text aligned to the left
                    spacing={4} // Adjust the space between text elements
                    align="start" // Aligns VStack contents to the start of the axis
                >
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        mb={4}
                    >
                        HOWDY STUDIO IS AN
                    </Text>
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        mb={4}
                    >
                        INDEPENDENT
                    </Text>
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        mb={8}
                    >
                        SPECIALIZING IN SOCIAL MEDIA
                    </Text>
                    {/* ...additional information text goes here... */}
                </VStack>
            </HStack>
        </Box>
    );
}

export default Home;
