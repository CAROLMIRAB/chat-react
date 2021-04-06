import React from 'react'

import Image from '../Image'

const MessageL = ({ position, name, imgSource, text, time }) => (

    <li class={position}>
        <div class="chat-avatar">
            <Image url={imgSource} alt="Retail Admin" />
            <div class="chat-name">{name}</div>
        </div>
        <div class="chat-text">
            {text}
        </div>
        <div class="chat-hour">
            {time} <span class="fa fa-check-circle"></span>
        </div>
    </li>
)

export default MessageL