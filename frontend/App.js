/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import useImageForm from "./useImageForm";
import Photo from "./Photo";

function App() {
  const { state, loading, error, onChange } = useImageForm(
    "http://localhost:7071/api/HttpTrigger1"
  );

  return (
    <div
      css={css`
        width: 800px;
        margin: 0 auto;
        .alert {
          position: relative;
          padding: 0.75rem 1.25rem;
          margin-bottom: 1rem;
          border: 1px solid transparent;
          border-radius: 0.25rem;
          color: #155724;
          background-color: #d4edda;
          border-color: #c3e6cb;
        }
        .error {
          color: red;
        }
      `}
    >
      <h1>Azure Functions with Tensorflow model</h1>
      <div className="alert">고양이/강아지 사진을 올려주세요.</div>
      {error && <div className="error">{JSON.stringify(error)}</div>}
      {loading && <div className="loading">로딩중 ...</div>}
      {state && <Photo {...state} />}
      <input type="file" name="photo" accept="image/*" onChange={onChange} />
      <hr />
      Microsoft Build 2020
    </div>
  );
}

export default App;
