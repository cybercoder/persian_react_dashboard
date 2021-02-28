import React from "react";
import { Grid, Card, Segment } from "semantic-ui-react";

import SampleChart1 from "./sampleChart1";

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Grid stackable>
      <Grid.Row columns="4">
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>عنوان یک آیتم</Card.Header>
              <Card.Meta>زیرعنوان</Card.Meta>
              <Card.Description>این یک توضیح است</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>عنوان یک آیتم</Card.Header>
              <Card.Meta>Co-Worker</Card.Meta>
              <Card.Description>این یک توضیح است</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>عنوان یک آیتم</Card.Header>
              <Card.Meta>زیرعنوان</Card.Meta>
              <Card.Description>این یک توضیح است</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>عنوان یک آیتم</Card.Header>
              <Card.Meta>زیرعنوان</Card.Meta>
              <Card.Description>این یک توضیح است</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns="3">
        <Grid.Column>
          <Segment textAlign="center">
            <SampleChart1 />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <SampleChart1 />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <SampleChart1 />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
