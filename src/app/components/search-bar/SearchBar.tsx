"use client";

import { useEffect, useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { CSSProperties } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  caption?: boolean;
  width?: string;
  height?: string;
  style?: CSSProperties;
  stickyOnScroll?: boolean;
}

export default function SearchBar({
  onSearch,
  caption,
  width,
  height,
  style,
  stickyOnScroll,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [stick, setStick] = useState(false);

  const handleSearch = () => {
    onSearch(query.trim());
  };

  const handleClear = () => {
    setQuery("");
  };

  useEffect(() => {
    if (!stickyOnScroll) return;

    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        setStick(true);
      } else {
        setStick(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [stickyOnScroll]);

  const stickStyle = stick
    ? ({
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        width: "100%",
        padding: "16px",
        background: "white",
      } as Partial<CSSProperties>)
    : undefined;

  return (
    <div
      style={{ ...stickStyle, ...style }}
      role="search"
      aria-label="Barra de busca por mentores universitários"
    >
      <TextField
        fullWidth={!width}
        variant="outlined"
        placeholder="Busque por universidade, curso ou mentor"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        slotProps={{
          input: {
            sx: { width, height, background: "#F5F7F6", fontSize: "16px" },
            "aria-label": "Campo de busca por mentores",
            endAdornment: (
              <InputAdornment position="end">
                {query && (
                  <IconButton
                    onClick={handleClear}
                    aria-label="Limpar campo de busca por mentores"
                    color="primary"
                  >
                    <ClearIcon />
                  </IconButton>
                )}
                <IconButton
                  onClick={handleSearch}
                  aria-label="Iniciar busca por mentores"
                  color="primary"
                  disabled={query === ""}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      {caption && (
        <Typography variant="overline" color="textSecondary">
          Pressione <b>ENTER</b> pra fazer uma busca
        </Typography>
      )}
    </div>
  );
}
