import React from 'react';

export const Block = () => {
    return(
        <div className='block'>
            <section>
                <h4>FOOD</h4>
                <p><input type='checkbox'/>eat real food</p>
            </section>
            <section>
                <h4>ADMIN</h4>
                <p><input type='checkbox'/>complete yellow task</p>
            </section>
            <section>
                <h4>MUSCLES</h4>
                <p><input type='checkbox'/>build work out habit</p>
            </section>
            <section>
                <h4>CODING</h4>
                <p><input type='checkbox'/>make project commit</p>
                <p>OR</p>
                <p><input type='checkbox'/>take tutorial notes</p>
            </section>
        </div>
    )
}