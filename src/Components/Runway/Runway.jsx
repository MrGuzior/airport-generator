import React from 'react'
import './Runway.css'

import parser from '../../Utilities/parser'

const Runway = () => {
    //console.log(parser())

    console.log(parser().relLat)

    return (
        <svg width="612" height="881">
            {/* <rect id="XMLID_1_" x="247.7" y="135.6" class="st0" stroke='red' width="106.7" height="670.6" /> */}
            {parser().relLat.map((r, i) => {
                return <circle cx={r + 50} cy={parser().relLon[i] + 50} r="5" />
            })}
        </svg>
    )
}

export default Runway