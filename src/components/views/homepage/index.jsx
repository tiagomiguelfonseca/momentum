import React from "react";
import SearchAppBar from "../../SearchAppBar";
import TreeDImage from "../../3DFolders";
import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { createVideo, getVideo } from "./query";
import { Box } from "@mui/system";

function Homepage() {
  const [text, setText] = useState(
    "Ipsum commodo velit esse qui nulla minim fugiat ut sit ullamco pariatur eiusmod sit. Duis cillum sint enim aliquip esse non fugiat reprehenderit nostrud dolor adipisicing veniam. Pariatur sit veniam mollit amet cillum nisi consectetur id incididunt commodo. Amet amet officia aliquip cupidatat magna. Deserunt officia commodo qui amet aliqua proident veniam anim. Anim velit irure dolore voluptate non cillum cillum irure. Culpa magna magna ullamco tempor. Dolore ut adipisicing do commodo nostrud ullamco eiusmod quis do cillum mollit excepteur anim quis."
  );

  const { isLoading, isError, data, error } = useQuery(["VIDEO"], () =>
    getVideo()
  );

  console.log(data, "video");

  const { status, data: video } = useMutation(
    "VIDEO-GENERATOR",
    ({ textToSearch = text }) => createVideo(textToSearch)
  );

  const searchVideoFromText = useMutation(() => createVideo(text));

  const setTextToSend = (text) => {
    setText(text);
  };

  const searchVideo = (text) => {
    //searchVideoFromText.mutate()
    console.log(data);
  };

  return (
    <Box>
      <SearchAppBar />
      <TreeDImage />
      <video src={data ? data.url : ""} controls>
        Your browser does not support the video tag.
      </video>
    </Box>
  );
}

export default Homepage;
