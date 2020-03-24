import React from 'react';

export const Block = () => {
    return(
        <div className='block'>
            <section>
                <h4>HEALTH</h4>
                <p>eat food</p>
            </section>
            <section>
                <h4>ADMIN</h4>
                <p>yellow task</p>
                <input type="text"/>
            </section>
            <section>
                <h4>HEALTH</h4>
                <p>work out</p>
            </section>
            <section>
                <h4>CODING</h4>
                <p>project commit</p>
                <br/>
                <p>OR</p>
                <br/>
                <p>tutorial notes</p>
            </section>
        </div>
    )
}