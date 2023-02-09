import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import { alpha, styled } from "@mui/material/styles";
import * as React from "react";
import "../../assets/fonts/GothamBook.ttf";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    // width: 'auto',
  },
}));

const CustomToolBar = styled(Toolbar)(({ theme }) => ({}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: `calc(1em + ${theme.spacing(14)})`,
    transition: theme.transitions.create("width"),
    // fontFamily: "GothamBook",
    fontWeight: 400,
    fontSize: "48px",
    width: "100%",
    color: "#3C3C3C",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.toLowerCase().includes(query));
  }
};

const data = [
  "Paris",
  "London",
  "New York",
  "Tokyo",
  "Berlin",
  "Buenos Aires",
  "Cairo",
  "Canberra",
  "Rio de Janeiro",
  "Dublin",
];

export default function SearchAppBar() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const dataFiltered = filterData(searchQuery, data);
  console.log(searchQuery);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="transparent"
        position="static"
        className="test"
        sx={{
          boxShadow: 0,
        }}
      >
        <CustomToolBar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon fontSize="large" sx={{ color: "#3C3C3C" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for knowledge, stay ahead"
              inputProps={{ "aria-label": "search" }}
              fullWidth={true}
              onInput={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </Search>
        </CustomToolBar>
      </AppBar>
    </Box>
  );
}
