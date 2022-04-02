import NewDetailPage from "../../components/meetups/newDetailPage";
import { MongoClient } from "mongodb";
const newDescription = () => {
  return (
    <NewDetailPage
      image="https://c4.wallpaperflare.com/wallpaper/451/732/57/nissan-gtr-r35-red-car-wallpaper-preview.jpg"
      title="Nissan GTR R34"
      description="A rocket bunny kit attached to 2019 Gtr, where Hks mid pige,Hks turbo,Hks ECU, has been upgraded."
      address="Malborne, Australia"
    />
  );
};
export async function getStaticPaths(){
    const client=MongoClient.connect('mongodb+srv://AliQans:lawaA123@cluster0.r2ac1.mongodb.net/carX?retryWrites=true&w=majority');
    const db = client.db();
    const carsCollection = db.collection("carX");
    const carX_Dettail = await carsCollection.find({},{_id:1}).toArray();
    return{
        fallback:false,
        paths: carX_Dettail.map(id=>({
            params:{meetupId: id._id.toSting(),}
        }))
    }
}
export  async function getStaticProps(context){
    const contextPath=context.params.meetupId;
    console.log(contextPath);
    return{
        props:{
            image: "https://c4.wallpaperflare.com/wallpaper/451/732/57/nissan-gtr-r35-red-car-wallpaper-preview.jpg",
            id:contextPath,
            title: "Nissan GTR R34",
            description : "A rocket bunny kit attached to 2019 Gtr, where Hks mid pige,Hks turbo,Hks ECU, has been upgraded",
            address: "Malborne, Australia",
        },revalidate:1,
    }
}
export default newDescription;
