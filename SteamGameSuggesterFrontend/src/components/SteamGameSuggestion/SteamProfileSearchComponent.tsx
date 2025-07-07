import React, { useState } from "react";
import { TextInput, ActionIcon } from "@mantine/core";
import { IconSearch, IconBrandSteam } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function SteamProfileSearchComponent() {
  const [steamId, setSteamId] = useState("");
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <TextInput
        radius="xl"
        size="md"
        placeholder="Enter your Steam ID or vanity URL"
        leftSection={<IconBrandSteam size={20} />}
        value={steamId}
        onChange={(e) => setSteamId(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") navigate("/suggest/" + steamId);
        }}
        style={{ flex: 1 }}
      />
      <ActionIcon
        variant="gradient"
        gradient={{ from: "indigo", to: "violet" }}
        size={42}
        radius="xl"
        onClick={() => navigate("/suggest/" + steamId)}
        style={{ marginLeft: 8 }}
      >
        <IconSearch size={22} />
      </ActionIcon>
    </div>
  );
}

export default SteamProfileSearchComponent;
