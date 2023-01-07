import React from 'react';
import { Headline4, Body1, Body2 } from '@material/react-typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const Index = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={5}>
          <Grid item lg={6}>
            <Paper>
              <Box p={3}>
                <Headline4 color="primary" variant="h3">
                  Lab
                </Headline4>
                <Body1 color="textSecondary" variant="h5">
                  Releasing a new data set for Exploratory Data Analysis and Recommender Models
                </Body1>
                <br />
                <Body2 variant="subtitle1">
                  What is Labs: Labs is a one stop for all Data Science and Machine Learning
                  enthusiasts to learn and contribute to one of the several research activities
                  carried out by SIESGSTarena team. Its a community driven project where every
                  novice and experienced can make use of our datasets and try to come up with
                  several visualizations, pre-trained models and any other research work which can
                  be deployed on SIESGSTarena or published in general.
                  <br />
                  <br />
                  What&apos;s the research: A new research has been started at SIESGSTarena which
                  includes the evaluation of data set currently available consisting of all user
                  data, blog posts and submissions data with code snippets. This data set comprises
                  more than 2500 submissions of more than 350 users. We intend for this data set to
                  serve as a benchmark for doing exploratory data analysis including all sorts of
                  NLP experiments, visualization notebooks, etc. But, we also expect people to work
                  one some sort of recommender model to suggest problems based on user&apos;s
                  performance and recommend blogs based on what sort of content he likes.
                  <br />
                  <br />
                  How it works: We have opensourced a repository: Labs which will contain all sorts
                  of experiments done by community users. We urge users to send PRs on this
                  repository containing notebooks and detailed description as mentioned in its
                  Contributing Guide.
                  <br />
                  <br />
                  Why it matters: In recent years, natural language processing has been a popular
                  field of research. In particular, Google and many big companies are contributing
                  to research datasets and models which are improving the state-of-the-art results.
                  We intend to contribute with small scale data, and motivate students who are
                  interested in NLP to try their hands on this domain.
                </Body2>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={6}>
            <Paper>
              <Box p={2}>
                <Headline4 color="primary" variant="h4">
                  Download Dataset
                </Headline4>
                <Body1 color="textSecondary" variant="subtitle1">
                  Dataset is divided into 4 files: users, blogs, submissions, problems - each
                  containing data for all users, their blog posts, submissions and problems they for
                  which submissions are made.
                </Body1>
                <br />
                <Body2 variant="h6">Type: JSON Array</Body2>
                <Body2 variant="h6">Size: 100KB - 3MB</Body2>
                <Body2 variant="h6">Year: 2018-2020</Body2>
                <br />
                <br />
                <Body2 variant="h6">Link: users.json</Body2>
                <Body2 variant="h6">Link: users.json</Body2>
                <Body2 variant="h6">Link: users.json</Body2>
                <Body2 variant="h6">Link: users.json</Body2>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Index;
