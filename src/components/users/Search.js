import { useState, useContext } from "react";
import PropTypes from 'prop-types';
import alert from "../../helpers/Alerts";
import GithubContext from "../../context/github/githubContext";

const Search = () => {

    const githubContext = useContext(GithubContext);
    const [search, setSearch] = useState('');
    

    const onSubmit = (e) => {
        e.preventDefault();
        if (search === '') {
            alert.error('Please enter something to search');
        } else {
            githubContext.searchUsers(search);
            setSearch('');
        }
        // console.log(search);
    }

    const onChange = (e) => setSearch(e.target.value);


    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    value={search}
                    placeholder="Search Users..."
                    onChange={onChange} />
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark btn-block" />
            </form>
            {
                githubContext.users.length > 0 &&
                <div
                    className='btn btn-light btn-block'
                    onClick={githubContext.clearUsers}>
                    Clear
                </div>
            }

        </div>
    );
}



export default Search;