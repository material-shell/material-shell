const { Soup } = imports.gi;

/* exported Check */
var Check = function () {
    try {
        const httpSession = new Soup.Session();
        var message = new Soup.Message({
            method: 'GET',
            uri: new Soup.URI(
                'https://material-shell-backend.herokuapp.com/shell'
            ),
        });
        // send the HTTP request and wait for response
        httpSession.queue_message(message, () => {});
    } catch {
        log('crash');
    }
};
