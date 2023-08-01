import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="py-16">
      <div className="flex justify-center">
        <SignIn />
      </div>
    </div>
  );
};

export default page;