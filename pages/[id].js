import { useRouter } from "next/router";
import { serializeMultipleJobPosts } from "../utils/serializers";
import { ImComponents,ImIcons } from "../ImpressLibrary/Library";

const JobPostDetails = ({ jobPost }) => {
  const {
    query: { id },
  } = useRouter();
  return (
    <div className={"job__listing--job-details-container"}>
      <div className={"header"}>
        <div className={"header__info--left"}>
          <h6 className={"header__info--head"}>{jobPost.title}</h6>
          <label>
            <ImIcons name={"locationIcon"} />
            <p>{jobPost.jobLocation.fullString}</p>
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
      <div className={"job__listing--content-container"}>
        <div>
          <p>{jobPost.summary}</p>
        </div>
        <div
          className={"job__listing--content"}
          dangerouslySetInnerHTML={{ __html: jobPost.description }}
        />
      </div>
      <div className={"footer"}>
        <div className={"footer__extra--info"}>
          <div>
            {jobPost.jobTags?.map(({ name }, index) => (
              <ImComponents
                componentName={"ImTooltip"}
                placement={"top"}
                text={name}
                key={index}
                child={<ImComponents componentName={"ImTag"} value={name} />}
              />
            ))}
          </div>
          <div>{/* <label>{formatedJobPostedTime}</label> */}</div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
    const jobListUrl = `https://staging-v2.impress.ai/api/jobs/team-config/109/list/`;
    const jobPostsPromise = await fetch(jobListUrl);
    const jobPosts = await jobPostsPromise.json();
    const serializedJobPosts = serializeMultipleJobPosts(jobPosts.data);
    const paths = serializedJobPosts.map(post => {
        return {
            params: {id: `${post.id}`}
        }
    });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  const jobListUrl = `https://staging-v2.impress.ai/api/jobs/team-config/109/list/`;
  const jobPostsPromise = await fetch(jobListUrl);
  const jobPosts = await jobPostsPromise.json();
  const serializedJobPosts = serializeMultipleJobPosts(jobPosts.data);
  const [jobPost] = serializedJobPosts.filter((item) => {
    return item.id == id;
  });
  return {
    props: {
      jobPost: jobPost || null,
    },
  };
}

export default JobPostDetails;
