import { useState } from "react";
import PropTypes from 'prop-types';
import alert from "../../helpers/Alerts";

const Search = (props) => {

    const [search, setSearch] = useState('');
    const { showClear, clearUsers, searchUsers } = props;

    const onSubmit = (e) => {
        e.preventDefault();
        if (search === '') {
            alert.error('Please enter something to search');
        } else {
            searchUsers(search);
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
                showClear &&
                <div
                    className='btn btn-light btn-block'
                    onClick={clearUsers}
                >
                    Clear
                </div>
            }

        </div>
    );
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
}

export default Search;