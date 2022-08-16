import React from 'react'
import dataUsers from '../dataUsers.json'
import { useState } from 'react';

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <div>
            <input 
            type="text" 
            placeholder='Explore'
            onChange={(e) => {
            setSearchTerm(e.target.value)
            }}
            />
            {dataUsers.filter((val) =>{
            if (searchTerm == "") {
                return val
            } else if (val.interests.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
                }).map((val, key) => {
                return (
                    <div className='search-result' key={key}>
                        <p>{val.picture}</p>
                        <p>{val.name}</p>
                    </div>
                );
            })}

        </div>
    );
}
