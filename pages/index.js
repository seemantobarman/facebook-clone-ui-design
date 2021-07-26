import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import { getSession } from "next-auth/client";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

export default function Home(props) {
    const { session } = props;
    console.log(session);

    if (!session) {
        return <Login />;
    }
    return (
        <div className="bg-gray-100">
            <Head>
                <title>Facebook 2.0</title>
            </Head>

            {/* Header Section */}
            <Header />

            <main className="flex">
                <Sidebar />
                <Feed />
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    return {
        props: {
            session,
        },
    };
}
