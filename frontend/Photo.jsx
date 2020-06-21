/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import React from "react";

const Photo = ({ base64, predict }) => {
  return (
    <div
      css={css`
        img {
          max-width: 100%;
        }
        .predict {
        }
      `}
    >
      <img src={base64} alt="photo" />
      <pre className="predict">{JSON.stringify(predict, null, " ")}</pre>
    </div>
  );
};

export default Photo;
