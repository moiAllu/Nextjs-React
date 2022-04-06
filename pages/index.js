import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import Head from 'next/head';

// const dumyData = [
//   {
//     id: "Nissan",
//     key: "nissan",
//     image:
//       "https://c4.wallpaperflare.com/wallpaper/451/732/57/nissan-gtr-r35-red-car-wallpaper-preview.jpg",
//     title: "Nissan GTR R34",
//     address:
//       "A rocket bunny kit attached to 2019 Gtr, where Hks mid pige,Hks turbo,Hks ECU, has been upgraded.",
//   },
//   {
//     id: "Supra",
//     key: "toyota",
//     image:
//       "https://manhart-performance.de/wp-content/uploads/2021/09/MANHART-GR-550-Website-Slider-High-Res-3840x1280.jpg",
//     title: "Toyota Supra Mark IV",
//     address:
//       "A custom Build Manhart supra with Upgradation of Custom block, Gear shifter, Hks Exhuast, Sports ECU.",
//   },
// ];

const homePage = (props) => {
  return (
      <Fragment>
          <Head>
              <title>CarX</title>
              <meta name="description" content="Every supports Car around me!"/>
          </Head>
          <MeetupList meetups={props.CarX} />
      </Fragment>
  );
};
export async function getStaticProps() {
  const pass=process.env.PASSWORD;
  const client = await MongoClient.connect(
    `mongodb+srv://AliQans:${pass}@cluster0.r2ac1.mongodb.net/carX?retryWrites=true&w=majority`
  );
  const db = client.db();
  const carsCollection = db.collection("carX");
  const carX_data = await carsCollection.find().toArray();
    client.close();
  return {
    props: {
      CarX: carX_data.map(car=>({
          title:car.title,
          address :car.address,
          image: car.image,
          id: car._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default homePage;
