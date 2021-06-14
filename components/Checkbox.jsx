import React from 'react'
import Callout from 'nextra-theme-docs/callout'

export default function Checkbox({ 
    children,
    title = ''
 }) {
    return <li className={`task-list-item`}>
        <input type="checkbox"/> {title}
        <details>
            <summary>Further information</summary>
            <Callout emoji="⚠️">{children}</Callout>
        </details>
    </li>
}
