import React from 'react'
import PropTypes from 'prop-types'


export default function Section(props) {
    const className = ["section"]
    className.push(props.className)
    if(props.isCenter) className.push("center-content")
    return (
        <section className={className.join(" ")}>
            {props.children}
        </section>
    )
}

Section.propTypes = {
    isCenter: PropTypes.bool,
    className: PropTypes.string
}