export default async function fetchApi(url: string) {
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
}
