import './assets/css/index.scss'
import 'isomorphic-fetch'
import 'core/polyfills'
import 'core/logger'
import 'isomorphic-fetch'
import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {BrowserRouter} from 'react-router-dom'
import stores from './stores/stores'
import {autorun} from 'mobx'
import Index from './pages/Index';

const container = document.getElementById('container');
const common = stores.common;
// 更改网页的标题
autorun((common) => {
    if (common.title) {
        document.title = common.title;
    }
})(common);

// 渲染HTML
render(<AppContainer>
    <BrowserRouter>
        <Index stores={stores}/>
    </BrowserRouter>
</AppContainer>, container);

// HOT-RELOAD
if (module.hot) {
    module.hot.accept()
}
