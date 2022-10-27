import { useEffect, useState } from 'react'
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
} from '@chakra-ui/react'

function App() {
  const [image, setImage] = useState("");

  useEffect(() => {
    uwuNewCatBoi();
  }, []);

  function uwuNewCatBoi() {
    fetch("https://api.catboys.com/img")
      .then(res => res.json())
      .then(data => data.url)
      .then(setImage);
  }

  return (
    <Accordion onChange={a => !a.includes(0) && uwuNewCatBoi()} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Section 1 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Image src={image} alt="uwu catboy"></Image>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Section 2 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default App
