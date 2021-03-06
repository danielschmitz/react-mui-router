import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Foo from './views/foo'
import Bar from './views/bar'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path="foo"
          element={<Foo />}
        />
        <Route
          path="bar"
          element={<Bar />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
)
