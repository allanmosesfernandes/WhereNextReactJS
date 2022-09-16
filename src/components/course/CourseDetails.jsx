import React from 'react'

const CourseDetails = () => {
  return (
    <div className='course-container'>
        <div className="course-details-container">
            <div className="course-left">
                <p className='course-university-name'>Nottingham Trent University</p>
                <h1>Computer Science</h1>
                <p>
                    Develop your specialism in a technologically advanced area as an independent learner who can analyse the requirements for computing applications, evaluate tools and find creative solutions.
                </p>
                <button className='button-6'>
                    <a href='https://www.ntu.ac.uk/course/science-and-technology/pg/msc-computer-science'>Apply </a>
                </button>
            </div>
            <div className="course-right">
                <img src='https://www.shu.ac.uk/-/media/home/olp/lead-image/l0055_shutterstock_719340490.jpg?iar=0&mw=500&sc_lang=en&hash=A0DAA06038DB75D7FC4A9269518187ED' alt='course' />
            </div>
        </div>
        <div className="need-to-know">
            <h2>Everything you need to know...</h2>

            <div className="need-to-know-block">
                <div className="need-to-know-card">
                    <div className="card-left">
                        <img src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23333' fill-rule='nonzero' d='M20 11a8.797 8.797 0 00-1.208-4.517 8.972 8.972 0 00-3.275-3.275A8.797 8.797 0 0011 2a8.797 8.797 0 00-4.517 1.208 8.972 8.972 0 00-3.275 3.275A8.797 8.797 0 002 11c0 1.632.403 3.138 1.208 4.517a8.972 8.972 0 003.275 3.275A8.797 8.797 0 0011 20a8.797 8.797 0 004.517-1.208 8.972 8.972 0 003.275-3.275A8.797 8.797 0 0020 11zm2 0c0 1.996-.492 3.836-1.475 5.521a10.95 10.95 0 01-4.004 4.004C14.836 21.508 12.996 22 11 22s-3.836-.492-5.521-1.475a10.95 10.95 0 01-4.004-4.004C.492 14.836 0 12.996 0 11s.492-3.836 1.475-5.521A10.95 10.95 0 015.48 1.475C7.164.492 9.004 0 11 0s3.836.492 5.521 1.475a10.95 10.95 0 014.004 4.004C21.508 7.164 22 9.004 22 11z'/%3E%3Cpath fill='%23BA0046' d='M7 10.765v-1.12h1.07a9.374 9.374 0 01-.202-.8 3.748 3.748 0 01-.081-.749c0-.444.061-.856.184-1.236.122-.379.312-.705.569-.979.256-.274.583-.489.98-.646.395-.157.87-.235 1.423-.235.49 0 .972.058 1.446.175a6.47 6.47 0 011.214.415l-.35 1.352a5.77 5.77 0 00-.98-.342 3.77 3.77 0 00-.91-.129c-.656 0-1.107.151-1.352.454-.245.302-.368.698-.368 1.189 0 .245.033.493.098.744.066.25.139.513.219.787h1.89l.282 1.12h-1.856c.057.257.086.485.086.684 0 .656-.093 1.246-.278 1.771a3.28 3.28 0 01-.946 1.377h3.38l.401-1.608c.046-.222.191-.333.436-.333h.753L13.868 16H7.3v-.907a9.44 9.44 0 00.42-.684c.136-.245.26-.512.372-.8.11-.288.205-.601.282-.94.077-.34.115-.7.115-1.083 0-.245-.034-.519-.102-.82H7z'/%3E%3C/g%3E%3C/svg%3E"/>
                    </div>
                    <div className="card-right">
                        <h3>What is the Fee?</h3>
                        <p>International/EU: <strong>£14,415</strong> per year</p>
                    </div>
                </div>
                <div className="need-to-know-card">
                    <div className="card-left">
                        <img src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23333' fill-rule='nonzero' d='M20 11a8.797 8.797 0 00-1.208-4.517 8.972 8.972 0 00-3.275-3.275A8.797 8.797 0 0011 2a8.797 8.797 0 00-4.517 1.208 8.972 8.972 0 00-3.275 3.275A8.797 8.797 0 002 11c0 1.632.403 3.138 1.208 4.517a8.972 8.972 0 003.275 3.275A8.797 8.797 0 0011 20a8.797 8.797 0 004.517-1.208 8.972 8.972 0 003.275-3.275A8.797 8.797 0 0020 11zm2 0c0 1.996-.492 3.836-1.475 5.521a10.95 10.95 0 01-4.004 4.004C14.836 21.508 12.996 22 11 22s-3.836-.492-5.521-1.475a10.95 10.95 0 01-4.004-4.004C.492 14.836 0 12.996 0 11s.492-3.836 1.475-5.521A10.95 10.95 0 015.48 1.475C7.164.492 9.004 0 11 0s3.836.492 5.521 1.475a10.95 10.95 0 014.004 4.004C21.508 7.164 22 9.004 22 11z'/%3E%3Cpath fill='%23BA0046' d='M12.833 6.958v6.417a.446.446 0 01-.129.33.446.446 0 01-.329.128H7.792a.446.446 0 01-.33-.129.446.446 0 01-.129-.329v-.917c0-.133.043-.243.13-.33A.446.446 0 017.791 12H11V6.958c0-.133.043-.243.129-.33a.446.446 0 01.33-.128h.916c.134 0 .243.043.33.129a.446.446 0 01.128.33z'/%3E%3C/g%3E%3C/svg%3E"/>
                    </div>
                    <div className="card-right">
                        <h3>How long will I study?</h3>
                        <p>1 Year</p>
                    </div>
                </div>
                <div className="need-to-know-card">
                    <div className="card-left">
                        <img src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23333' fill-rule='nonzero' d='M11.333 1.833c2.93 0 5.5 2.4 5.5 5.135 0 2.836-2.285 6.538-5.5 11.606-3.214-5.068-5.5-8.77-5.5-11.606 0-2.735 2.57-5.135 5.5-5.135zm0-1.833C7.485 0 4 3.12 4 6.968 4 10.817 7.18 15.412 11.333 22c4.154-6.589 7.334-11.183 7.334-15.032S15.182 0 11.333 0z'/%3E%3Cpath fill='%23BA0046' d='M11.333 10.083a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5z'/%3E%3C/g%3E%3C/svg%3E"/>
                    </div>
                    <div className="card-right">
                        <h3>Where will I study?</h3>
                        <p><a href='https://www.google.com/maps/dir//ntu+clifton+campus/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4879c2883cd5672d:0x5d784af4ce4136fb?sa=X&ved=2ahUKEwjLoeW3m5j6AhVTnFwKHfynB0oQ9Rd6BAh1EAQ' className='textDecor'>NTU Clifton Campus</a></p>
                    </div>
                </div>
                <div className="need-to-know-card">
                    <div className="card-left">
                        <img src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='22' height='22'%3E%3Cdefs%3E%3Cpath id='a' d='M11 4.481C8.307 2.804 4.202 2.128 0 2v16.238c3.609.11 7.145.624 9.778 1.829a2.934 2.934 0 002.445 0c2.632-1.205 6.168-1.72 9.777-1.83V2c-4.202.128-8.307.804-11 2.481zm-.917 13.66c-1.398-.5-4.323-1.379-8.25-1.648V3.93c4.727.357 6.9 1.341 8.25 2.14v12.07zm10.084-1.648c-3.926.269-6.852 1.148-8.25 1.65V6.068c.795-.472 1.899-1.015 3.666-1.452v5.633l1.375-1.375 1.375 1.375V4.117a34.91 34.91 0 011.834-.186v12.562z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cuse fill='%23333' fill-rule='nonzero' xlink:href='%23a'/%3E%3Cpath fill='%23BA0046' mask='url(%23b)' d='M15.572 4.625l2.785-.513.947 8.07-4.642.256z'/%3E%3C/g%3E%3C/svg%3E"/>
                    </div>
                    <div className="card-right">
                        <h3>Entry requirements</h3>
                        <p>Computer Science Degree (2.2 minimum) </p>
                    </div>
                </div>

                                <div className="need-to-know-card">
                    <div className="card-left">
                        <img src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23333' fill-rule='nonzero' d='M11.333 1.833c2.93 0 5.5 2.4 5.5 5.135 0 2.836-2.285 6.538-5.5 11.606-3.214-5.068-5.5-8.77-5.5-11.606 0-2.735 2.57-5.135 5.5-5.135zm0-1.833C7.485 0 4 3.12 4 6.968 4 10.817 7.18 15.412 11.333 22c4.154-6.589 7.334-11.183 7.334-15.032S15.182 0 11.333 0z'/%3E%3Cpath fill='%23BA0046' d='M11.333 10.083a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5z'/%3E%3C/g%3E%3C/svg%3E"/>
                    </div>
                    <div className="card-right">
                        <h3>Placement year available</h3>
                        <p><a href='https://www.ntu.ac.uk/course/science-and-technology/pg/msc-computer-science#employability' className='textDecor'>Yes</a></p>
                    </div>
                </div>
                <div className="need-to-know-card">
                    <div className="card-left">
                        <img src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23BA0046' d='M8 9v4H4V9h4zm5 0v4H9V9h4zm1 4V9h4v4h-4zM4 18v-4h4v4H4zm5 0v-4h4v4H9z'/%3E%3Cpath fill='%23333' d='M20 3a2 2 0 012 2v15a2 2 0 01-2 2H2a2 2 0 01-2-2V5a2 2 0 012-2h2v2H2v15h18V5h-3v2h-2V1h2v2h3zM7 5v2H5V1h2v2h7v2H7z'/%3E%3C/g%3E%3C/svg%3E"/>
                    </div>
                    <div className="card-right">
                        <h3>When do I start</h3>
                        <p>September 2022</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="need-to-know">
            <h2>Course Details</h2>
            <h4 className='course-desc'>You will study six core modules and pick one optional module from two choices. If you are a part-time student, you will continue to study the second year from the modules listed below.</h4>

            <p>Core Modules</p>
            <p className='code-title'> Advanced Software Engineering (20 cp)</p>
            <p className='code-summary'> 
                Extend your existing programming skills and develop expertise in a variety of intelligent system engineering contexts and object-orientated program development.
            </p>
            <p className='code-title'> Systems Analysis and Design (20 cp) (20 cp)</p>
            <p className='code-summary'> 
                Understand the life cycle of a software process.The module introduces a number of Systems Development methodologies and associated techniques such as: Systems Analysis and Design, Data Modelling and Usability Engineering.
            </p>
            <p className='code-title'> Service-Oriented Cloud Technologies (20 cp)</p>
            <p className='code-summary'> 
                Learn the theory, practice, and advanced techniques associated with implementing large-scale distributed computing systems in Service-Oriented Architectures (SOA). Gain the necessary knowledge to design and implement enterprise-level computer applications and associated data-storage as services that can be cost-effectively deployed in scalable Cloud infrastructures.
            </p>
            <p className='code-title'> Applied Artificial Intelligence (20 cp)</p>
            <p className='code-summary'> 
                Learn about a variety of artificial intelligence methods such as machine learning, reasoning and optimisation techniques, and how they can be used to solve real-world problems in engineering, operations research and science.
            </p>
            <p className='code-title'> Research Methods (20 cp)</p>
            <p className='code-summary'> 
                You will develop the skills of research and enquiry that will enhance your independent learning abilities and enable you to write effective project reports and technical papers.
            </p>
            <p className='code-title'> Major project (60 cp)</p>
            <p className='code-summary'> 
                On completion of the taught modules on this course you will then have the opportunity to undertake an MSc topic. This gives you 15 weeks to concentrate full time on a specialist area that interests you and apply what you have learnt to a specific problem.
            </p>
        </div>

            <div className="need-to-know">
            <h2>Placement Opportunities</h2>
    <p className='code-summary'>Recent graduates have become technical specialists, support engineers and software engineers for companies such as:
        <ul>
            <li>Siemens</li>
            <li>Schlumberger</li>
            <li>Rolls-Royce</li>
        </ul>
    </p>

        </div>
    </div>
  )
}

export default CourseDetails