import axios from "axios";

const apiUrl = "https://apis.elai.io/api/v1/videos/generate/url";

export const createVideo = (text) => {
  const options = {
    method: "POST",
    url: "https://apis.elai.io/api/v1/videos/generate/url",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: "Bearer vocc0uAOb2H35XrPxJWlUkT8ctl1qzqM",
    },
    data: {
      from: "https://www.publico.pt/2023/02/08/culturaipsilon/noticia/netflix-anuncia-fim-partilha-contas-portugal-partir-hoje-2038178",
      templateId: "63bbd12f1b866fbaac0bc805",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getVideo = async () => {
  const res = await axios.get(
    "https://apis.elai.io/api/v1/videos/63e51699d4735a546fd6632b",
    {
      headers: {
        accept: "application/json",
        Authorization: "Bearer vocc0uAOb2H35XrPxJWlUkT8ctl1qzqM",
      },
    }
  );

  return res.data;
};
