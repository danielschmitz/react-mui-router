import React from 'react'

import { Button } from "@mui/material"
import { Outlet, Link } from "react-router-dom"

// Two ways to set a link to a mui button
function App() {
  return (
    <div>
      <Button component={Link} to="/foo" variant="contained">Foo</Button>
      <Link to="/bar"><Button variant="contained">Bar</Button></Link>
      <Outlet>outlet</Outlet>
    </div >
  )
}

export default App

