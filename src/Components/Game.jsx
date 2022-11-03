import { React, useState, useEffect } from "react";
import { Flex, Box, Image, Button } from "@chakra-ui/react";
import data from "../../data";

export default function (props) {

    let allAnswers = []
    const btnOne = document.querySelector(".btn-one");
    const btnTwo = document.querySelector(".btn-two");
    const btnThree = document.querySelector(".btn-three");
    const btnFour = document.querySelector(".btn-four");
    const allBtns = btnOne + btnTwo + btnThree + btnFour

    const [showBtns, setShowBtns] = useState(false);
    const [answers, setAnswers] = useState({
        flagURL: "public/flag-regular.svg",
        rightAnswer: "",
        wrongAnswerOne: "",
        wrongAnswerTwo: "",
        wrongAnswerThree: "",
    })
    const [results, setResults] = useState({
        btnOneResult: "",
        btnTwoResult: "",
        btnThreeResult: "",
        btnFourResult: "",
    })

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    useEffect(() => {
        allAnswers.push(
            answers.rightAnswer,
            answers.wrongAnswerOne,
            answers.wrongAnswerTwo,
            answers.wrongAnswerThree
        )
        shuffle(allAnswers)
        if (allBtns) {
            btnOne.textContent = allAnswers[0]
            btnTwo.textContent = allAnswers[1]
            btnThree.textContent = allAnswers[2]
            btnFour.textContent = allAnswers[3]
        }
    }, [answers.rightAnswer, answers.wrongAnswerOne, answers.wrongAnswerTwo, answers.wrongAnswerThree])

    const startGame = () => {
        generateAnswers()
        setShowBtns(hide => !hide);
    }

    function generateAnswers() {
        setResults({
            btnOneResult: false, btnTwoResult: false, btnThreeResult: false, btnFourResult: false
        })
        const randOne = Math.floor(Math.random() * data.length)
        const randTwo = Math.floor(Math.random() * data.length)
        const randThree = Math.floor(Math.random() * data.length)
        const randFour = Math.floor(Math.random() * data.length)
        const url = 'https://countryflagsapi.com/svg/'
        setAnswers(prevAnswers => {
            return {
                ...prevAnswers,
                wrongAnswerOne: data[randOne].name,
                wrongAnswerTwo: data[randTwo].name,
                wrongAnswerThree: data[randThree].name,
                flagURL: url + data[randFour].code,
                rightAnswer: data[randFour].name
            }
        })
    }

    function feedback() {
        if (btnOne.textContent === answers.rightAnswer) {
            setResults({
                btnOneResult: true, btnTwoResult: false, btnThreeResult: false, btnFourResult: false
            })
        } else if (btnTwo.textContent === answers.rightAnswer) {
            setResults({
                btnOneResult: false, btnTwoResult: true, btnThreeResult: false, btnFourResult: false
            })
        } else if (btnThree.textContent === answers.rightAnswer) {
            setResults({
                btnOneResult: false, btnTwoResult: false, btnThreeResult: true, btnFourResult: false
            })
        }
        else if (btnFour.textContent === answers.rightAnswer) {
            setResults({
                btnOneResult: false, btnTwoResult: false, btnThreeResult: false, btnFourResult: true
            })
        }
    }

    const handleClick = () => {
        feedback()
        setTimeout(() => {
            generateAnswers();
        }, 500)
    }

    return (
        <Flex
            flexDirection="column"
        >
            <Flex
                w="400px"
                h="220px"
                justify="center"
                className="flag-image-container"

            >
                <Box p={10} w="300px"
                >
                    <Image
                        objectFit="contain"
                        src="flag-regular.svg"
                        maxHeight="150px"
                        borderRadius='md'
                        display={showBtns ? "none" : ""}
                        m="auto"
                        mt="50px"
                    />
                    <Image
                        objectFit="contain"
                        src={answers.flagURL}
                        shadow="md"
                        maxHeight="150px"
                        borderRadius='md'
                        display={showBtns ? "" : "none"}
                    />
                </Box>
            </Flex>

            <Flex
                w="100%"
                flexDirection="column"
                gap="20px"
                alignItems="center"
                paddingTop="30px"
                paddingBottom="30px"
            >
                <Button
                    className="start-button"
                    onClick={startGame}
                    w="90%"
                    mt="100px"
                    display={showBtns ? "none" : ""}
                >
                    Start!
                </Button>
                <Button
                    w="90%"
                    className="btn-one btn"
                    onClick={handleClick}
                    display={showBtns ? "" : "none"}
                    colorScheme={results.btnOneResult ? "green" : "gray"}
                >
                </Button>
                <Button
                    w="90%"
                    className="btn-two btn"
                    onClick={handleClick}
                    display={showBtns ? "" : "none"}
                    colorScheme={results.btnTwoResult ? "green" : "gray"}
                >
                </Button>
                <Button
                    w="90%"
                    className="btn-three btn"
                    onClick={handleClick}
                    display={showBtns ? "" : "none"}
                    colorScheme={results.btnThreeResult ? "green" : "gray"}
                >
                </Button>
                <Button
                    w="90%"
                    className="btn-four btn"
                    onClick={handleClick}
                    display={showBtns ? "" : "none"}
                    colorScheme={results.btnFourResult ? "green" : "gray"}
                >
                </Button>

            </Flex>
        </Flex>
    )
}