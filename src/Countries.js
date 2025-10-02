import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Countries.css";

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get("https://xcountries-backend.labs.crio.do/all");
                console.log(response.data);
                setCountries(response.data);
            } catch(e){
                console.error(e);
            }
        }

        fetchCountries();
    }, [])

    return (
        <div className="countries">
            {countries.map((ele) => (
                <div className="country" key={ele.abbr}>
                    <img src={ele.flag} alt={ele.name} />
                    <h3>{ele.name}</h3>
                </div>
            )
            )}
        </div>
    )
}

export default Countries;