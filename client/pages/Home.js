import React from 'react'
import {observer, inject} from 'mobx-react'

@inject('home') @observer
class Home extends React.Component {
    render() {
        const {num} = this.props.home;
        return (
            <div>
                num: {num}
            </div>
        )
    }
}

export default Home
