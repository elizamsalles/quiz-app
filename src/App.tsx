import viteLogo from '/vite.svg'
import { Button } from '@mui/material'

export const App = () => {
  return (
    <>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </>
  )
}