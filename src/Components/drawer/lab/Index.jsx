import React from 'react';
import { Headline4, Body2, Subtitle1, Headline6 } from '@material/react-typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import './Style.css';
import DownloadLink from 'react-download-link';

const Index = () => {
  document.title = 'SIESGSTArena | Lab';
  const getDataFromURL = (url) =>
    new Promise((resolve) => {
      setTimeout(() => {
        fetch(url)
          .then((response) => response.text())
          .then((data) => {
            resolve(data);
          });
      });
    }, 2000);
  return (
    <div>
      <Container>
        <Grid container spacing={5}>
          <Grid item lg={6}>
            <Box p={3}>
              <Headline4 className="purple">Lab</Headline4>
              <Headline6 className="gray">
                Releasing a new data set for Exploratory Data Analysis and Recommender Models
              </Headline6>
              <Body2>
                What is Labs: Labs is a one stop for all Data Science and Machine Learning
                enthusiasts to learn and contribute to one of the several research activities
                carried out by SIESGSTarena team. Its a community driven project where every novice
                and experienced can make use of our datasets and try to come up with several
                visualizations, pre-trained models and any other research work which can be deployed
                on SIESGSTarena or published in general.
              </Body2>
              <Body2>
                What&apos;s the research: A new research has been started at SIESGSTarena which
                includes the evaluation of data set currently available consisting of all user data,
                blog posts and submissions data with code snippets. This data set comprises more
                than 2500 submissions of more than 350 users. We intend for this data set to serve
                as a benchmark for doing exploratory data analysis including all sorts of NLP
                experiments, visualization notebooks, etc. But, we also expect people to work one
                some sort of recommender model to suggest problems based on user&apos;s performance
                and recommend blogs based on what sort of content he likes.
              </Body2>
              <Body2>
                How it works: We have opensourced a repository: Labs which will contain all sorts of
                experiments done by community users. We urge users to send PRs on this repository
                containing notebooks and detailed description as mentioned in its Contributing
                Guide.
              </Body2>
              <Body2>
                Why it matters: In recent years, natural language processing has been a popular
                field of research. In particular, Google and many big companies are contributing to
                research datasets and models which are improving the state-of-the-art results. We
                intend to contribute with small scale data, and motivate students who are interested
                in NLP to try their hands on this domain.
              </Body2>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box p={2}>
              <Paper>
                <Box className="datasets-container">
                  <Headline4 className="purple">Download Dataset</Headline4>
                  <Subtitle1 className="italic">
                    Dataset is divided into 4 files: users, blogs, submissions, problems - each
                    containing data for all users, their blog posts, submissions and problems they
                    for which submissions are made.
                  </Subtitle1>
                  <Box className="datasets-discription">
                    <Body2>
                      <b>Type:</b> JSON Array
                    </Body2>
                    <Body2>
                      <b>Size:</b> 100KB - 3MB
                    </Body2>
                    <Body2>
                      <b>Year:</b> 2018-2022
                    </Body2>
                  </Box>

                  <Body2>
                    Link:{' '}
                    <DownloadLink
                      filename="users.json"
                      label={<i className="gray">users.json</i>}
                      exportFile={() =>
                        Promise.resolve(
                          getDataFromURL(
                            'https://res.cloudinary.com/siesgstarena/raw/upload/v1673095123/arena%202.0/datasets/users.json'
                          )
                        )
                      }
                      className="gray und-clr"
                    />
                  </Body2>
                  <Body2>
                    Link:{' '}
                    <DownloadLink
                      filename="blogs.json"
                      label={<i className="gray">blogs.json</i>}
                      exportFile={() =>
                        Promise.resolve(
                          getDataFromURL(
                            'https://res.cloudinary.com/siesgstarena/raw/upload/v1673095122/arena%202.0/datasets/blogs.json'
                          )
                        )
                      }
                      className="gray gray und-clr"
                    />
                  </Body2>
                  <Body2>
                    Link:{' '}
                    <DownloadLink
                      filename="submissions.json"
                      label={<i className="gray">submissions.json</i>}
                      exportFile={() =>
                        Promise.resolve(
                          getDataFromURL(
                            'https://res.cloudinary.com/siesgstarena/raw/upload/v1673095128/arena%202.0/datasets/submissions.json'
                          )
                        )
                      }
                      className="gray gray und-clr"
                    />
                  </Body2>
                  <Body2>
                    Link:{' '}
                    <DownloadLink
                      filename="problems.json"
                      label={<i className="gray">problems.json</i>}
                      exportFile={() =>
                        Promise.resolve(
                          getDataFromURL(
                            'https://res.cloudinary.com/siesgstarena/raw/upload/v1673095123/arena%202.0/datasets/problems.json'
                          )
                        )
                      }
                      className="gray gray und-clr"
                    />
                  </Body2>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Index;
