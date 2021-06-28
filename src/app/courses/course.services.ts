import { Course } from "./course";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class CourseService {

    retrieveAll(): Course[] {
        return COURSES;
    }

    retrieveById(id: number): Course {
        return COURSES.find((courseIterator : Course) => courseIterator.id)
    }
}

var COURSES: Course[] = [
    { 
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'November 12, 2017',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 127,
        code: 'XEF-5612',
        rating: 5,
        price: 13.99,
        imageUrl: '/assets/images/angular.png',
    },
    { 
        id: 2,
        name: 'Angular: Form',
        releaseDate: 'January 5, 2019',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 220,
        code: 'YLF-1562',
        rating: 3,
        price: 45.99,
        imageUrl: '/assets/images/angular.png',
    },
    { 
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'May 2, 2018',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 130,
        code: 'EDF-6782',
        rating: 2,
        price: 15.99,
        imageUrl: '/assets/images/angular.png',
    },
    { 
        id: 4,
        name: 'React: HTTP',
        releaseDate: 'May 5, 2021',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 130,
        code: 'EDF-6782',
        rating: 5,
        price: 145.99,
        imageUrl: '/assets/images/react.png',
    }
];