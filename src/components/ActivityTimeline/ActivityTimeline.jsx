import "./ActivityTimeline.css";

const activity = [

{
title:"Task Completed",
time:"10 min ago"
},

{
title:"New Task Added",
time:"30 min ago"
},

{
title:"Priority Updated",
time:"1 hour ago"
},

{
title:"Dashboard Viewed",
time:"Today"
},

];

const ActivityTimeline = () => {

return(

<div className="timeline-card">

<h3>Recent Activity</h3>

{activity.map((item,index)=>(

<div
className="timeline-item"
key={index}
>

<div className="dot"/>

<div>

<h4>{item.title}</h4>

<p>{item.time}</p>

</div>

</div>

))}

</div>

);

};

export default ActivityTimeline;