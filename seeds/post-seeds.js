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
    title: 'Albulm Review: New Albulm coming out',
    content: `Let's take a closer look at this new albulm. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dignissim diam quis enim lobortis scelerisque fermentum. Sociis natoque penatibus et magnis dis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet nisl suscipit adipiscing.`,
    user_id: '3'
  },
  {
    title: 'Current Trends: Top 10 Extensions for Visual Studio Code',
    content: `Here are the top 10 extensions that are currently trending for VS Code. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris augue neque gravida in fermentum et sollicitudin. Sed felis eget velit aliquet sagittis. Pharetra et ultrices neque ornare aenean euismod. Dolor sed viverra ipsum nunc aliquet. Elit at imperdiet dui accumsan sit amet nulla facilisi. Massa sapien faucibus et molestie ac. Pellentesque diam volutpat commodo sed egestas. Lobortis mattis aliquam faucibus purus. Dignissim suspendisse in est ante in. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Dictum varius duis at consectetur lorem donec massa. Felis eget velit aliquet sagittis id consectetur purus. Id porta nibh venenatis cras sed felis eget. Lectus quam id leo in vitae turpis massa sed. Blandit turpis cursus in hac. Purus ut faucibus pulvinar elementum.`,
    user_id: '2'
  },
  {
    title: 'Survey: What is your ffavorite genre?',
    content: `What is your favorite Music Genre?`,
    user_id: '4'
  }
];

// create and insert multiple Posts using postData
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;