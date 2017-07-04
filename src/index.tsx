import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Main from './main';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'antd/dist/antd.css';
import { store } from './store/';
import { Provider } from 'react-redux';

// import * as Rx from 'rxjs/Rx';

// var numbers = Rx.Observable.from([1,2,3]);
// var observer = {
//   next:(x:any) => console.log(x),
//   error:(err:any) => console.log(err),
//   complete:() => console.log('completed')
// }
// numbers.subscribe(observer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();