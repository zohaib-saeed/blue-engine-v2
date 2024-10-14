import { v4 as uuidv4 } from "uuid";

export const genearteUuid = () => {
  const id = `mantine-${uuidv4().replace(/-/g, "")}`;
  return id;
};
