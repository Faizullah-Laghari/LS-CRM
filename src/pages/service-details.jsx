import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/service-details";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"LS CRM"} />
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;
