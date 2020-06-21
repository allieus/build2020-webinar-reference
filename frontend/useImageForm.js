import { useState } from "react";
import Axios from "axios";

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default function useImageForm(apiUrl) {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const onChange = async (e) => {
    setLoading(true);
    setError(null);

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("photo", file);

    try {
      const response = await Axios.post(apiUrl, formData);
      const { data: predict_list } = response;

      const predict = predict_list[0];
      const base64 = await toBase64(file);

      setState({ base64, predict });
    } catch (e) {
      setError(e);
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return { state, loading, error, onChange };
}
