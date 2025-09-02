import Link from "next/link";
import { Box, Typography, Chip } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

interface BlogMenuItemProps {
  isMobile?: boolean;
}

export default function BlogMenuItem({ isMobile = false }: BlogMenuItemProps) {
  return (
    <Link
      href="https://blog.abroadhandy.com/"
      style={{ textDecoration: "none" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          padding: isMobile ? "8px 12px" : "6px 12px",
          borderRadius: "8px",
          transition: "all 0.2s ease-in-out",
          cursor: "pointer",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "#f5f5f5",
            transform: "translateY(-1px)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          },
          "&:active": {
            transform: "translateY(0)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: isMobile ? 32 : 28,
            height: isMobile ? 32 : 28,
            borderRadius: "6px",
            backgroundColor: "#f8f9fa",
            color: "#495057",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: "#e9ecef",
            },
          }}
        >
          <ArticleOutlinedIcon
            sx={{
              fontSize: isMobile ? 18 : 16,
              fontWeight: "bold",
            }}
          />
        </Box>

        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            fontSize: isMobile ? "14px" : "13px",
            color: "#333",
            letterSpacing: "0.025em",
            textTransform: "none",
          }}
        >
          Blog
        </Typography>

        <Chip
          label="Novo"
          size="small"
          sx={{
            height: isMobile ? 20 : 18,
            fontSize: isMobile ? "10px" : "9px",
            fontWeight: "bold",
            backgroundColor: "#7723FF",
            color: "white",
            "& .MuiChip-label": {
              padding: "0 6px",
            },
          }}
        />
      </Box>
    </Link>
  );
}
