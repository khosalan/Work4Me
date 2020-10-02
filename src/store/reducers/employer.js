import Job from "../../models/jobs";

import { JOBS } from "../../data/dummy-data";
import { CREATE_JOB, SET_REQUESTS } from "../actions/employer";

const initialState = {
  postedJobs: JOBS.filter((job) => job.employer === "emr01"),
  jobRequests: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_REQUESTS:
      return {
        ...state,
        jobRequests: action.jobRequests,
      };

    case CREATE_JOB:
      const newJob = new Job(
        action.data.id,
        action.data.title,
        "",
        action.data.category,
        action.data.description,
        "",
        "",
        action.data.salary,
        "",
        "",
        action.data.address,
        action.data.location,
        action.data.createdDate,
        action.data.owner
      );

      // console.log(newJob);

      return { ...state, postedJobs: state.postedJobs.concat(newJob) };

    default:
      return state;
  }
};
