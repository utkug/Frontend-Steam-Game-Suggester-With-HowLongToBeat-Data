import React from "react";
import { Menu, Button } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { setSortKey, setSortOrder } from "../../../redux/GameFilterSlice";
import { IconCheck } from "@tabler/icons-react";
import type { SortKeyType } from "../types/types";

function SortComponent() {
  const { sortKey, sortOrder } = useSelector(
    (store: RootState) => store.gameFilterReducer
  );
  const dispatch = useDispatch();
  const iconChecked = <IconCheck size={14} />

  const sortKeyName = (name: string) => {
    if (name === "suggested") return "Suggested"
    else if (name === "gameplayMain") return "Hours"
    else if (name === "metacriticScore") return "Metacritic"
    else if (name === "topRated") return "Steam Top Rated"
    else if (name === "reviewsCount") return "Steam Reviews Count"
    else if (name === "alphabetical") return "Alphabetical"
    return "Sort Games";
  }

  return (
    <div style={{ marginTop: "25px", marginRight: "50px" }}>
      <Menu shadow="md" width={200} trigger="hover">
        <Menu.Target>
          <Button>
            {sortKey ? `Sort by: ${sortKeyName(sortKey)}` : "Sort Games"}
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Order</Menu.Label>
          <Menu.Item
            onClick={() => dispatch(setSortOrder("asc"))}
            rightSection={sortOrder === "asc" ? iconChecked : true}
            style={(theme) => ({
              root: {
                backgroundColor:
                  sortOrder === "asc" ? "#f0f0f0" : "transparent",
                "&:hover": {
                  backgroundColor: theme.colors.gray[1],
                },
              },
            })}
          >
            Ascending
          </Menu.Item>
          <Menu.Item
            onClick={() => dispatch(setSortOrder("desc"))}
            rightSection={sortOrder === "desc" ? iconChecked : true}
            style={(theme) => ({
              root: {
                backgroundColor:
                  sortOrder === "desc" ? "#f0f0f0" : "transparent",
                "&:hover": {
                  backgroundColor: theme.colors.gray[1],
                },
              },
            })}
          >
            Descending
          </Menu.Item>
          <Menu.Divider /> {/* <hr> yerine Mantine'ın Divider bileşeni */}
          <Menu.Label>Sort Criteria</Menu.Label>
          <Menu.Item
            onClick={() => {
              dispatch(setSortKey("suggested" as SortKeyType));
              dispatch(setSortOrder("normal"));
            }}
            rightSection={sortKey === "suggested" ? iconChecked : true}
            style={(theme) => ({
              root: {
                backgroundColor:
                  sortKey === "suggested" ? "#f0f0f0" : "transparent",
                "&:hover": {
                  backgroundColor: theme.colors.gray[1],
                },
              },
            })}
          >
            Suggested
          </Menu.Item>
          <Menu.Item
            onClick={() => dispatch(setSortKey("gameplayMain" as SortKeyType))}
            rightSection={sortKey === "gameplayMain" ? iconChecked : true}
            style={(theme) => ({
              root: {
                backgroundColor:
                  sortKey === "gameplayMain" ? "#f0f0f0" : "transparent",
                "&:hover": {
                  backgroundColor: theme.colors.gray[1],
                },
              },
            })}
          >
            Hour
          </Menu.Item>
          <Menu.Item
            onClick={() =>
              dispatch(setSortKey("metacriticScore" as SortKeyType))
            }
            rightSection={sortKey === "metacriticScore" ? iconChecked : true}
            style={(theme) => ({
              root: {
                backgroundColor:
                  sortKey === "metacriticScore" ? "#f0f0f0" : "transparent",
                "&:hover": {
                  backgroundColor: theme.colors.gray[1],
                },
              },
            })}
          >
            Metacritic
          </Menu.Item>
          <Menu.Item
            onClick={() => dispatch(setSortKey("topRated" as SortKeyType))}
            rightSection={sortKey === "topRated" ? iconChecked : true}
            style={(theme) => ({
              root: {
                backgroundColor:
                  sortKey === "topRated" ? "#f0f0f0" : "transparent",
                "&:hover": {
                  backgroundColor: theme.colors.gray[1],
                },
              },
            })}
          >
            Steam Top Rated
          </Menu.Item>
          <Menu.Item
            onClick={() => dispatch(setSortKey("reviewsCount" as SortKeyType))}
            rightSection={sortKey === "reviewsCount" ? iconChecked : true}
            style={(theme) => ({
              root: {
                backgroundColor:
                  sortKey === "reviewsCount" ? "#f0f0f0" : "transparent",
                "&:hover": {
                  backgroundColor: theme.colors.gray[1],
                },
              },
            })}
          >
            Steam Reviews Count
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              dispatch(setSortKey("alphabetical" as SortKeyType));
              dispatch(setSortOrder("asc"));
            }}
            rightSection={sortKey === "alphabetical" ? iconChecked : true}
            style={(theme) => ({
              root: {
                backgroundColor:
                  sortKey === "alphabetical" ? "#f0f0f0" : "transparent",
                "&:hover": {
                  backgroundColor: theme.colors.gray[1],
                },
              },
            })}
          >
            Alphabetical
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default SortComponent;
