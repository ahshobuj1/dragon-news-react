import {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';

const NewsLeft = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('data/categories.json')
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.log(err.message));
    }, []);
    return (
        <div>
            <p className="text-xl font-semibold text-[#403F3F]">All Category</p>
            {console.log(categories)}

            <ul>
                {categories.map((category, idx) => (
                    <li
                        key={idx}
                        className="text-xl font-semibold text-[#403F3F] py-4 px-12 hover:bg-slate-300">
                        <NavLink to="/">{category.name}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsLeft;
