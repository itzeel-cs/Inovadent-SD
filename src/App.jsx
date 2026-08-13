import * as React from 'react'
//Imagen
import HeroImg from './assets/img/hero-img.jpg'
//CSS
import './assets/css/App.css'
//local components
import Component from './Component'
// MUI
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
//Presentation


//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css'


// Navbar helpers
function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false
  }
  return true
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        if (samePageLinkNavigation(event)) {
          event.preventDefault()
        }
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  )
}

LinkTab.propTypes = {
  selected: PropTypes.bool,
}




function App() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    if (
      event.type !== 'click' ||
      (event.type === 'click' && samePageLinkNavigation(event))
    ) {
      setValue(newValue)
    }
  }

  //Presentation
 const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  flexGrow: 1,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
//

  return (
    <>
      {/* Navbar */}
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} aria-label="navbar tabs">
          <LinkTab label="Inicio" href="#hero_image" />
          <LinkTab label="Presentacion" href="#presentacion" />
          <LinkTab label="Servicios" href="#gallery" />
          <LinkTab label="Ubicacion" href="#contact" />
          <LinkTab label="Galeria" href="#contact" />
          <LinkTab label="Publicaciones" href="#contact" />
        </Tabs>
      </Box>

      {/* Hero image */}
      <section id="hero_image" name="hero_image">
        <Stack>
          <img src={HeroImg} alt="hero_imagen" />
        </Stack>
      </section>

      {/*  Presentation */}
      <section name="presentacion" id="presentacion">
        <Stack
          spacing={{ xs: 2, sm: 1 }}
          direction="row"
          useFlexGap
          sx={{ flexWrap: 'wrap' }}
          >
          <Item>
            Presentación 

          </Item>
          <Item>
            
            <p>
              Hola soy la Dra. Bonilla y te invitó a conocer Inovadent SD contamos gran variedad de tratamientos
            </p>
          </Item>
          <Item>Long content</Item>
          
        </Stack>
      </section>

      <Stack>
        
      </Stack>

      <Component />





    </>
  )
}

export default App
