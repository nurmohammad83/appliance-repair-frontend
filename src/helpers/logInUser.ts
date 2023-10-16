const { signIn } = require("next-auth/react");

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const res = await signIn("pro-tech-fixer", {
    email,
    password,
    redirect: false,
  });
  return res;
};
