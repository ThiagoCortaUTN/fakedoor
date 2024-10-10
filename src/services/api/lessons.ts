export async function getLessons() {
  const response = await fetch(
    'https://fake-door-develop.azurewebsites.net/api/lessons/get-simple'
  );

  return response?.json();
}
