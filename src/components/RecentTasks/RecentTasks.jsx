import "./RecentTasks.css";

const RecentTasks = () => {

const tasks=[

{
title:"Complete Redux Slice",
status:"Completed"
},

{
title:"Design Dashboard",
status:"In Progress"
},

{
title:"Write Test Cases",
status:"Pending"
},

];

return(

<div className="recent-card">

<h3>Recent Tasks</h3>

{tasks.map((task,index)=>(

<div
key={index}
className="recent-item"
>

<div>

<h4>{task.title}</h4>

<p>{task.status}</p>

</div>

</div>

))}

</div>

);

};

export default RecentTasks;