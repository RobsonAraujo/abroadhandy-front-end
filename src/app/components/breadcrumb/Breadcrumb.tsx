"use client";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { usePathname } from "next/navigation";
import { default as MUILink } from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Link from "next/link";

function formatLabel(text: string) {
  return text
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((seg) => seg);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = formatLabel(decodeURIComponent(segment));

    const isLast = href === pathname;

    return isLast ? (
      <Typography key={index} color="#007E50" fontWeight="bold">
        {label}
      </Typography>
    ) : (
      <MUILink
        style={{ color: "#007E50" }}
        key={index}
        underline="hover"
        color="inherit"
        href={href}
      >
        <Link href={href}>{label}</Link>
      </MUILink>
    );
  });

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      <MUILink
        style={{ color: "#007E50" }}
        underline="hover"
        key="home"
        color="inherit"
        href="/"
      >
        <Link href="/">Home</Link>
      </MUILink>
      {breadcrumbs}
    </Breadcrumbs>
  );
}
