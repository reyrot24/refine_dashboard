import React from "react";
import { useRouterContext, useLink, useRouterType } from "@refinedev/core";
import MuiLink from "@mui/material/Link";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import type { RefineLayoutThemedTitleProps } from "@refinedev/mui";
import { logo, yariga } from "../../assets";

const defaultIcon = <img src={logo} />;

export const ThemedTitleV2: React.FC<RefineLayoutThemedTitleProps> = ({
  collapsed,
  wrapperStyles,
  icon = defaultIcon,
}) => {
  const routerType = useRouterType();
  const Link = useLink();
  const { Link: LegacyLink } = useRouterContext();

  const ActiveLink = routerType === "legacy" ? LegacyLink : Link;

  return (
    <MuiLink
      to="/"
      component={ActiveLink}
      underline="none"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        ...wrapperStyles,
      }}
    >
      {collapsed ? (
        <img src={logo} alt="Yariga logo" width="28px" />
      ) : (
        <img src={yariga} alt="Yariga" width="140px" />
      )}
    </MuiLink>
  );
};
