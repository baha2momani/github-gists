import React from 'react';
import Item from './Item';
import './style.css';

export default function ({items}) {
    return (<div>
        {items.length === 0 && <div className='no-gists'>No Gists available</div>}
        {items.map(item => (<div className='my-2' ><Item key={item.id} {...item}/></div>))}
    </div>)
}