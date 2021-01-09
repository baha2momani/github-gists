import React from 'react'
import Search from '../components/Search';
import PropTypes from 'prop-types'
import './GithubGists.style.css';
import useFetch from '../hooks/useFetch';
import GistsList from '../components/GistsList.js'

export const GithubGists  = () => {
    const {hit, state} = useFetch((username) => ({
        url: `https://api.github.com/users/${username}/gists`,
        method: 'GET'
    }));

    const onSubmit = (value) => {
        hit(value);
    }

    return (<div className='container pt-5'>
        <Search onSubmit={onSubmit}/>
        {state.data && !state.error && <GistsList items={state.data}/>}
    </div>)
}

GithubGists.propTypes = {

}

export default GithubGists