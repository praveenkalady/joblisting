import { serializeMultipleJobPosts } from "../utils/serializers";
import JobListItem from "../components/JobListItem";

const Home = ({ jobPosts }) => {
  return (
    <div style={{padding:20}}>
      <ul
        id={"joblisting-list-container"}
        className={"job__listing--list-container"}
      >
        {jobPosts.map((jobPost, index) => (
          <JobListItem
            key={`job-list-${index}`}
            title={jobPost.title}
            summary={jobPost.summary}
            jobTags={jobPost.jobTags}
          />
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps(context) {
  const jobListUrl = `https://staging-v2.impress.ai/api/jobs/team-config/109/list/`;
  const jobPostsPromise = await fetch(jobListUrl);
  const jobPosts = await jobPostsPromise.json();
  return {
    props: {
      jobPosts: serializeMultipleJobPosts(jobPosts.data),
    },
  };
}

export default Home;
