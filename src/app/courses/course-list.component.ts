import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
})

export class CourseListComponent implements OnInit{
    ngOnInit(): void {
      this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                releaseDate: 'november, 2, 2019'
            },
            {
            
                id: 2,
                name: 'Angular: http',
                imageUrl: '',
                price: 45.99,
                code: 'LKU-8656',
                duration: 780,
                rating: 9.4,
                releaseDate: 'december, 2, 2019'
            }
      ]
    }

    courses: Course[] = [];


}