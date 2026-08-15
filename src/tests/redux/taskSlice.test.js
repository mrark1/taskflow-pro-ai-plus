import { test, expect } from "vitest";

import reducer,{
    updateTask,
    deleteTask,
} from "../../redux/slices/taskSlice";

test("updates a task",()=>{

    const initialState={
        tasks:[
            {
                id:1,
                title:"Old",
                completed:false,
            },
        ],
    };

    const next=reducer(
        initialState,
        updateTask({
            id:1,
            title:"New",
            completed:true,
        })
    );

    expect(next.tasks[0].title).toBe("New");

});

test("deletes a task",()=>{

    const initialState={
        tasks:[
            {
                id:1,
                title:"Task",
            },
        ],
    };

    const next=reducer(
        initialState,
        deleteTask(1)
    );

    expect(next.tasks).toHaveLength(0);

});