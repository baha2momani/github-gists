import React, {useEffect} from 'react';
import useFetch from '../../hooks/useFetch';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import Avatar from '../Avatar';
import './style.css';

export default function ({id, created_at, files, forks_url}) {
    const {hit, state} = useFetch((url) => ({
        url,
        method: 'GET'
    }));

    useEffect(() => {
        hit(forks_url)
    }, [])

    return (
        <div className="card p-3" >
            <ReactPlaceholder type='text' rows={4} ready={!state.pending}>

            <div className="card-body">
                <h5 className="card-title">{id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{new Date(created_at).toDateString()}</h6>
                <p className="card-text">Files: {Object.keys(files).map(file => 
                    <div>
                        <strong>{files[file].filename}{" "}
                        <div className='badge'><span>{files[file].language}</span></div>
                </strong></div>)}</p>

                {state.data && state.data.length > 0 && <p>Latest Forks</p>}
                <div className='forks-container'>
                {state.data && !state.data.pending && state.data.slice(-3).map(fork => 
                    <div className='me-2' title={new Date(fork.created_at).toDateString()}>
                    <Avatar src={fork.owner.avatar_url}/></div>)}
                </div>
            </div>
            </ReactPlaceholder>
            </div>
    )
}