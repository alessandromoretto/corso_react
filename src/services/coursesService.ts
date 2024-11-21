import {AddCourseRequest, ILogin} from "../lib/interfaces.ts";
import {httpClient} from "../app/utils/httpClient.ts";

export function addCourseService(course: AddCourseRequest, token: string) {
    return httpClient.post('courses', course, token);
}


export function getAllCoursesService(token: string) {
    return httpClient.get('courses', token);
}

export function getAllCategoriesService(token: string) {
    return httpClient.get('courses/categories', token);
}


export function getCourseByIdService(courseId: any, token: string) {
    return httpClient.get('courses/by-id/' + courseId, token);
}

export function updateCourseByIdService(course: any, token: string) {
    return httpClient.put('courses/update/' + course.id, course, token);
}
export function deleteCourseByIdService(courseId: any, token: string) {
    return httpClient.delete('courses/delete/' + courseId, token);
}