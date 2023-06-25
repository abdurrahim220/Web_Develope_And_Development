import React from 'react';
import InfoTitle from '../../../component/InfoTitle/InfoTitle';

const ExtraSection = () => {
    return (

        <section>

            <InfoTitle
                heading="Drawing Schools"
                subHeading="Extra section">
            </InfoTitle>

            <div className='gap-6 grid lg:grid-cols-2 px-40 my-10'>
                <div className=''>
                    <img src={`https://i.ibb.co/SJ2VD8x/Kids-cool-02.gif`} alt="" />
                </div>

                <div>
                    <p className='text-2xl font-semibold text-orange-200 mb-4 p-5'>
                        Drawing schools offer a variety of educational programs and resources to help individuals develop and enhance their drawing skills. These schools typically provide a structured curriculum and guidance from experienced instructors to support students in their artistic journey. Here are some common features and descriptions associated with drawing schools
                    </p>
                    <div>
                        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-200">
                            <div class="collapse-title text-xl font-medium">
                            Comprehensive Curriculum
                            </div>
                            <div class="collapse-content">
                                <p>Drawing schools offer a well-rounded curriculum that covers various aspects of drawing, including fundamental techniques, anatomy, composition, perspective, shading, and color theory. The curriculum is often designed to cater to different skill levels, from beginners to advanced artists</p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-200">
                            <div class="collapse-title text-xl font-medium">
                            Skill Development
                            </div>
                            <div class="collapse-content">
                                <p>Drawing schools focus on honing and improving students' drawing skills through practice and repetition. They provide exercises and assignments that challenge students to explore different subjects, styles, and mediums, allowing them to broaden their artistic capabilities</p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-200">
                            <div class="collapse-title text-xl font-medium">
                            Life Drawing Sessions
                            </div>
                            <div class="collapse-content">
                                <p>Many drawing schools arrange life drawing sessions, where students have the opportunity to draw from live models. These sessions allow students to observe and capture the nuances of human anatomy, gesture, and expression, helping them develop their observational skills</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExtraSection;