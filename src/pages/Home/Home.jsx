import Navbar from '../../components/Navbar';
import Header from '../../layout/Header';
import MainNews from '../../layout/MainNews';
import NewsLeft from '../../layout/NewsLeft';
import NewsRight from '../../layout/NewsRight';

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border-2">
                    <NewsLeft />
                </div>
                <div className="col-span-2 border-2">
                    <MainNews />
                </div>
                <div className="border-2">
                    <NewsRight />
                </div>
            </div>
        </div>
    );
};

export default Home;
