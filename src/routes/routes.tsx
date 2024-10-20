import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage'
import CoursePage from '../pages/Courses';
import MainLayout from '../pages/MainLayout';
// import MyStoryPage from './pages/MyStoryPage';
// import ContactPage from './pages/ContactPage';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="course" element={<CoursePage />} />
                    {/* <Route path="my-story" element={<MyStoryPage />} />
                    <Route path="contact" element={<ContactPage />} /> */}
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;