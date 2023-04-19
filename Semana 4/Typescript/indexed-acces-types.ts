export interface CourseSubject {
    id : number;
    name : string;
}

export interface Professor{
    name : string;
    age : number; 
    subjects : CourseSubject[];
}

export type ProfessorName = Professor['name'];
export type ProfessorCourseSubject = Professor['subjects'];
export type ProfessorCourseSubjectId = Professor['subjects'][number]['id'];//Drill down -> Navegação, nível a nivel;
export type ProfessorCourseAgeTypes = Professor['name' | 'age'];//Vai retornar tipo uma tupla, podeira fazer var x,y = ProfessorCourseAgeTypes
export type ProfessorCourseAll = Professor[keyof Professor];//Retorna Tudo