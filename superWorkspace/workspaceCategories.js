const { Gio } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();

/* exported WorkspaceCategories */
var WorkspaceCategories = {
    web: {
        icon: Gio.icon_new_for_string(
            `${Me.path}/assets/icons/web-symbolic.svg`
        ),
        title: _('Internet'),
        categoriesIncluded: ['Network'],
        categoriesExcluded: [
            'Chat',
            'InstantMessaging',
            'IRCClient',
            'Feed',
            'VideoConference',
            'Email',
            'ContactManagement',
            'Security',
            'Game'
        ],
        applicationsIncluded: [],
        applicationsExcluded: [],
        acceptAll: false,
        acceptOrphans: false,
        primary: true
    },
    development: {
        icon: Gio.icon_new_for_string(
            `${Me.path}/assets/icons/code-braces-symbolic.svg`
        ),
        title: _('Development'),
        categoriesIncluded: ['Development'],
        categoriesExcluded: [],
        applicationsIncluded: [],
        applicationsExcluded: [],
        acceptAll: false,
        acceptOrphans: false,
        primary: true
    },
    social: {
        icon: Gio.icon_new_for_string(
            `${Me.path}/assets/icons/forum-symbolic.svg`
        ),
        title: _('Social'),
        categoriesIncluded: [
            'Chat',
            'InstantMessaging',
            'IRCClient',
            'Feed',
            'VideoConference',
            'Email',
            'ContactManagement'
        ],
        categoriesExcluded: [],
        applicationsIncluded: [],
        applicationsExcluded: [],
        acceptAll: false,
        acceptOrphans: false,
        primary: true
    },
    office: {
        icon: Gio.icon_new_for_string(
            `${Me.path}/assets/icons/folder-symbolic.svg`
        ),
        title: _('Office'),
        categoriesIncluded: ['Office', 'FileManager'],
        categoriesExcluded: ['ContactManagement'],
        applicationsIncluded: [],
        applicationsExcluded: [],
        acceptAll: false,
        acceptOrphans: false,
        primary: true
    },
    graphics: {
        icon: Gio.icon_new_for_string(
            `${Me.path}/assets/icons/palette-symbolic.svg`
        ),
        title: _('Graphics'),
        categoriesIncluded: ['Graphics'],
        categoriesExcluded: [],
        applicationsIncluded: [],
        applicationsExcluded: [],
        acceptAll: false,
        acceptOrphans: false,
        primary: true
    },
    multimedia: {
        icon: Gio.icon_new_for_string(
            `${Me.path}/assets/icons/play-circle-outline-symbolic.svg`
        ),
        title: _('Multimedia'),
        categoriesIncluded: ['AudioVideo'],
        categoriesExcluded: [],
        applicationsIncluded: [],
        applicationsExcluded: [],
        acceptAll: false,
        acceptOrphans: false,
        primary: true
    },
    game: {
        icon: Gio.icon_new_for_string(
            `${Me.path}/assets/icons/google-controller-symbolic.svg`
        ),
        title: _('Games'),
        categoriesIncluded: ['Game'],
        categoriesExcluded: [],
        applicationsIncluded: [],
        applicationsExcluded: [],
        acceptAll: false,
        acceptOrphans: false,
        primary: true
    },
    /*     other: {
        icon: Gio.icon_new_for_string(
            `${Me.path}/assets/icons/package-symbolic.svg`
        ),
        title: _('Others'),
        categoriesIncluded: [],
        categoriesExcluded: [],
        applicationsIncluded: [],
        applicationsExcluded: [],
        acceptAll: false,
        acceptOrphans: true,
        primary: true
    }, */
    external: {
        icon: Gio.icon_new_for_string(
            `${Me.path}/assets/icons/package-symbolic.svg`
        ),
        title: _('All applications'),
        categoriesIncluded: [],
        categoriesExcluded: [],
        applicationsIncluded: [],
        applicationsExcluded: [],
        acceptAll: true,
        acceptOrphans: false,
        primary: false
    }
};
