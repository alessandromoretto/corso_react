import {AddCourseRequest, Category, IAuthContext} from "../../lib/interfaces.ts";
import {useNavigate, useParams} from "react-router-dom";
import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {
    addCourseService,
    getAllCategoriesService,
    getCourseByIdService,
    updateCourseByIdService
} from "../../services/coursesService.ts";
import validationService from "../../services/validationService.ts";
import {AuthContext} from "../context/authContext.tsx";

export function EditCoursePage() {

    let { id } = useParams();

    const navigator = useNavigate();
    const {token, isAdmin} = useContext(AuthContext) as IAuthContext;

    const [course, setCourse] = useState<AddCourseRequest>({category:0, title: '', description: '', duration: 0});
    const [categories, setCategories] = useState<Category[]>([]);


    useEffect(() => {

        if (!isAdmin()) {
            navigator('/login')
        }
        fetchCategories();
        getCourseByIdService(id, token)
            .then(res => {
                console.log(res)
                setCourse(res)
            })
    },[])


    const fetchCategories = () => {
        getAllCategoriesService(token)
            .then(res => {
                setCategories(res)
            })
    };


    const handleUpdate = (e: any) => {
        e.preventDefault();
        const validation = validationService.addCourseValidator(course);
        console.log(validation);
        if (!validation.success) {
            return
        }

        updateCourseByIdService(course, token)
            .then(
                res => {
                    console.log(res)
                    // setTimeout(() => {
                    //     console.log(res);
                    navigator('/')
                    // }, 2000)
                },
                err => console.log(err)
            );
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setCourse({...course, [name]: value});
    }

    return (
        <div className={'w-100 mt-4'}>
            <div className={'mx-auto'}>
                <h1 className="text-center">Add Course</h1>
                <div className="card mx-auto" style={{width: '18rem'}}>
                    <div className="card-body mb-8">
                        <form onSubmit={handleUpdate}>
                            {/*<input name="id" hidden={true} value={course.id} onChange={handleInputChange}/>*/}

                            <div>
                                <label>Title</label>
                                <input name="title" value={course.title} onChange={handleInputChange}/>
                            </div>

                            <div>
                                <label>Description</label>
                                <input name="description" value={course.description} onChange={handleInputChange}/>
                            </div>

                            <div>
                                <label>Duration</label>
                                <input name="duration" type="number" value={course.duration}
                                       onChange={handleInputChange}/>
                            </div>

                            <div>
                                <label>Category</label>
                                <select name="categoryId" onChange={handleInputChange}>
                                    {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                                </select>
                            </div>

                            <button className={'mt-4'}>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}