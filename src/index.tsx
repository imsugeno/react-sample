import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Number } from './components/Number';
import { ContextParent } from './components/UseContext';
import { ImageUploader } from './components/UseRefSample';
import { ParentUseImperativeHandle } from './components/UseImperativeHandleSample';
import { Input } from './components/CoutumHookSample';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Number />
    <ContextParent />
    <ImageUploader />
    <ParentUseImperativeHandle />
    <Input />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
