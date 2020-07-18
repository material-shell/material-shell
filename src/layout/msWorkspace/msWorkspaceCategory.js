var mainCategories = [
    'AudioVideo',
    'Audio',
    'Video',
    'Development',
    'Education',
    'Game',
    'Graphics',
    'Network',
    'Office',
    'Science',
    'Settings',
    'System',
    'Utility',
];

var MsWorkspaceCategory = class MsWorkspaceCategory {
    constructor(msWorkspace) {
        this.msWorkspace = msWorkspace;
    }

    determineCategory() {
        this.msWorkspace.msWindowList.forEach((msWindow) => {});
    }
};
