import {useEffect, useState} from 'react';
import {CiBookmarkPlus, CiShare2} from 'react-icons/ci';
import {Link} from 'react-router-dom';

const MainNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('data/news.json')
            .then((res) => res.json())
            .then((data) => setNews(data));
    }, []);
    return (
        <div>
            <p className="text-xl font-semibold text-[#403F3F] mb-3">
                Dragon News Home
            </p>

            {news.map((result) => {
                return (
                    <div key={result._id} className="mb-7">
                        <div className="bg-[#F3F3F3] flex justify-between py-3 px-5">
                            <div className="flex space-x-2">
                                <img
                                    className="w-12 rounded-full"
                                    src={result.author.img}
                                    alt={result.author.img}
                                />

                                <div>
                                    <p>{result.author.name}</p>
                                    <p>{result.author.published_date}</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <p>
                                    <CiBookmarkPlus />
                                </p>
                                <p>
                                    <CiShare2 />
                                </p>
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-3xl font-medium">
                                {result.title}
                            </h3>
                            <img
                                className="py-3 w-full h-80"
                                src={result.thumbnail_url}
                                alt={result.thumbnail_url}
                            />
                            <p>
                                {result.details.slice(0, 200)}
                                <Link
                                    to={`/news/${result._id}`}
                                    className=" text-blue-600 font-bold">
                                    read more....
                                </Link>
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MainNews;
