import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Logo from "./assets/images/momentum-logo.png"
import SearchAppBar from "./components/SearchAppBar"
import TreeDImage from "./components/3DFolders"
import { Box } from '@mui/system'
import './App.css'
import "./assets/fonts/GothamBook.ttf"

function App() {

  return (
    <Box>
      <SearchAppBar />
      <TreeDImage />
    </Box>
  )
}

export default App
