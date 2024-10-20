import { Outlet } from 'react-router-dom';
import Header from '../component/home-component/Header';
import Footer from '../component/home-component/Footer';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Header />
            <div className="flex flex-1">
                <main className="flex-1 flex-col flex bg-muted/40">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;