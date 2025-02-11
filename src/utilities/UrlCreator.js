export default function createUrl(...args){
  const baseUrl = 'https://667db39a297972455f6615d4.mockapi.io/colors';
  const url = new URL(baseUrl);
  if (args.length > 0) {
    args.forEach(element => {
      url.searchParams.append(element.name, element.value);
    });
    return url;
  }
  else return url;
}