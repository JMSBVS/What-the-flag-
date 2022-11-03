import { useState, useEffect } from 'react'
import { Heading } from '@chakra-ui/react'

export default function Header() {
    return (
        <Heading
            borderBottom="2px"
            borderColor="gray.300"
            h="60px"
            w="100%"
            shadow="md"
            textAlign="center"
        >
            what the flag?
        </Heading>
    )
}