import React from "react";
import { Button, Container, Stack, Typography } from '@mui/material';

function Features() {
  return(
    <Container>
      <Typography variant='h5'> Features</Typography>
      <br></br>
      <Typography variant='h5'> Kafè allows Kafka engineers to:
Visualize the Kafka cluster through its brokers, topics, and replicas
Monitor health metrics like CPU, memory usage, and in-sync replicas
Create and delete topics
Reassign topic replicas
Track unconsumed messages via the Dead Letter Queue (DLQ), alerting engineers when consumer applications are failing to process streaming data

Kafè comes packaged with a pre-configured Docker container, composed of three Kafka brokers, Zookeeper, and Prometheus to enable data scraping from the Java Virtual Machine (JVM). Engineers eager to manage and monitor Kafka via Kafè need only compose up the container and start working with the tool. 

</Typography>
      
    </Container>
  );
}

export default Features;