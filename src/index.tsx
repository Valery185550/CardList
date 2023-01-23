import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Article from './pages/article/Article';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[{
    index:true,
    element:<Home/>
  },
  {
    path:"article/:articleId",
    element:<Article/>
  }]
}])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
