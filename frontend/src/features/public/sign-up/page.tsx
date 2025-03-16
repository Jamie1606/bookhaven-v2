import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import URL from "@/constant/url";
import { Link } from "react-router";

const SignUpPage = () => {
  return (
    <div className="py-24 bg-custom-background w-full">
      <form className="flex flex-col w-fit mx-auto p-12 shadow-md border rounded-lg">
        <h2 className="text-2xl font-semibold text-custom-text text-center">Create a New Account</h2>
        <div className="mt-12 flex items-center">
          <label htmlFor="name" className="min-w-32 text-custom-text">
            Name:
          </label>
          <Input name="name" id="name" className="min-w-80" type="text" required/>
        </div>
        <div className="mt-8 flex items-center">
          <label htmlFor="email" className="min-w-32 text-custom-text">
            Email:
          </label>
          <Input name="email" id="email" className="min-w-80" type="email" required />
        </div>
        <div className="mt-8 flex items-center">
          <label htmlFor="password" className="min-w-32 text-custom-text">
            Password:
          </label>
          <Input name="password" id="password" className="min-w-80" type="password" required />
        </div>
        <Button className="mt-8">Sign Up</Button>
        <Link className="mt-8 mx-auto text-blue-600 hover:underline hover:underline-offset-4" to={URL.SIGNIN}>
          Already have an account? Sign In!
        </Link>
      </form>
    </div>
  );
};

export default SignUpPage;
