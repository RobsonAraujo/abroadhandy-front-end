"use client";

import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@/app/icons/MenuIcon";
import CloseIcon from "@/app/icons/CloseIcon";
import BlogMenuItem from "../blogMenuItem/BlogMenuItem";

import Button from "../button/Button";
import Ray from "@/app/icons/Ray";
import { usePathname, useRouter } from "next/navigation";
import { ROUTE } from "@/app/types/generic";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      text: "Início",
      icon: <HomeIcon />,
      href: "/",
      active: pathname === "/",
    },
    {
      text: "Buscar Empresas",
      icon: <BusinessIcon />,
      href: `/${ROUTE.BUSCAR_EMPRESA}`,
      active: pathname.includes(ROUTE.BUSCAR_EMPRESA),
    },
  ];

  const toggleDrawer = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <>
      <IconButton
        onClick={() => toggleDrawer(true)}
        sx={{
          color: "#333",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        }}
        aria-label="Abrir menu"
      >
        <MenuIcon width="24" height="24" fill="#333" />
      </IconButton>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 320,
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          },
        }}
      >
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: "1px solid #f0f0f0",
              backgroundColor: "#fafafa",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#333",
                fontSize: "18px",
              }}
            >
              Menu
            </Typography>
            <IconButton
              onClick={() => toggleDrawer(false)}
              sx={{
                color: "#666",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
              aria-label="Fechar menu"
            >
              <CloseIcon width="20" height="20" fill="#666" />
            </IconButton>
          </Box>

          <Divider />

          <Box sx={{ flex: 1, paddingTop: "8px" }}>
            <List sx={{ padding: "0 12px" }}>
              {menuItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      router.push(item.href);
                      toggleDrawer(false);
                    }}
                    sx={{
                      borderRadius: "8px",
                      marginBottom: "4px",
                      backgroundColor: item.active ? "#f8f9fa" : "transparent",
                      "&:hover": {
                        backgroundColor: item.active ? "#e9ecef" : "#f5f5f5",
                      },
                      transition: "all 0.2s ease",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: item.active ? "#495057" : "#666",
                        minWidth: "40px",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontWeight: item.active ? 600 : 500,
                          color: item.active ? "#495057" : "#333",
                          fontSize: "15px",
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            <Box sx={{ padding: "16px 20px" }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  color: "#666",
                  marginBottom: "12px",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Conteúdo
              </Typography>
              <BlogMenuItem isMobile />
            </Box>
          </Box>

          <Box
            sx={{
              padding: "20px",
              borderTop: "1px solid #f0f0f0",
              backgroundColor: "#fafafa",
            }}
          >
            <Button
              variant="contained"
              fullWidth
              disabled
              sx={{
                height: "48px",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              <Ray width="18" fill="white" style={{ marginRight: 8 }} />
              Seja um Mentor
            </Button>

            <Typography
              variant="caption"
              sx={{
                display: "block",
                textAlign: "center",
                color: "#999",
                marginTop: "12px",
                fontSize: "11px",
              }}
            >
              Abroad Handy © 2025
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
