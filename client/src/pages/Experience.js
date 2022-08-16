import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="rgb(175, 0, 0)">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          iconStyle={{ background: "rgb(175, 0, 0)", color: "#3b3b3b" }}
          icon={<SchoolIcon />}
        >
          <h2 className="vertical-timeline-element-title">
            This project is developed by "shadly ben hajel"
          </h2>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          iconStyle={{ background: "rgb(175, 0, 0)", color: "#3b3b3b" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          this site is supervised by "GOMYCODE (Nabeul)"
          </h3>

         

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: "rgb(175, 0, 0)", color: "#3b3b3b" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Full-stack JavaScript Developer  - GOMYCODE
          </h3>
          
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: "rgb(175, 0, 0)", color: "#3b3b3b" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          This site is a work in progress and still under development,
          improvments will come up soon. 
          </h3>
          
          
          
        </VerticalTimelineElement>
      </VerticalTimeline>
     
    </div>
  );
}

export default Experience;
