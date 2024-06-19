import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Auth0
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain='dev-uojjz5e7y54mp4sy.us.auth0.com'
    clientId='5J5Cq46UrvnQt0hMBLXm14feSUc66gjL'
    authorizationParams={{ redirect_uri: window.location.origin}}
    >
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Auth0Provider>
)
