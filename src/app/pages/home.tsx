import {useContext, useEffect, useState} from "react";
import {getAllCategoriesService, getAllCoursesService} from "../../services/coursesService.ts";
import {AuthContext} from "../context/authContext.tsx";
import {AddCourseRequest, Category, Course, IAuthContext} from "../../lib/interfaces.ts";
import * as React from "react";

export function HomePage() {
    const {token} = useContext(AuthContext) as IAuthContext;

    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        fetchCourses();
    },[])


    useEffect(() => {
        console.log(courses);
    },[courses])

    const fetchCourses = () => {
        getAllCoursesService(token)
            .then(res => {
                setCourses(res)
            })
    };
    return (
        <div>
            <h1>GESTIONE CORSI</h1>
            {courses.map(course =>
                <div key={course.id} className="card mx-auto" style={{width: '18rem'}}>
                    <div className="card-body mb-8">
                        <div>
                            <label>Title: {course.title}</label>
                        </div>

                        <div>
                            <label>Description: {course.description}</label>

                        </div>

                        <div>
                            <label>Duration: {course.duration}</label>
                        </div>

                        <div>
                            <label>Category: {course.category.name}</label>
                        </div>


                        {/*<button className={'mt-4'}>Add</button>*/}
                    </div>
                </div>
            )}
        </div>
    )
}