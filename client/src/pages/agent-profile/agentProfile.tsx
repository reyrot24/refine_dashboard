import { BaseRecord, useOne } from "@refinedev/core";
import { useParams } from "react-router-dom";

import { Profile } from "../../components";

const AgentProfile = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: id as string,
  });

  const agentProfile: BaseRecord = data?.data ?? [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <Profile
      type="Agent"
      name={agentProfile?.name}
      avatar={agentProfile?.avatar}
      email={agentProfile?.email}
      properties={agentProfile?.allProperties}
    />
  );
};

export default AgentProfile;
