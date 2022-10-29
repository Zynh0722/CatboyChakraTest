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
  const [baka, setBaka] = useState("");
  const [oldExpanded, setOldExpanded] = useState([]);

  useEffect(() => {
    uwuNewCatBoi();
    uwuNewBaka();
  }, []);

  function uwuNewCatBoi() {
    fetch("https://api.catboys.com/img")
      .then(res => res.json())
      .then(data => data.url)
      .then(setImage);
  }

  function uwuNewBaka() {
    fetch("https://api.catboys.com/baka")
      .then(res => res.json())
      .then(data => data.url)
      .then(setBaka);
  }

  function handleChange(expanded) {
    const setters = [uwuNewCatBoi, uwuNewBaka];

    for (let i in setters) 
      if (!expanded.includes(Number(i)) && oldExpanded.includes(Number(i))) 
        setters[i]();

    setOldExpanded(expanded);
  }

  return (
    <Accordion onChange={handleChange} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Catboi
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Image src={image} alt="uwu catboy" />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Baka~
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Image src={baka} alt="uwu baka" />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default App
