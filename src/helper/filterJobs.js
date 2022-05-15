export const filterJobs = (jobTags, filters) => {

    return filters.every((value) => jobTags.includes(value));
}