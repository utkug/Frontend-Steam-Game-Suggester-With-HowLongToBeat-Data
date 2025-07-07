import React from "react";
import "@mantine/core/styles.css";
import { MantineProvider, Text, Title, Paper, Container, Center, rem } from "@mantine/core";
import SteamProfileSearchComponent from "./SteamProfileSearchComponent";
import { IconBrandSteam } from "@tabler/icons-react";

function Home() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          background: "linear-gradient(to bottom, #705fc0, #271658)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <Paper
          shadow="xl"
          radius="md"
          p="xl"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            width: "100%",
            maxWidth: rem(500),
            textAlign: "center",
          }}
        >
          <Center mb="sm">
            <IconBrandSteam size={48} />
          </Center>
          <Title order={2} style={{ fontWeight: 700, marginBottom: "1rem" }}>
            Steam Game Suggester
          </Title>
          <Text size="sm" c="dimmed" mb="md">
            🎮 Get personalized game suggestions based on your Steam library.
          </Text>
          <Text size="xs" c="dimmed" mb="xl">
            Your Steam profile must be public
          </Text>
          <SteamProfileSearchComponent />
        </Paper>
      </div>
    </MantineProvider>
  );
}

export default Home;
