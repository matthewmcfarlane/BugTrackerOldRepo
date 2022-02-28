export const filterByActive = (bugList, Active = true) => {
    return bugList.filter((bug) => bug.active === Active);
}

export const filterByPriority = (bugList, priority="high") => {
    return bugList.filter((bug) => bug.priority === priority);
}

export const filterByUser = (bugList, userAuth0Sub) => {
    const filteredBugList = [];
    for(const bug of bugList){
        if(bug.reporter.auth0Sub === userAuth0Sub){
            filteredBugList.push(bug);
        }
        else{
            for(const assignee of bug.assignees){
                if(assignee.auth0Sub === userAuth0Sub){
                    filteredBugList.push(bug);
                }
            }
        };
    }
    return filteredBugList;
}

export const sortByDate = (bugList, newestFirst = true) => {
    if(newestFirst){
        return bugList.sort((a, b) => Date.parse(a.dateReported) - Date.parse(b.dateReported));
    }
    else{
        return bugList.sort((a, b) => Date.parse(b.dateReported)  - Date.parse(a.dateReported));
    }
}