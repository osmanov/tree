import groupBy from 'lodash.groupby';

export function Parse(verticals,categories,courses){
    const coursesGroupByCategories=groupBy(courses, course=> course.Categories);

    categories=categories.map(category=>{
        const Courses=coursesGroupByCategories[category.Id].map(data=>{
            const {Categories,...other}=data;
            return {...other}
        })

        return {  
            ...category,
          Opened:false,
          Courses
        }
    });

    const categoriesGroupByVerticals=groupBy(categories, category=> category.Verticals);
    return verticals.map(vertical=>{
        const Categories=categoriesGroupByVerticals[vertical.Id].map(data=>{
            const {Verticals,...other}=data;
            return {...other}
        })
        return {
            ...vertical,
            Opened:false,
            Categories
        }
      })
}