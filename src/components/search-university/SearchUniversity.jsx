import {Link} from 'react-router-dom'
import React from 'react'
import { Component } from 'react'
import COURSES from '../../universities.json'


class SearchUniversity extends Component {
    constructor() {
        super();
        this.state = {
            courses: COURSES,
            searchField: ''
        };
    }
    render() {
                const filteredCourses = this.state.courses.filter((course) => {
                return course.title.toLocaleLowerCase().includes(this.state.searchField);
            }); 
    return (
        <div className='container-background' >
            <input 
            type='search'
            placeholder='Search for your course'
            className='search-box'
            onChange={(event) => {
                const searchField = event.target.value.toLocaleLowerCase();
                this.setState(() => {
                    return {searchField}
                })
        }}
            />
            <div className="card-list">
                
        {
            filteredCourses.map((course) => {
                return  <div className="card-container" key={course.id}>
                    <img src={course.imageUrl} alt='course-tile' className='course-tile'/>
                    <div className="content-container">
                        <h4>{course.title}</h4>
                        <h4>Ranking: {course.id}</h4>
                        <button className='appy'>
                            <Link to='/discover/computer-science/course-details' >APPLY</Link>
                        </button>
                       
                        {/* <Link to={`${course.linkUrl}`} className='learn-more'>Learn More</Link> */}
                    </div>
                </div>
            })
        }
         
            </div>

        </div>
    )
}}


export default SearchUniversity