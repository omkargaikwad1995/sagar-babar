import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage'
import CoursePage from '../pages/Courses';
import MainLayout from '../pages/MainLayout';
import MyStoryPage from '../component/home-component/MyStorySection';
import SecondSite from '../pages/SecondSite';
import UltimateBundleCourse from '../pages/UltimateBundleCourse';
import MentorshipPage from '../pages/MentorshipPage';
// import ContactPage from '../component/home-component/'


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="course" element={<CoursePage />} />
                    <Route path="my-story" element={<MyStoryPage />} />
                    <Route path="mentorship" element={<MentorshipPage />} />
                    {/* <Route path="contact" element={<ContactPage />} /> */}
                </Route>
                <Route path="sales-and-marketing" element={<SecondSite />} />
                <Route path="ultimate-business-bundle" element={<UltimateBundleCourse />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;