import {
  default as MUIPagination,
  PaginationProps,
} from "@mui/material/Pagination";

const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <MUIPagination
      {...props}
      sx={{
        ...props.sx,
        "& .MuiPaginationItem-root": {
          fontWeight: 400,
          fontSize: "11px",
          color: "#1E3C31",
        },
        "& .MuiPaginationItem-page.Mui-selected": {
          backgroundColor: "#1E3C31",
          color: "#fff",
        },
        "& .MuiPaginationItem-previousNext": {
          "& svg": {
            fill: "#0AA86F",
          },
        },
      }}
    />
  );
};

export default Pagination;
