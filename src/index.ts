
import { createElement } from 'react'
import { render } from 'react-dom'

import { someData } from './some.directory'

interface ViewProps {}
const View = ({}: ViewProps) => {
    return createElement('pre', {}, [
        'This is a test.\n',
        `With someData being: ${JSON.stringify(someData, null, 4)}`
    ])
}

render(
    createElement(View, {}),
    document.getElementById('application'),
)
