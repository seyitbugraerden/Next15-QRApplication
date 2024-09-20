import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getUserFunction = async () => {
    const { getUser } = await getKindeServerSession();
    const user = getUser();
    return user;
};
