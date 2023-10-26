import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Box, ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <ChakraProvider>
        <Box backgroundColor = '#483D8B'>
            <App />
        </Box>
    </ChakraProvider>
    </>
)
