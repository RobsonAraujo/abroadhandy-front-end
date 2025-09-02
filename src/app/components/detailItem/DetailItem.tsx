"use client";

import { Typography } from "@mui/material";
import Button from "@/app/components/button/Button";
import Ray from "@/app/icons/Ray";
import { CSSProperties } from "react";
import Link from "next/link";

interface DetailItemProps {
  label: string;
  value?: string | null;
  premiumFeature?: boolean;
  style?: CSSProperties;
  href?: string;
}

export default function DetailItem({
  label,
  value,
  premiumFeature = false,
  style,
  href,
}: DetailItemProps) {
  const renderValue = () => {
    if (!value) {
      return <Typography color="defaultGrey">Não Disponível</Typography>;
    }

    if (href) {
      return (
        <Link href={href} target="_blank">
          <Typography color="#007E50" style={{ textDecoration: "underline" }}>
            {value}
          </Typography>
        </Link>
      );
    }

    return <Typography>{value}</Typography>;
  };

  const renderPremiumButton = () => (
    <div>
      <Button
        disabled
        style={{
          padding: 0,
          height: "22px",
          width: "99px",
        }}
        startIcon={<Ray />}
        variant="contained"
        aria-label="Faça upgrade"
      >
        <Ray
          width="20px"
          fill="white"
          style={{ paddingRight: 6 }}
          aria-hidden="true"
        />
        <Typography fontSize="10px" fontWeight="bold" color="white">
          Faça upgrade
        </Typography>
      </Button>
    </div>
  );

  return (
    <div style={style}>
      <Typography variant="caption" fontWeight="bold">
        {label}
      </Typography>
      {premiumFeature ? renderPremiumButton() : renderValue()}
    </div>
  );
}
