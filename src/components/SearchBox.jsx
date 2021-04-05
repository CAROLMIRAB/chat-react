import React from 'react'

import Button from './Button'

const SearchBox = () => (

    <section className="chat-search-box">
        <div class="input-group">
            <input class="form-control" placeholder="Search"></input>
            <div class="input-group-btn">
                <Button 
                type="btn btn-info" 
                text={<i class="fa fa-search"></i>}
                />
            </div>
        </div>
    </section>
)

export default SearchBox