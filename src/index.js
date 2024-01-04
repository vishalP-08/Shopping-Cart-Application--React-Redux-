import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider, useSelector } from 'react-redux'

import { store } from './store'
import './index.css'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Header from './components/Header'

function Router() {
    const route = useSelector(state => state.route)

    return route == 'home' ? <Home /> : <Cart />
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <Header />
            <Router />
        </Provider>
    </React.StrictMode>,
)