import React from 'react';
import Viewer from '../../../common/MarkdownEditor/Viewer';
import BlogFooter from './BlogFooter/BlogFooter';
import BlogHeader from './BlogHeader';

const blogData = [
  {
    id: '5e9c57acd9546300227a1cb4',
    author: 'Ashish Kedarisetti',
    authorRating: 1210,
    authorBio: 'How you look at it is pretty much how youll see it.',
    authorId: '5b6480fa58d190002048aabf',
    lastEdited: 'Apr 20, 2020',
    timeToRead: '2 min',
    title: 'GoodBye Batch 16-20 - Report',
    tags: ['GBYE20', 'Report', 'BE'],
    postedOn: 'Sun Apr 19 2020, 7:22PM',
    recentActivity: '9 days ago',
    content: {
      text: 'Warm greetings to all the coders! \n\n CodeChef Campus Chapter is here with some <i>mysteries related to the Dark Net</i>, left to be unveiled by you!\nOur <b>Online Rated Contest SRM #XV</b> is here to enthrall you and it is set by our FEs: <a href="http://arena.siesgst.ac.in/profile/5d4c24c2a3bf49002216c109" style="color:blue;"><b>Aishwarya Velumani</b></a>, <a href="http://arena.siesgst.ac.in/profile/5d690d4fe783c700228ad9c2" style="color:green;"><b>Prathamesh Gawas</b></a> & <a href="http://arena.siesgst.ac.in/profile/5d60af35ea727e002228269b" style="color:grey;"><b>Vedant Bhamare</b></a>!\n\nWe would like to thank <a href="http://arena.siesgst.ac.in/profile/5b6d84eb2e9049002068df33" style="color:blue;"><b>Barath</b></a> for helping in round preparation and <a href="http://arena.siesgst.ac.in/profile/5b6dcf5ce21df60020be63c4" style="color:purple;"><b>Mithil</b></a>  and <a href="http://arena.siesgst.ac.in/profile/5b5ca6857cf0b100209fe499" style="color:grey;"><b>Rahul</b></a> have been the <b>Contest Admin & Tester</b> for SRM XV  !\n\nSRM XV is going to be held online on <b>Sunday, 15 March 2020 from 7 pm IST</b>. SRM XV will have <b>two questions of medium level</b> and <b>one question of hard level</b> difficulty having <b>200-200-300</b>. There is a time penalty of 20 minutes for every unaccepted solution. But the time penalty is only applied once the solution becomes accepted.\n\nWe do encourage referencing of online resources in case of any difficulty but any form of plagiarism will be met by strict action.\n\nFeel free to contact us or anyone in the CodeChef Campus Chapter team if there\'s any kind of discrepancy found in the problem statements.\n\nIt\'s time to start SHERLOCKing and unravel the mystery inside the Dark Web!\n\nSee you all on the scoreboard at 7 pm!\n\nGodspeed!',
    },

  },
];


const BlogContent = () => {
  const {
    content, author, authorId, lastEdited, title, tags, timeToRead, authorRating,
  } = blogData[0];
  return (
    <div className="pa2 ba b--transparent br4 ma3">
      <BlogHeader author={author} authorId={authorId} title={title} authorRating={authorRating} lastEdited={lastEdited} timeToRead={timeToRead} tags={tags} />
      <div className="">
        <Viewer value={content.text} />
      </div>
      <BlogFooter />
    </div>
  );
};
export default BlogContent;
