export const serializeJobPost = (job) => {
    const postData = {
      chatbotUrl: job?.chatbot_url || "",
      createdAt: job?.created_at || "",
      updatedAt: job?.updated_at || "",
      description: job?.description || "",
      enabled: job?.enabled || false,
      id: job?.id || -1,
      jobLocation: {
        country: job?.job_location?.country || "",
        fullString: job?.job_location?.full_string || "",
        id: job?.job_location?.id || -1,
        name: job?.job_location?.name || "",
      },
      jobTags: job?.job_tags || [],
      jobUuid: job?.job_uuid || "",
      summary: job?.summary || "",
      title: job?.title || "",
    };
    return postData;
  };
  
  export const serializeMultipleJobPosts = (jobList = []) => {
    const transformedJobPosts = jobList?.map((job) => serializeJobPost(job));
    return transformedJobPosts;
  };

