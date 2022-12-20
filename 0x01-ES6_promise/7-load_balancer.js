export default async function loadBalancer(chinaDownload, USDownload) {
  // We can use Promise.race to return the value of the first promise to resolve
  return await Promise.race([chinaDownload, USDownload]);
}
