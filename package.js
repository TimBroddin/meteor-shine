Package.describe({
    summary: "Provides shine.js."
});

Package.on_use(function(api) {
    api.add_files('client/shine.js', 'client');
});