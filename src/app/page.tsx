import { redirect } from "next/navigation";


export default function Home() {
  
    // we will redirect to our welcome page called page.tsx in the pages folder
    // no parentheses around folder name
    // redirect('./pages/WelcomePage');

    // with parentheses around folder name
    redirect('./WelcomePage');

}
