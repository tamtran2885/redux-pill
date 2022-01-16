import React from "react";

import AppBar from "../components/AppBar";
import MainContainer from "../components/MainContainer";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function withLayout(WrappedComponent) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <>
        <AppBar />
        <MainContainer
          className={props.fullWidth ? "container-fluid" : "container"}
        >
          <WrappedComponent {...props} />
        </MainContainer>
      </>
    );
  }
  return WrapperComponent;
}

export default withLayout;
