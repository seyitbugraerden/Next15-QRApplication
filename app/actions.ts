export async function CreateNewQR(formData: any) {
  const link = formData.get("link");
  console.log(link);
  return link;
}
