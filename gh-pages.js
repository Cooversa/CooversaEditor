var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Cooversa/CooversaEditor.git', // Update to point to your repository
        user: {
            name: 'sheyzi', // update to use your name
            email: 'gistkiosk@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);