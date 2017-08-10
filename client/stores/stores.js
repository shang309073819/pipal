import Home from './Home';

//合并多个Store
export const stores = (state = {}) => {
    return Object.assign({}, state, {
        home: new Home()
    });
};

export default process.env.BROWSER ? stores(window.__STATE) : {}
