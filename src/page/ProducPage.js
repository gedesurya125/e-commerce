import React from "react";

import { Layout } from "src/layout";
import {
  ShowCaseImage,
  Container,
  InformationBlock,
  Box,
} from "src/components";

// Data

export const ProducPage = ({ data: { images, information } }) => {
  return (
    <Layout>
      <Container>
        <ShowCaseImage data={images} />
        <InformationBlock data={information} />
      </Container>
    </Layout>
  );
};