import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupForms = () => {
   const router=useRouter();
  async function onAddMeetUpHandler(enterCarData) {
    const response = await fetch('/api/newDetailPage', {
      method: "POST",
      body: JSON.stringify(enterCarData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    router.push('/');
  }
  return <NewMeetupForm onAddMeetup={onAddMeetUpHandler} />;
};
export default NewMeetupForms;
