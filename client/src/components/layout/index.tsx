import React from "react";
import { ThemedLayoutContextProvider } from "@refinedev/mui";
import { Header as DefaultHeader } from "./header";
import { ThemedSiderV2 as DefaultSider } from "./sider";
import { ThemedTitleV2 as DefaultTitle } from "./title";
import Box from "@mui/material/Box";
import type { RefineThemedLayoutV2Props } from "@refinedev/mui";

export const ThemedLayoutV2: React.FC<RefineThemedLayoutV2Props> = ({
  Sider,
  Header,
  Title,
  Footer,
  OffLayoutArea,
  children,
  initialSiderCollapsed,
}) => {
  const SiderToRender = Sider ?? DefaultSider;
  const HeaderToRender = Header ?? DefaultHeader;
  const TitleToRender = Title ?? DefaultTitle;
  return (
    <ThemedLayoutContextProvider initialSiderCollapsed={initialSiderCollapsed}>
      <Box display="flex" flexDirection="row">
        <SiderToRender Title={TitleToRender} />
        <Box
          sx={[
            {
              display: "flex",
              flexDirection: "column",
              flex: 1,
              minHeight: "100vh",
            },
            { overflow: "auto" },
            { overflow: "clip" },
          ]}
        >
          <HeaderToRender />
          <Box
            component="main"
            sx={{
              p: { xs: 1, md: 2, lg: 3 },
              flexGrow: 1,
              bgcolor: "#f1f1f1",
            }}
          >
            {children}
          </Box>
          {Footer && <Footer />}
        </Box>
        {OffLayoutArea && <OffLayoutArea />}
      </Box>
    </ThemedLayoutContextProvider>
  );
};
