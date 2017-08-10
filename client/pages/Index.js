import React from 'react'
import PropTypes from 'prop-types'
import {Switch, Route} from 'react-router-dom'
import {Provider} from 'mobx-react'
// import Menu from '../components/common/Menu'
import Home from './Home'
import NotFound from './NotFound'

class Index extends React.Component {
    render() {
        const {stores} = this.props;
        return (
            <Provider {...stores}>
                <div>
                    {/*<Menu/>*/}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Provider>
        )
    }
}

Index.propTypes = {
    stores: PropTypes.object.isRequired
}

export default Index
