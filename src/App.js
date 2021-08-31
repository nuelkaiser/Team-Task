import React from 'react';
import { BrowserRouter as
Router,
Route,
Switch} from 'react-router-dom';
import './style.css';
import Post from './Post';
export default function App() {

  return (
    <Router>
    <div>
      <Route exact path = '/' component =   {Post} />
    </div>
    </Router>
  )
}