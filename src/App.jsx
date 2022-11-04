import { useState, useEffect } from 'react'
import { VStack } from '@chakra-ui/react'
import Header from './Components/Header'
import Game from './Components/Game'
import Timer from './Components/Timer'
import Endgame from './Components/Endgame'

export default function App() {

  const [seconds, setSeconds] = useState(5);
  const [score, setScore] = useState(0);
  const [startButtonClicked, setStartButtonClicked] = useState(false)


  return (
    <VStack
      shadow="md"
      rounded='md'
      minHeight="600px"
      maxW="400px"
      margin="auto"
      mt="30px"
    >
      <Header />
      <Game
        seconds={seconds}
        setSeconds={setSeconds}
        startButtonClicked={startButtonClicked}
        setStartButtonClicked={setStartButtonClicked}
        score={score}
        setScore={setScore}
      />
      <Endgame
        score={score}
        seconds={seconds}
      // display={seconds ? "none" : ""}
      />
      <Timer
        seconds={seconds}
        setSeconds={setSeconds}
        startButtonClicked={startButtonClicked}
      />
    </VStack >
  )
}
