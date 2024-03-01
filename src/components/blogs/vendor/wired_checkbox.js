import React from 'react'
import { WiredCheckBox } from 'react-wired-elements'
import './wired_checkbox.css'

export default function WiredStyleCheckbox({node, ...props}) {

    return (
        <label className="checkbox-label">
            <WiredCheckBox type="checkbox" {...props} />
        </label>
    )
}
