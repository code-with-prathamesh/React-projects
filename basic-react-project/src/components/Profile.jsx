// import { ProfileCard } from "./ProfileCard";

export const Profile = () => {
  return (
    <>
      <ProfileCard
        name="Alice"
        age={30}
        greetings={
          <span>
            <strong>Hi, Good morning!</strong>
          </span>
        }
      >
        <p>Hobbies: Gaming, Cooking</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name="Sam"
        age={25}
        greetings={
          <span>
            <strong>Hi, Good morning!</strong>
          </span>
        }
      >
        <p>Hobbies: Gaming, Cooking</p>
        <button>Contact</button>
      </ProfileCard>
    </>
  );
};

export const ProfileCard = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>{props.greetings}</p>
      {/* We can access the JSX within the Child Component using props.children */}
      <div>{props.children}</div>
    </>
  );
};
