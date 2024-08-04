import styles from "./page.module.css";

async function getData() {
  const res = await fetch(process.env.STRAPI_BASE_URL + "/api/home-page");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  console.log(data);
  return (
    <main className={styles.main}>{data?.data.attributes?.description}</main>
  );
}
