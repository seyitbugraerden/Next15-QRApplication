export const CreateNewQR = async (prevState: any, formData: FormData) => {
  const value = formData.get("name") as string;

  return value
};