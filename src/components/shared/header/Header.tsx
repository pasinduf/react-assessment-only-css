import React from 'react';
import './header.css'

interface IProps {
    searchTerm: string
    setSearchTerm: (value: string) => void;
    onSearch: () => void
}

const Header = (props: IProps) => {
    return (
        <div className="header">
            <div className="content">
                <div className="left">
                    <label className="heading">OMDB Search</label>
                </div>
                <div className="right">
                    <label className="label">Search a movie</label>
                    <input
                        type="text"
                        name="search"
                        className="input"
                        value={props.searchTerm}
                        onChange={(e) => { e.persist(); props.setSearchTerm(e.target.value) }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") props.onSearch()
                        }}
                    />
                    <button
                        className="button"
                        onClick={props.onSearch}
                    >SEARCH</button>
                </div>
            </div>
        </div>
    )
}
export default Header