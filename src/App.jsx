import { useState, useEffect } from 'react'
import { VStack } from '@chakra-ui/react'
import Header from './Components/Header'
import Game from './Components/Game'
import Timer from './Components/Timer'

export default function App() {

  const [seconds, setSeconds] = useState(30);

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
      />
      <Timer
        seconds={seconds}
        setSeconds={setSeconds}
      />
      {console.log(Timer)}
    </VStack >
  )
}
