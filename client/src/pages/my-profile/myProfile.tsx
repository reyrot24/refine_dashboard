import { BaseRecord, useGetIdentity, useOne } from "@refinedev/core";

import { Profile } from "../../components";

const MyProfile = () => {
  const { data: user } = useGetIdentity<{ userid: string }>();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userid,
  });

  const profile: BaseRecord = data?.data ?? [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <>
      <Profile
        type="My"
        name={profile?.name}
        avatar={profile?.avatar}
        email={profile?.email}
        properties={profile?.allProperties}
      />
    </>
  );
};

export default MyProfile;
