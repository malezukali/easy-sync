"use client";

import * as React from "react";
import { extendTheme, styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider, Navigation, Router } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Button from "@mui/material/Button";

const NAVIGATION: Navigation = [
  { kind: "header", title: "Menu" },
  { segment: "home", title: "Home", icon: <DashboardIcon /> },
  { segment: "contratos", title: "Contratos", icon: <PictureAsPdfIcon /> },
  { kind: "divider" },
  { kind: "header", title: "Gestão" },
  {
    segment: "cadastros",
    title: "Cadastros",
    icon: <BarChartIcon />,
    children: [
      { segment: "cliente", title: "Cliente", icon: <SupervisorAccountIcon /> },
      { segment: "contrato", title: "Contratos", icon: <DescriptionIcon /> },
    ],
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: { xs: 0, sm: 600, md: 960, lg: 1200, xl: 1536 },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  return React.useMemo(
    () => ({
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    }),
    [pathname]
  );
}

const Skeleton = styled("div")<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function DashboardLayoutBasic(props: any) {
  const router = useDemoRouter("/dashboard");
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = () => {
    document.cookie = "user_email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "user_password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
  };

  if (!isClient) {
    return null;
  }

  return (
    <AppProvider navigation={NAVIGATION} router={router} theme={demoTheme}>
      <DashboardLayout>
        <PageContainer>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Skeleton height={14} />
            </Grid>
            <Grid item xs={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Skeleton height={100} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Skeleton height={100} />
            </Grid>
            <Grid item xs={12}>
              <Skeleton height={150} />
            </Grid>
            <Grid item xs={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid item xs={6} md={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid item xs={6} md={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid item xs={6} md={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid item xs={6} md={3}>
              <Skeleton height={100} />
            </Grid>
          </Grid>
        </PageContainer>
      </DashboardLayout>
        {
        /* <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button> */
        }
    </AppProvider>
  );
}
