import MeetupList from "../components/meetups/MeetupList";
const dumyData = [
  {
    id: "Nissan",
    key: "nissan",
    image:
      "https://c4.wallpaperflare.com/wallpaper/451/732/57/nissan-gtr-r35-red-car-wallpaper-preview.jpg",
    title: "Nissan GTR R34",
    address:
      "A rocket bunny kit attached to 2019 Gtr, where Hks mid pige,Hks turbo,Hks ECU, has been upgraded.",
  },
  {
    id: "Supra",
    key: "toyota",
    image:
      "https://manhart-performance.de/wp-content/uploads/2021/09/MANHART-GR-550-Website-Slider-High-Res-3840x1280.jpg",
    title: "Toyota Supra Mark IV",
    address:
      "A custom Build Manhart supra with Upgradation of Custom block, Gear shifter, Hks Exhuast, Sports ECU.",
  },
];
const homePage = (props) => {
  return <MeetupList meetups={props.CarX} />;
};
export async function getStaticProps() {
  return {
    props: {
      CarX: dumyData,
    },
    revalidate: 1,
  };
}
export default homePage;
