import "./DashboardCards.css";

import {
FiCheckCircle,
FiClock,
FiAlertCircle,
FiClipboard,
} from "react-icons/fi";

import StatsCard from "../StatsCard/StatsCard";

const DashboardCards = () => {

return(

<div className="dashboard-grid">

<StatsCard
title="Total Tasks"
value="28"
icon={<FiClipboard/>}
color="#2563eb"
/>

<StatsCard
title="Completed"
value="18"
icon={<FiCheckCircle/>}
color="#16a34a"
/>

<StatsCard
title="Pending"
value="7"
icon={<FiClock/>}
color="#d97706"
/>

<StatsCard
title="Overdue"
value="3"
icon={<FiAlertCircle/>}
color="#dc2626"
/>

</div>

);

};

export default DashboardCards;