import HeroSection from "../component/course-component/CourseBanner"
import WhatYoullLearn from "../component/course-component/WhatToLearn"
import WhoIsThisCourseFor from "../component/course-component/WhoIsThisCourseFor"
import WhyThisCourse from "../component/course-component/WhyThisCourse"
import mystorybg from '../assets/images/Group.png'
import cover from '../assets/images/Group 351.jpg'
import MeetYourMentor from "../component/course-component/MeetYourMentor"

const Courses = () => {
    return (
        <div className="min-h-screen">
            <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${cover})` }}>
                <div className="absolute inset-0 z-10"></div>
                <div className="relative z-20">
                    <HeroSection />
                </div>
            </section>
            <section>
                <WhyThisCourse />
            </section>
            <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${mystorybg})` }}>
                <div className="absolute inset-0 z-10"></div>
                <div className="relative z-30">
                    <section className="py-12 px-4 mb-2 sm:px-6 lg:px-8">
                        <WhatYoullLearn />
                    </section>
                </div>
            </div>
            <section>
                <WhoIsThisCourseFor />
            </section>
            <section>
                <MeetYourMentor />
            </section>
        </div>
    )
}

export default Courses