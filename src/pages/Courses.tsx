import HeroSection from "../component/course-component/CourseBanner"
import WhatYoullLearn from "../component/course-component/WhatToLearn"
import WhoIsThisCourseFor from "../component/course-component/WhoIsThisCourseFor"
import WhyThisCourse from "../component/course-component/WhyThisCourse"
import mystorybg from '../assets/images/Group.png'

const Courses = () => {
    return (
        <div className=" min-h-screen p-8">
            <section>
                <HeroSection />
            </section>
            <section>
                <WhyThisCourse />
            </section>
            <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${mystorybg})` }}>
                <div className="absolute inset-0  z-10"></div>
                <div className="relative z-20">
                    <section className="py-12 px-4 sm:px-6 lg:px-8">
                        <WhatYoullLearn />
                    </section>
                    <section className="py-12 px-4 sm:px-6 lg:px-8">
                        <WhoIsThisCourseFor />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Courses
