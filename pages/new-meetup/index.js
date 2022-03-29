import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetupForms=()=>{
 const onAddMeetUpHandler=(eventIn)=>{
    console.log(eventIn)
 }
    return<NewMeetupForm onAddMeetup={onAddMeetUpHandler}/>
}
export default NewMeetupForms;