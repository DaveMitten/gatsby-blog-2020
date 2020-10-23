const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;


  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js');
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
                

        const posts = result.data.allContentfulBlogPost.edges;
        posts.forEach((post, index) => {
          const previous = index === posts.length -1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;





          createPage({
            path: `/blog/${post.node.title}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
              previous,
              next
            }
          });
        });
      })


    );
  });
};

