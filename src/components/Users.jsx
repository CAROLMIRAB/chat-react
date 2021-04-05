import React from 'react'

import Image from './Image'

const Users = ({status, name, imgSource}) => (

    <ul class="users">
        <li class="person" data-chat="person1">
            <div class="user">
                <Image url={imgSource} alt="Retail Admin" />
                <span class={status}></span>
            </div>
            <p class="name-time">
                <span class="name">{name} </span>
                <span class="time">15/02/2019</span>
            </p>
        </li>
    </ul>
)

export default Users