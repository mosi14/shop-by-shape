import {Container} from '@mui/material'
import NabarMenu from './components/NavbarMenu.tsx'
import ImageSlide from './components/ImageSlides.tsx'

function App() {

  return (
    <>
        <NabarMenu/>
        <Container maxWidth="lg" fixed>
            <ImageSlide/>
        </Container>

    </>
  )
}

export default App
