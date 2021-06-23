// import Post model
const { Post } = require('../models');

// array of data for Post class
const postData = [
  {
    title: 'Survey: What do you think of this music?',
    content: `Opinions of whhat people think of the posted music`,
    user_id: '3'
  },
  {
    title: 'Survey: Do you like Imagine Dragons?',
    content: `Do you like Imagine Dragons? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi vitae suscipit tellus mauris a. Mattis pellentesque id nibh tortor id. Id ornare arcu odio ut sem nulla pharetra.`,
    user_id: '1'
  },
  {
    title: 'Song Review: Dua Lipa Levitated',
    content: `Let's take a closer look at this song. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dignissim diam quis enim lobortis scelerisque fermentum. Sociis natoque penatibus et magnis dis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet nisl suscipit adipiscing.`,
    user_id: '2'
  },
  {
    title: 'Albulm Review: New Albulm coming out',
    content: `Let's take a closer look at this new albulm. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dignissim diam quis enim lobortis scelerisque fermentum. Sociis natoque penatibus et magnis dis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet nisl suscipit adipiscing.`,
    user_id: '3'
  },
  {
    title: 'Survey: What is your favorite genre?',
    content: `What is your favorite Music Genre?`,
    user_id: '4'
  }
];

// create and insert multiple Posts using postData
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;