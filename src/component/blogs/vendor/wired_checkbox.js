import React from 'react'
import "wired-checkbox"
import './wired_checkbox.css'

export default function WiredStyleCheckbox({node, ...props}) {

    return (
        <label className="checkbox-label">
            <wired-checkbox {...props} />
        </label>
    )
}
