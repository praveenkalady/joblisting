import React from 'react';
import Link from "next/link"
import { ImIcons,ImComponents } from "../ImpressLibrary/Library";

const JobListItem = ({
    title,
    summary,
    jobTags,
    fullString,
    id
}) => {
  return (
    <Link href={`/${id}/`}>
    <li
    className={"job__listing--public-list-item"}
  >
    <div className={"header"}>
      <div className={"header__info--left"}>
        <h6 className={"header__info--head"}>{title}</h6>
        <label>
          <div>
            <ImIcons name={"locationIcon"} />
          </div>
          <p>{fullString}</p>
        </label>
      </div>
      <div className={"header__info--right"}>
        <ImComponents
          componentName={"ImButton"}
          child={"Apply now"}
          type={"transparent"}
          className={"orange__variant"}
        />
      </div>
    </div>
    <div className={"footer"}>
      <p>{summary}</p>
      <div className={"footer__extra--info"}>
        <div>
          {jobTags?.map(({name}, index) => (
            <ImComponents
              componentName={"ImTooltip"}
              placement={"top"}
              text={name}
              key={index}
              child={
                <ImComponents
                  componentName={"ImTag"}
                  value={name}
                />
              }
            />
          ))}
        </div>
        <div>
          {/* <label>{formatedJobPostedTime}</label> */}
        </div>
      </div>
    </div>
  </li>
  </Link>
  )
}

export default JobListItem