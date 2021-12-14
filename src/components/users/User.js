import React, {  useEffect, useContext } from 'react';
import Spinner from '../layout/spinner';
import { Link } from 'react-router-dom';
import Repos from '../Repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match}) => {

    const githubContext = useContext(GithubContext);
    const { loading, user, getUser, getUserRepos, repos } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user;


    return (
        <>
            {
                loading ? <Spinner /> :
                    <>
                        <Link to='/' className='btn btn-light'>
                            Back to search
                        </Link>
                        Hireable: {''}
                        {
                            hireable ?
                                <i className='fas fa-check text-success' /> :
                                <i className='fas fa-times-circle text-danger' />
                        }
                        <div className="card grid-2">
                            <div className="all-center">
                                <img src={avatar_url} className="round-img" alt="" style={{ width: '150px' }} />
                                <h1>{name}</h1>
                                {location && <p>Location: {location}</p>}
                            </div>
                            <div>
                                {
                                    bio ? <>
                                        <h3>Bio</h3>
                                        <p>{bio}</p>
                                    </> :
                                        <>
                                            This user has no bio.
                                        </>
                                }

                                <ul>
                                    <li>
                                        {login && <>
                                            <strong>Username: </strong> {login}
                                        </>}
                                    </li>

                                    <li>
                                        {company && <>
                                            <strong>Company: </strong> {company}
                                        </>}
                                    </li>

                                    <li>
                                        {blog && <>
                                            <strong>Website: </strong> {blog}
                                        </>}
                                    </li>
                                </ul>
                                <a
                                    href={html_url}
                                    className="btn btn-dark my-1"
                                >
                                    Visit Github Profile
                                </a>
                            </div>
                        </div>
                        <div className="card text-center">
                            <div className="badge badge-primary">Followers: {followers}</div>
                            <div className="badge badge-success">Following: {following}</div>
                            <div className="badge badge-light">Public Repos: {public_repos}</div>
                            <div className="badge badge-dark">Public Gists: {public_gists}</div>
                        </div>
                    </>
            }
            <Repos repos={repos} />
        </>
    )

}


export default User;
