import { redirect } from "next/navigation";


export default function Home() {
  
    // we will redirect to our welcome page called page.tsx in the pages folder
    redirect('./pages/WelcomePage');

}
