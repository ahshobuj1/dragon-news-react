import {useParams} from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Header from '../../layout/Header';

const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header />
            <Navbar />

            <div>
                <h1>News details</h1>
                <p>{id}</p>
            </div>
        </div>
    );
};

export default News;
