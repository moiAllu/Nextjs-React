import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react/cjs/react.production.min";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupForms = () => {
  const router = useRouter();
  async function onAddMeetUpHandler(enterCarData) {
    const response = await fetch("/api/newDetailPage", {
      method: "POST",
      body: JSON.stringify(enterCarData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }
  return (
    <Fragment>
      <Head>
        <title>Add new </title>
        <meta
          name="description"
          content="Upload Your Car or your findings of great sports cars"
        />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetUpHandler} />
    </Fragment>
  );
};
export default NewMeetupForms;
