import React from 'react'
import Index from '../../pages/Index'

class Html extends React.Component {
    render() {
        const {stores} = this.props;
        const devServerURL = !process.env.DEV ? '' : `http://${stores.common.hostname.replace(2000, 2002)}`
        return (
            <html>
            <head>
                <meta charSet="utf-8"/>
                <title>{stores.common.title}</title>
                <meta name="title" content={stores.common.title}/>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <link rel="icon" href="/favicon.ico"/>
                <link href={devServerURL + '/build/bundle.css'} rel="stylesheet"/>
                <script dangerouslySetInnerHTML={insertState(stores)}/>
            </head>
            <body>
            {/* Our content rendered here */}
            <div id="container">
                <Index stores={stores}/>
            </div>
            {/* Bundled JS */}
            <script async src={devServerURL + '/build/bundle.js'}/>
            </body>
            </html>
        )
    }
}

export default Html

function insertState(stores) {
    return {
        __html: 'window.__STATE = ' + JSON.stringify(stores, null, process.env.DEV ? 4 : 0) + ';'
    }
}
