import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Pages
import Home from './Components/Home/Home';
import Loading from './Components/Loading/Loading'
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
	apiKey: 'AIzaSyBLnGQ8ImXp6A4SQyX7SVTRv4rUc0BB6Gg',

	authDomain: 'portfolio-51340.firebaseapp.com',

	projectId: 'portfolio-51340',

	storageBucket: 'portfolio-51340.appspot.com',

	messagingSenderId: '523669142963',

	appId: '1:523669142963:web:298a00557ef0afe785dfc6',

	measurementId: 'G-R1JSEL8QQ8',
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={<Loading/>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
      </FirebaseAppProvider >
    </React.StrictMode>
    ,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
