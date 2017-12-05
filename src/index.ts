import 'babel-polyfill';
import dva from 'dva';
import {
  message
} from 'antd';

import './index.css';

// 1. Initialize
const app = dva({
  onError(err, dispatch) {
    if (err.resp) {
      message.error(err.resp.msg);
    } else if (err.srv) {
      message.error(err.srv.msg);
    } else {
      message.error(err);
    }
  }
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
