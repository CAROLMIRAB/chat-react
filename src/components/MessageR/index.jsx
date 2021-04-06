import React from 'react'

import Image from '../Image'

const MessageR = ({ position, name, imgSource, text, time }) => (

    <li class={position}>
        <div class="chat-hour">
            {time} <span class="fa fa-check-circle"></span>
        </div>
        <div class="chat-text">
            {text}
        </div>
        <div class="chat-avatar">
            <Image url={imgSource} alt="Retail Admin" />
            <div class="chat-name">{name}</div>
        </div>
    </li>
)

export default MessageR