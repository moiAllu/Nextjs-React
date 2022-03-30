import NewDetailPage from "../../components/meetups/newDetailPage";

const newDescription = () => {
  return (
    <NewDetailPage
      image="https://c4.wallpaperflare.com/wallpaper/451/732/57/nissan-gtr-r35-red-car-wallpaper-preview.jpg"
      title="Nissan GTR R34"
      description="A rocket bunny kit attached to 2019 Gtr, where Hks mid pige,Hks turbo,Hks ECU, has been upgraded"
      address="Malborne, Australia"
    />
  );
};
export async function getStaticPaths(){
    return{
        fallback:false,
        paths:[
            { params:{
                meetupId:'m1'
            },
        },
        {
            params:{
                meetupId:'m2',
            }
        }
        ]
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
