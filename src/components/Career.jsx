import Header from '../layout/Header';
import MainNews from '../layout/MainNews';
import NewsRight from '../layout/NewsRight';
import Navbar from './Navbar';

const Career = () => {
    return (
        <div>
            <Header />
            <Navbar />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <NewsRight />
                </div>
                <div className="md:col-span-2">
                    <MainNews />
                </div>
            </div>
        </div>
    );
};

export default Career;
