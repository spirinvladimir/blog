var simple = require('simple-blog');

simple.setup({
  name: '{blog: "Spirin Vladimir"}',
  slugType: 'base36', // options: "title" | "base36"
  rootDir: __dirname,
  pageSize: 10,
  publicPath: '/public',
  viewPath: '/views',
  redirectWWW: true,
  rss: {
    description: 'blog',
    author: 'Spirin Vladimir',
    img: '/favicon.ico', // Feed image
    limit: 10 // Feed item cutoff
  }
});

simple.start();
