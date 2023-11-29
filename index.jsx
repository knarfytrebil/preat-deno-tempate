import store from './state/store.js'
import { render } from 'preact-render-to-string';
import { App } from './App.jsx'

const str = render(<App what="is this" />);

console.log(str)
