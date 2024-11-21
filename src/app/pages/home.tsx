import {useContext, useEffect, useState} from "react";
import {deleteCourseByIdService, getAllCategoriesService, getAllCoursesService} from "../../services/coursesService.ts";
import {AuthContext} from "../context/authContext.tsx";
import {AddCourseRequest, Category, Course, IAuthContext} from "../../lib/interfaces.ts";
import * as React from "react";
import {useNavigate} from "react-router-dom";

export function HomePage() {
    const {token, isLogged} = useContext(AuthContext) as IAuthContext;
    const navigator = useNavigate();

    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        if (!isLogged()) {
            navigator('/login');
        }
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

    const handleDelete = (id: number) => {
        console.log(id)
        deleteCourseByIdService(id, token)
            .then(res => {
                fetchCourses()
            })
    }
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


                        <button className={'mt-4'} onClick={() => navigator('/' + course.id)}>Edit</button>
                        <button className={'mt-4'} onClick={() => handleDelete(course.id)}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    )
}