import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center">
      <h1 className="text-2xl my-2">CodeLitterBox</h1>
      <div className="flex">
        <Button className="mx-2">Login</Button>
        <Button className="mx-2">Sign Up</Button>
      </div>
    </div>
  );
}