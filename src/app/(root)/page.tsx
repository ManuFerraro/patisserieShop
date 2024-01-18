import LeftMenu from "@/components/shared/LeftMenu";
import { dataUserByToken } from "@/lib/actions/getUser.action"
import { IUserAndToken } from "@/lib/interfaces/User";


export default async function Home() {
  
   
  const { user, success, message, error } = await dataUserByToken() as {user: IUserAndToken, success: boolean, message: string, error: string}
  
  
  
  return (
    <main>
       <LeftMenu user={ user } success={success}/>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>
       <h1>HOLAAAAAAAAAAAAAAAA</h1>

    </main>
  )
}
