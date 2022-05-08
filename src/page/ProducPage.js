import React from "react";

import { Layout } from "src/layout";
import {
  ShowCaseImage,
  Container,
  InformationBlock,
  Box,
} from "src/components";

// Data

export const ProducPage = ({ data }) => {
  return (
    <Layout>
      <Container
        sx={{
          pb: "3em",
        }}
      >
        <ShowCaseImage data={data.images} />
        <InformationBlock data={data} />
      </Container>
    </Layout>
  );
};
